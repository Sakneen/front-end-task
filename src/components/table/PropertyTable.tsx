"use client";

import React, { useState } from "react";
import Image from "next/image";

const statusClasses: Record<string, string> = {
  available: "bg-blue-600 text-white",
  sold: "bg-green-100 text-green-700",
  reserved: "bg-black text-white",
  unavailable: "bg-gray-200 text-gray-700",
};

type SortKey = "unit_id" | "unit_type" | "bua" | "status" | "total_price";

export interface PropertyTableProps {
  rows: any[];
  sort: SortKey;
  order: "asc" | "desc";
  onSortChange: (key: SortKey) => void;
}

const StatusPill = ({ value }: { value?: string }) => {
  const key = value?.toLowerCase?.() ?? "";
  return (
    <span
      className={`px-3 py-1 rounded-md text-xs font-medium inline-block text-center min-w-[80px] ${
        statusClasses[key] ?? "bg-gray-200 text-gray-700"
      }`}
    >
      {value ?? "—"}
    </span>
  );
};

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
  </svg>
);

export default function PropertyTable({
  rows,
  sort,
  order,
  onSortChange,
}: PropertyTableProps) {
  const [popupSrc, setPopupSrc] = useState<string | null>(null);
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupTitle, setPopupTitle] = useState<string>("");

  const openPopup = (photos: string[], index: number, title?: string) => {
    if (!Array.isArray(photos) || photos.length === 0) return;
    setCurrentPhotos(photos);
    setPopupIndex(index);
    setPopupSrc(photos[index]);
    setPopupTitle(title ?? "");
  };
