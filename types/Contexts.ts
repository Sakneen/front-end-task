export interface searchInputContext {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface sortContext {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export interface imagesModalContext {
  showImagesModal: boolean;
  setShowImagesModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalImages: string[];
  setModalImages: React.Dispatch<React.SetStateAction<string[]>>;
  modalIndex: number;
  setModalIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface paginationContext {
  paginationIndex: number;
  setPaginationIndex: React.Dispatch<React.SetStateAction<number>>;
  maxItems: number;
  setMaxItems: React.Dispatch<React.SetStateAction<number>>;
  totalListings: number;
  setTotalListings: React.Dispatch<React.SetStateAction<number>>;
  maxPageNumber: number;
  minPageNumber: number;
  setMinPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setMaxPageNumber: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}
