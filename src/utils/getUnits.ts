const sortValues = {
  'Unit ID': 'unit_id',
  'Unit type': 'unit_type',
  'Unit Price': 'total_price',
};

async function getUnits(
  pageToFetch: number = 1,
  sort: string = 'Unit ID',
  filter?: string,
  limit: number = 5,
  order: string = 'desc'
) {
  try {
    const sortvalue = sortValues[sort as keyof typeof sortValues];
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/listings?_page=${pageToFetch}&_limit=${limit}&_sort=${sortvalue}&_order=${order}`;
    if (filter)
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/listings?unit_id=${filter}`;

    let res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    // console.log(e);
    throw new Error('Error happend');
  }
}

export { getUnits };
