# Sakneen Front End Task

:wave: This is a NextJS React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

In this exercise you will be implementing a new page that will have a table displaying a bunch of units (apartments, villas...). The design can be found [here](https://www.figma.com/file/SYWCrd5A18H44UoxJBfUW2/Frontend-task?node-id=0%3A1) You might need to sign up to be able to inspect the figma design

Note, it's not required to implement all these features, but implement what you can, Also, do the best you can for file structure and code best practices, Good Luck.

## Requirements
- Create a page that **mimics** the given design in terms of style.
- The table **must support** pagination and sorting functionalities
- The table **must support** searching by unit id functionally
- Clicking on the image in the gallery column should open a **light box** viewing all the images for that unit
- Add some unit test cases as you can.
- Let your imagination make  the design of task responsive.

## Notes
- The `API` used for fetching the data is `http://localhost:3005/listings`
- Feel free to add any cool tricks showing off your skills (testing, caching, SEO, re-rendering optimizations...).
- If anything is ambiguous or not clear, update the `README.MD` file with your assumptions
- The total number of records returned from the API is **50**
- we use the [json server](https://www.npmjs.com/package/json-server) spec.
## API Specification

### Response 
```js
[{
_id: "541kn1i4j51092j45i124nj" // The database generated id for the given record
unit_id: "A-17" // A unique identifier for the unit in it's location
unit_type: "penthouse",
total_price: 1000000 // The evaluation of the unit's value
for_sale: boolean // a Flag indicating if the units is for sale or not
photos:[
    'https://image1.com',
    'https://image1.com',
    'https://image1.com',
] // An array of urls for the units images
}]
```

### Input
- `_page`: A number to indicate the page needed.
- `_limit`: An optional parameter to indicate the limit of the result set size
- `_sort`: An optional parameter to sort by a certain field name 
- `_order`: An optional parameter for sort direction (asc or desc)
- `unitId`: Used to filter the units with their unit id value


## Instructions for submit
1. Fork this repository
2. create feature branch like: `feature/<your-full-name>`
3. Open pull request from your branch on our repository
4. Created deployment and set the link on readme
5. Update Readme