const UnitsTable = ({ units, openGallery }) => {
 return (
  <div>
   <div className="overflow-y-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg max-h-[330px]">
    <table className="min-w-full divide-y divide-gray-300 max-h-full">
     <thead className="bg-white">
      <tr className="font-[500] text-[16px] text-gray-900">
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Unit ID
       </th>
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Unit type
       </th>
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Price
       </th>
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Build up area
       </th>
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Fore sale
       </th>
       <th scope="col" className="py-2 pl-4 pr-3 text-left sm:pl-6">
        Gallery
       </th>
      </tr>
     </thead>
     <tbody className="bg-white">
      {units.map((unit, index) => (
       <tr
        key={unit._id}
        className={`${
         index % 2 === 0 ? "bg-[#F5F5F5]" : undefined
        } max-h-[56px]`}
       >
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         {unit.unit_id}
        </td>
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         {unit.unit_type}
        </td>
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         {Math.round(unit.total_price / 1000000)}M EGP
        </td>
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         {unit.bua} m<sup>2</sup>
        </td>
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         <div
          className={`${
           unit.for_sale
            ? "bg-[#2419BE] rounded-[3px] w-[60px] h-[20px] py-[4px] px-[8px] text-[9px] text-white flex items-center justify-center "
            : "bg-[#616161] rounded-[3px] w-[80px] h-[20px] py-[4px] px-[8px] text-[9px] text-white flex items-center justify-center"
          }`}
         >
          {unit.for_sale ? "FOR SALE" : "NOT FOR SALE"}
         </div>
        </td>
        <td className="whitespace-nowrap py-1.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
         <div
          onClick={() => openGallery(unit._id)}
          style={{
           backgroundImage: `url(${unit.photos[0]})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           width: "40px",
           height: "40px",
           cursor: "pointer",
          }}
         />
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default UnitsTable;
