import { useQuery } from "react-query";

type GetDataOptions = {
  id?: string;
  sort: string;
  page: number;
  limit: number;
  order: "asc" | "desc";
};

export type ApiResponse = Array<{
  _id: string;
  unit_id: string;
  unit_type: string;
  total_price: number;
  for_sale: boolean;
  photos: Array<string>;
  bua: number;
}>;

export const fetchData = async ({
  id,
  sort,
  page,
  limit,
  order,
}: GetDataOptions): Promise<{
  data: ApiResponse;
  count: number;
}> => {
  try {
    const params = `_limit=${limit}&_sort=${sort}&_order=${order}&_page=${page}`;

    const paramsWithId = `${params}&unit_id=${id}`;

    const response = await fetch(
      `http://localhost:3005/listings?${id ? paramsWithId : params}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const count = response.headers.get("x-total-count") ?? 0;
    const data = await response.json();

    return { data, count: +count };
  } catch (err) {
    throw err;
  }
};

export const useGetData = ({
  id,
  sort,
  page,
  limit,
  order,
}: GetDataOptions) => {
  const queryKey = ["getData", id, sort, page, limit, order];

  return useQuery({
    queryKey,
    queryFn: () => fetchData({ id, sort, page, limit, order }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });
};
