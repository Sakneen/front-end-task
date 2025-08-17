// src/pages/index.tsx
import { useState, useMemo, useEffect } from "react";
import { useDebounce } from "@/lib/useDebounce";
import { useGetListingsQuery } from "@/store/listingsApi";
import { Filters } from "@/components/Filters/Filters";
import PropertyTable from "../components/table/PropertyTable";

export default function HomePage() {
  // Filters state
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12); // dynamic limit (default to lg)
  const [sortField, setSortField] = useState<"unit_id" | "unit_type">(
    "unit_id"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [unitType, setUnitType] = useState<string[]>([]); // <-- changed to array

  const debouncedSearch = useDebounce(search, 400);

  // Convert "All" selection for API
  const appliedUnitTypes = unitType.includes("All") ? [] : unitType;

  // Detect screen size and update limit:
  // - lg and up (>=1024px) -> 12 rows per page
  // - otherwise -> 4 rows per page
  useEffect(() => {
    const computeLimit = () => (window.innerWidth >= 1024 ? 12 : 4);

    const newLimit = computeLimit();
    setLimit(newLimit);

    const handleResize = () => {
      const next = computeLimit();
      setLimit((prev) => {
        if (prev !== next) {
          // if limit changed, reset to page 1 to avoid out-of-range page
          setPage(1);
          return next;
        }
        return prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // empty deps -> run once on mount
  }, []);

  // Fetch listings with all filters applied on the server
  // We depend on page and limit (and other filters)
  const { data, isLoading, error } = useGetListingsQuery({
    page,
    limit,
    sort: sortField,
    order: sortOrder,
    search: debouncedSearch,
    statuses: statusFilters,
    unitType: appliedUnitTypes, // pass array to API
  });

  // Table sort header click: switch order if same column, else set new column asc
  const handleHeaderSort = (
    key: "unit_id" | "unit_type" | "bua" | "status" | "total_price"
  ) => {
    if (key === sortField) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else if (key === "unit_id" || key === "unit_type") {
      setSortField(key);
      setSortOrder("asc");
    }
  };

  const totalPages = useMemo(
    () => (data ? Math.max(1, Math.ceil(data.total / data.limit)) : 1),
    [data]
  );

  // Keep UI page state synced if backend returns different page (optional):
  useEffect(() => {
    if (data && data.page && data.page !== page) {
      setPage(data.page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.page]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Units</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        statusFilters={statusFilters}
        setStatusFilters={setStatusFilters}
        unitType={unitType}
        setUnitType={setUnitType}
      />

      {isLoading && <p className="text-gray-500">Loading listings...</p>}
      {error && <p className="text-red-500">Error loading listings</p>}

      {/* Table */}
      <div className="mt-4">
        <PropertyTable
          rows={data?.data ?? []}
          sort={sortField}
          order={sortOrder}
          onSortChange={handleHeaderSort}
        />
      </div>

      {/* Pagination */}
      {data && (
        <div className="flex flex-col items-center gap-3 mt-8">
          {/* Results summary */}
          <span className="text-gray-600 text-sm">
            Showing {(data.page - 1) * data.limit + 1}–
            {Math.min(data.page * data.limit, data.total)} of {data.total}{" "}
            results
          </span>
          {/* Dot Pagination with sliding window */}
          <div className="flex items-center gap-2">
            {/* Prev */}
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-40"
            >
              ‹
            </button>

            {/* Sliding dots */}
            <div className="flex gap-2">
              {(() => {
                const maxVisible = 4; // show 4 dots
                let start = Math.max(1, page - 1); // sliding window start
                let end = Math.min(totalPages, start + maxVisible - 1);

                if (end - start + 1 < maxVisible) {
                  start = Math.max(1, end - maxVisible + 1);
                }

                return Array.from({ length: end - start + 1 }).map((_, i) => {
                  const pageNum = start + i;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition
              ${
                page === pageNum
                  ? "bg-black text-white scale-110"
                  : "bg-gray-300 text-gray-700"
              }`}
                    >
                      {pageNum}
                    </button>
                  );
                });
              })()}
            </div>

            {/* Next */}
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
