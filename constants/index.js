export const breadcrumbPages = [
 { name: "Dashboard", href: "/dashboard?page=1&sort=unit_id&order=asc&id=" },
];

export const sortOptions = [
 { id: 1, name: "Unit ID", value: "unit_id" },
 { id: 2, name: "Unit type", value: "unit_type" },
 { id: 3, name: "Unit price", value: "total_price" },
];

export const totalUnits = 50;

export const unitsBerPage = 5;

export const numberOfPages = totalUnits / unitsBerPage;
