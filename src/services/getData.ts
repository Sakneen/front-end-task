const url = `http://localhost:3005/listings?`;

export async function fetchAllData() {
  const response = await fetch(`${url}`);
  return await response.json();
}

export async function fetchPageData(unitSort: string, page?:number,unitId='') {
  const response = await fetch(
    `${url}_limit=5&_page=${page}&_sort=${unitSort}&unitId=${unitId}`
  );
  return await response.json();
}
