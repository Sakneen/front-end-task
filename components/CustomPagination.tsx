import { Pagination, PaginationItem } from '@mui/material';
import { ChangeEvent, useMemo, useEffect, useState } from 'react';
import { selectPage } from '../lib/features/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { useGetUnitsListQuery } from '../lib/services/unitsApi';

export function CustomPagination() {
  const dispatch = useAppDispatch();
  const { data: allUnits } = useGetUnitsListQuery(null);
  const { _limit } = useAppSelector(({ dashboard }) => dashboard);
  const [paginationSize, setPaginationSize] = useState<
    'small' | 'medium' | 'large'
  >('medium');

  const pageCount = useMemo(
    () => Math.ceil(allUnits?.length / _limit),
    [_limit, allUnits?.length]
  );

  const handleChange = (_event: ChangeEvent<unknown>, value: number) =>
    dispatch(selectPage(value));

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 440) {
        setPaginationSize('small');
      } else {
        setPaginationSize('medium');
      }
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
  }, []);

  return (
    <section className="flex justify-center items-center my-3">
      <Pagination
        onChange={handleChange}
        color="primary"
        size={paginationSize}
        count={pageCount | 10}
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
