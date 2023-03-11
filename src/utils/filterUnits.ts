async function filterUnits(filterValue: string) {
  const res = await fetch(
    `http://localhost:3005/listings?unit_id=${filterValue}`
  );
  const data = await res.json();

  return data;
}

export { filterUnits };
