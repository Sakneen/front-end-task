// src/components/Filters/Filters.tsx
import React, { useState, useRef, useEffect } from "react";

interface FiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  sortField: "unit_id" | "unit_type";
  setSortField: React.Dispatch<React.SetStateAction<"unit_id" | "unit_type">>;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;

  statusFilters: string[];
  setStatusFilters: React.Dispatch<React.SetStateAction<string[]>>;
  unitType: string[];
  setUnitType: React.Dispatch<React.SetStateAction<string[]>>;
}

const allStatuses = ["All", "Available", "Unavailable", "Reserved", "Sold"];
const allUnitTypes = [
  "Apartment",
  "Chalet",
  "Twin House",
  "town house",
  "penthouse",
  "villa",
];

const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// Generic multi-select dropdown (used on desktop inline)
function MultiSelectDropdown({
  options,
  selected,
  placeholder,
  onChange,
}: {
  options: string[];
  selected: string[];
  placeholder: string;
  onChange: (selected: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleOption = (option: string) => {
    if (option === "All") {
      // toggle select all / clear all
      if (selected.length === options.length - 1) {
        onChange([]); // already all selected -> clear
      } else {
        onChange(options.filter((o) => o !== "All")); // select all except "All" placeholder
      }
      return;
    }
    onChange(
      selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option]
    );
  };

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "28px",
    color: "#9E9E9E",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="border rounded h-7 px-2 text-left min-w-[140px] flex items-center justify-between"
        style={textStyle}
      >
        <span className="truncate">
          {selected.length ? selected.map(cap).join(", ") : placeholder}
        </span>
        <svg
          className="ml-2 w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 w-56 bg-white border shadow-lg z-20 max-h-48 overflow-auto rounded">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={
                  option === "All"
                    ? selected.length === options.length - 1
                    : selected.includes(option)
                }
                onChange={() => toggleOption(option)}
              />
              <span className="truncate">{cap(option)}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export function Filters({
  search,
  setSearch,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  statusFilters,
  setStatusFilters,
  unitType,
  setUnitType,
}: FiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // local mobile state (so user can apply/reset before closing)
  const [localStatuses, setLocalStatuses] = useState<string[]>(statusFilters);
  const [localUnitTypes, setLocalUnitTypes] = useState<string[]>(unitType);
  const [localSortOrder, setLocalSortOrder] = useState<"asc" | "desc">(
    sortOrder
  );

  // sync when parent changes externally
  useEffect(() => setLocalStatuses(statusFilters), [statusFilters]);
  useEffect(() => setLocalUnitTypes(unitType), [unitType]);
  useEffect(() => setLocalSortOrder(sortOrder), [sortOrder]);

  const textStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "28px",
    color: "#9E9E9E",
  };

  const applyMobile = () => {
    setStatusFilters(localStatuses);
    setUnitType(localUnitTypes);
    setSortOrder(localSortOrder);
    setMobileOpen(false);
  };

  const resetMobile = () => {
    setLocalStatuses([]);
    setLocalUnitTypes([]);
    setLocalSortOrder("asc");
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-6 w-full">
        {/* left: sort field + search */}
        <div className="flex items-center gap-2 flex-1 ">
          <select
            value={sortField}
            onChange={(e) =>
              setSortField(e.target.value as "unit_id" | "unit_type")
            }
            className="border rounded h-7 px-2"
            style={{ ...textStyle, minWidth: 96, padding: "0 10px" }}
          >
            <option value="unit_id">Unit ID</option>
            <option value="unit_type">Unit Type</option>
          </select>

          <div className="relative flex-1 min-w-0">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a unit ID..."
              className="w-[221px] border rounded h-7 pl-2 "
              style={textStyle}
            />
            <svg
              className="w-4 h-4 absolute left-[195px]  top-1.5 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
            </svg>
          </div>
        </div>

        {/* desktop inline controls */}
        <div className="hidden md:flex items-center ml-auto">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border rounded h-7 px-2"
            style={{ ...textStyle, minWidth: 110, padding: "0 10px" }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <MultiSelectDropdown
            options={allStatuses}
            selected={statusFilters}
            placeholder="Statuses"
            onChange={setStatusFilters}
          />

          <MultiSelectDropdown
            options={allUnitTypes}
            selected={unitType}
            placeholder="Unit Types"
            onChange={setUnitType}
          />
        </div>

        {/* mobile filter button (opens bottom sheet) */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border"
          onClick={() => setMobileOpen(true)}
          aria-label="Open filters"
          title="Filters"
        >
          {/* filter/sliders svg */}
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M3 5h18M6 12h12M10 19h4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="3" cy="5" r="0" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* MOBILE BOTTOM SHEET */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* sheet */}
          <div
            className="absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl max-h-[85vh] overflow-auto"
            style={{ animation: "slideUp 220ms ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center border"
                aria-label="Close"
              >
                {/* X svg */}
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 py-4 space-y-5">
              {/* Sort order */}
              <div>
                <label className="block text-sm mb-2">Sort order</label>
                <select
                  value={localSortOrder}
                  onChange={(e) =>
                    setLocalSortOrder(e.target.value as "asc" | "desc")
                  }
                  className="w-full border rounded h-9 px-2"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

              {/* Statuses */}
              <div>
                <div className="text-sm font-medium mb-2">Status</div>
                <div className="border rounded p-2 space-y-1">
                  {allStatuses.map((s) => (
                    <label key={s} className="flex items-center gap-2 py-1">
                      <input
                        type="checkbox"
                        checked={
                          s === "All"
                            ? localStatuses.length === allStatuses.length - 1
                            : localStatuses.includes(s)
                        }
                        onChange={() => {
                          if (s === "All") {
                            if (localStatuses.length === allStatuses.length - 1)
                              setLocalStatuses([]);
                            else
                              setLocalStatuses(
                                allStatuses.filter((a) => a !== "All")
                              );
                          } else {
                            setLocalStatuses((prev) =>
                              prev.includes(s)
                                ? prev.filter((x) => x !== s)
                                : [...prev, s]
                            );
                          }
                        }}
                      />
                      <span>{cap(s)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Unit types */}
              <div>
                <div className="text-sm font-medium mb-2">Unit Types</div>
                <div className="border rounded p-2 space-y-1">
                  {allUnitTypes.map((t) => (
                    <label key={t} className="flex items-center gap-2 py-1">
                      <input
                        type="checkbox"
                        checked={localUnitTypes.includes(t)}
                        onChange={() =>
                          setLocalUnitTypes((prev) =>
                            prev.includes(t)
                              ? prev.filter((x) => x !== t)
                              : [...prev, t]
                          )
                        }
                      />
                      <span>{cap(t)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="px-4 py-3 border-t flex gap-3">
              <button
                onClick={() => {
                  resetMobile();
                }}
                className="flex-1 h-10 rounded border"
              >
                Reset All Filters
              </button>
              <button
                onClick={applyMobile}
                className="flex-1 h-10 rounded bg-black text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* slideUp keyframes */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  );
}
