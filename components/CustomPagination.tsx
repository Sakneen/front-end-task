import { Pagination, PaginationItem } from '@mui/material';

export function CustomPagination() {
  return (
    <section className="flex justify-center items-center my-3">
      <Pagination
        color="primary"
        count={10}
        renderItem={(item) =>
          item.type === 'previous' || item.type === 'next' ? (
            <PaginationItem {...item} className="bg-transparent" />
          ) : (
            <PaginationItem {...item} className="bg-[#E5E5E5]" />
          )
        }
      />
    </section>
  );
}
