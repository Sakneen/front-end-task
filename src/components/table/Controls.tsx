import React from "react";

type SortKey = "unit_id" | "total_price" | "bua" | "status";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  sort: SortKey;
  order: "asc" | "desc";
  onSort: (k: SortKey) => void;
  onToggleOrder: () => void;
}

export default function Controls({
  search, onSearch, sort, order, onSort, onToggleOrder,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by Unit ID…"
        className="border rounded px-3 py-2"
      />
      <select
        value={sort}
        onChange={(e) => onSort(e.target.value as SortKey)}
        className="border rounded px-3 py-2"
      >
        <option value="unit_id">Unit ID</option>
        <option value="total_price">Total Price</option>
        <option value="bua">BUA</option>
        <option value="status">Status</option>
      </select>
      <button onClick={onToggleOrder} className="border rounded px-3 py-2">
        Order: {order.toUpperCase()}
      </button>
    </div>
  );
}