const formatPrice = (price?: number) => {
  if (price == null) return "—";

  if (price >= 1_000_000) {
    return `EGP ${Math.round(price / 1_000_000)}M`;
  } else if (price >= 1_000) {
    return `EGP ${Math.round(price / 1_000)}K`;
  } else {
    return `EGP ${price.toLocaleString()}`;
  }
};

  const closePopup = () => {
    setPopupSrc(null);
    setCurrentPhotos([]);
    setPopupIndex(0);
    setPopupTitle("");
  };

  const nextPhoto = () => {
    if (!currentPhotos.length) return;
    const next = (popupIndex + 1) % currentPhotos.length;
    setPopupIndex(next);
    setPopupSrc(currentPhotos[next]);
  };

  const prevPhoto = () => {
    if (!currentPhotos.length) return;
    const prev = (popupIndex - 1 + currentPhotos.length) % currentPhotos.length;
    setPopupIndex(prev);
    setPopupSrc(currentPhotos[prev]);
  };

  const headerCell = (key: SortKey, label: string) => (
    <th
      className="p-3 text-center cursor-pointer select-none"
      onClick={() => onSortChange(key)}
      title={`Sort by ${label}`}
    >
      <span className="inline-flex items-center justify-center gap-1 w-full">
        {label}
        {sort === key && (order === "asc" ? "⬆️" : "⬇️")}
      </span>
    </th>
  );

  return (
    <div className="relative">
      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg shadow-sm bg-white">
        <table className="w-full text-sm">
          <thead className="bg-white font-semibold">
            <tr>
              {headerCell("unit_id", "Unit ID")}
              {headerCell("unit_type", "Unit Type")}
              {headerCell("bua", "BUA")}
              {headerCell("status", "Status")}
              {headerCell("total_price", "Total Price")}
              <th className="p-3 text-center">Photos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item: any, index: number) => (
              <tr
                key={item._id ?? `${item.unit_id}-${index}`}
                className={`border-t ${index % 2 === 0 ? "" : "bg-white"}`}
                style={{
                  backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#ffffff",
                }}
              >
                <td className="p-3 text-center">{item.unit_id}</td>
                <td className="p-3 text-center capitalize">{item.unit_type}</td>
                <td className="p-3 text-center">
                  {item?.bua ? `${item.bua} m²` : "—"}
                </td>
                <td className="p-3 text-center w-[100px]">
                  <StatusPill value={item.status} />
                </td>
                <td className="p-3 text-center">
                  {item.total_price != null
                    ? `EGP ${
                        item.total_price.toLocaleString?.() ?? item.total_price
                      }`
                    : "—"}
                </td>
                <td className="p-3 text-center">
                  {Array.isArray(item.photos) && item.photos.length > 0 ? (
                    <div className="mx-auto w-12 h-12 relative">
                      <Image
                        src={item.photos[0]}
                        alt={String(item.unit_id)}
                        fill
                        sizes="48px"
                        className="object-cover rounded cursor-pointer"
                        onClick={() => openPopup(item.photos, 0, item.unit_id)}
                      />
                    </div>
                  ) : (
                    <span className="text-gray-400">No photo</span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-3">
        {rows.length === 0 && (
          <div className="p-4 border rounded-lg bg-white text-center text-gray-500">
            No results found.
          </div>
        )}

        {rows.map((item: any, index: number) => (
          <div
            key={item._id ?? `${item.unit_id}-m-${index}`}
            className="bg-white border rounded-xl shadow-sm p-3"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 shrink-0 relative">
                {Array.isArray(item.photos) && item.photos.length > 0 ? (
                  <Image
                    src={item.photos[0]}
                    alt={String(item.unit_id)}
                    width={40}
                    height={40}
                    className="object-cover cursor-pointer"
                    onClick={() => openPopup(item.photos, 0, item.unit_id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                    —
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {item.unit_type
                    ? String(item.unit_type).charAt(0).toUpperCase() +
                      String(item.unit_type).slice(1)
                    : "Unit Type"}
                </div>
              </div>

              <StatusPill value={item.status} />
            </div>

            <div className="my-3 h-px bg-gray-200" />

            <div className="grid grid-cols-3 items-center">
              <div className="text-center">
                <div className="text-xs text-gray-500">Unit ID</div>
                <div className="text-sm text-gray-900 mt-0.5 break-all">
                  {item.unit_id ?? "—"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">BUA</div>
                <div className="text-sm text-gray-900 mt-0.5">
                  {item?.bua ? `${item.bua} m²` : "—"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Price</div>
              <div className="text-sm text-gray-900 mt-0.5">
  {formatPrice(item.total_price)}
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- POPUPS ---- */}
      {/* DESKTOP LIGHTBOX (centered, fixed size) */}
      {popupSrc && (
        <div
          className="hidden md:flex fixed inset-0 bg-black/60 items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative bg-white rounded shadow-lg flex items-center justify-center"
            style={{ width: "900px", height: "600px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button (always on top) */}
            <button
              className="absolute top-2 right-2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:shadow-md transition-transform active:scale-95 z-50"
              onClick={closePopup}
              aria-label="Close"
            >
              <CloseIcon className="text-white" />
            </button>
            {/* Prev */}
            {currentPhotos.length > 1 && (
              <button
                className="absolute left-[-40px] top-1/2 -translate-y-1/2  text-white  flex items-center justify-center  transition-transform active:scale-95 z-50"
                onClick={prevPhoto}
                aria-label="Previous"
                title="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Image wrapper */}
            <div style={{ width: 900, height: 600 }} className="relative z-0">
              {popupSrc && (
                <Image
                  src={popupSrc}
                  alt="Property"
                  width={900}
                  height={600}
                  className="object-contain rounded"
                />
              )}
            </div>

            {/* Next */}
            {currentPhotos.length > 1 && (
              <button
                className="absolute right-[-40px] top-1/2 -translate-y-1/2  text-white  flex items-center justify-center  transition-transform active:scale-95 z-50"
                onClick={nextPhoto}
                aria-label="Next"
                title="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM SHEET */}
      {popupSrc && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={closePopup} />

          {/* Sheet */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl h-[65vh] translate-y-0 animate-[slideup_220ms_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="text-sm font-semibold text-gray-900">
                {popupTitle ? `${popupTitle} – Photos` : "Photos"}
              </div>
              <button
                className="w-9 h-9 rounded-md flex items-center justify-center border bg-white shadow-sm hover:shadow-md transition-transform active:scale-95 z-50"
                onClick={closePopup}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Image area */}
            <div className="relative h-[calc(65vh-52px-36px)] flex items-center justify-center px-4">
              {/* Prev */}
              {currentPhotos.length > 1 && (
                <button
                  className="absolute left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-md w-9 h-9 flex items-center justify-center shadow-sm hover:shadow-md transition-transform active:scale-95 z-50"
                  onClick={prevPhoto}
                  aria-label="Previous"
                >
                  <ChevronLeft />
                </button>
              )}

              {/* Image container (fill) */}
              <div className="relative w-full h-full max-h-[calc(65vh-52px-36px)]">
                <Image
                  src={popupSrc}
                  alt="Property"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Next */}
              {currentPhotos.length > 1 && (
                <button
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-md w-9 h-9 flex items-center justify-center shadow-sm hover:shadow-md transition-transform active:scale-95 z-50"
                  onClick={nextPhoto}
                  aria-label="Next"
                >
                  <ChevronRight />
                </button>
              )}
            </div>

            {/* Dots */}
            {currentPhotos.length > 1 && (
              <div className="flex items-center justify-center gap-2 pb-3">
                {currentPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPopupIndex(i);
                      setPopupSrc(currentPhotos[i]);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                      popupIndex === i ? "bg-black scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Keyframe for slide up */}
      <style jsx>{`
        @keyframes slideup {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  );
}
