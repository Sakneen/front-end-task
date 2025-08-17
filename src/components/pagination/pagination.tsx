import React from "react";

interface Props {
  page: number;
  total: number;
  limit: number;
  onChange: (newPage: number) => void;
}

export default function Pagination({ page, total, limit, onChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const go = (p: number) => onChange(Math.min(Math.max(1, p), totalPages));

  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-3 text-sm text-gray-600">
      {/* Results summary */}
      <span>
        {total === 0
          ? "0 results"
          : `${(page - 1) * limit + 1}–${Math.min(
              page * limit,
              total
            )} of ${total} Results`}
      </span>

      {/* Dot Pagination */}
      <div className="flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={() => go(page - 1)}
          disabled={page <= 1}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-40"
        >
          ‹
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => go(i + 1)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                page === i + 1 ? "bg-black scale-125" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => go(page + 1)}
          disabled={page >= totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
}
