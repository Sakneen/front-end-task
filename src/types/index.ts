// src/types/index.ts
/**
 * Property Listing Types
 */

export interface PropertyListing {
  _id: string;            // 👈 string (matches db.json)
  unit_id: string;
  unit_type: string;      // free string to match all values in db.json
  total_price: number;
  for_sale: boolean;
  photos: string[];
  bua?: number;
  status: 'available' | 'reserved' | 'sold' | 'unavailable';
}

export interface APIResponse {
  data: PropertyListing[];
  total: number;
  page: number;
  limit: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SortParams {
  field: keyof PropertyListing;
  order: 'asc' | 'desc';
}

export interface SearchParams {
  unit_id?: string;
}

export interface ListingFilters extends PaginationParams, SearchParams {
  sort?: SortParams;
}

export interface TableProps {
  listings: PropertyListing[];
  loading?: boolean;
  onSort?: (field: keyof PropertyListing) => void;
  sortField?: keyof PropertyListing;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  currentIndex?: number;
}

export interface RootState {
  listings: ListingsState;
}

export interface ListingsState {
  data: PropertyListing[];
  loading: boolean;
  error: string | null;
  filters: ListingFilters;
  total: number;
}
