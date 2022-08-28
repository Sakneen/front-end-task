import { Pagination, PaginationItem } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { selectPage } from '../lib/features/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { useGetUnitsListQuery } from '../lib/services/unitsApi';

export function CustomPagination() {
  const dispatch = useAppDispatch();
  const params = useAppSelector(({ dashboard }) => dashboard);

  const modifiedParams =
    params.unit_id_like.length > 0
      ? {
          unit_id_like: params.unit_id_like,
        }
      : null;

  const { data: allUnits } = useGetUnitsListQuery(modifiedParams);

  const [paginationSize, setPaginationSize] = useState<
    'small' | 'medium' | 'large'
  >('medium');

  console.log({ allUnits });
  const pageCount = Math.ceil(allUnits?.length / params._limit) || 0;

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
        count={pageCount}
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
