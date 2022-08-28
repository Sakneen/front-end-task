import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useState } from 'react';
import { IUnit } from '../../interfaces/IUnit';
import { openGallary } from '../../lib/features/gallarySlice';
import { useAppDispatch } from '../../lib/hooks';

export default function TableList({ units = [] }: { units: IUnit[] }) {
  const [imageError, setImageError] = useState(false);
  const dispatch = useAppDispatch();

  const gallaryHandler = (images: string[]) => {
    dispatch(openGallary(images));
  };

  const forSale = (
    <span className="bg-blue-800 text-white font-sans text-[9px] font-bold uppercase px-2 py-1 rounded">
      for sale
    </span>
  );
  const notForSale = (
    <span className="bg-gray-600 text-white font-sans text-[9px] font-bold uppercase px-2 py-1 rounded">
      not for sale
    </span>
  );
  return (
    <TableContainer className="shadow rounded">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
        <TableHead className="bg-white">
          <TableRow>
            <TableCell align="left" className="font-medium font-sans py-4">
              Unit ID
            </TableCell>
            <TableCell align="left" className="font-medium font-sans py-4">
              Unit Type
            </TableCell>
            <TableCell align="left" className="font-medium font-sans py-4">
              Price
            </TableCell>
            <TableCell align="left" className="font-medium font-sans py-4">
              Build up area
            </TableCell>
            <TableCell align="left" className="font-medium font-sans py-4">
              For sale
            </TableCell>
            <TableCell align="left" className="font-medium font-sans py-4">
              Gallary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units?.map((unit) => (
            <TableRow
              key={unit.unit_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="even:bg-white odd:bg-[#F5F5F5] border-0 hover:bg-[#F5F5F5]
              "
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                className="text-sm"
              >
                {/* {unit.unit_id.replaceAll('-', '')} */}
                {unit.unit_id}
              </TableCell>
              <TableCell align="left" className="text-sm capitalize">
                {unit.unit_type}
              </TableCell>
              <TableCell align="left" className="text-sm">
                {Math.round(unit.total_price / 1000000)}M EGP
              </TableCell>
              <TableCell align="left" className="text-sm ">
                {unit.bua} m<sup>2</sup>
              </TableCell>
              <TableCell align="left" className="text-sm">
                {unit.for_sale ? forSale : notForSale}
              </TableCell>
              <TableCell align="left">
                <Image
                  layout="fixed"
                  objectFit="cover"
                  width={40}
                  height={40}
                  src={
                    imageError
                      ? '/default.png'
                      : unit?.photos[0] || '/default.png'
                  }
                  priority
                  alt={unit.unit_type}
                  onError={() => setImageError(true)}
                  className="cursor-pointer"
                  onClick={() => gallaryHandler(unit.photos)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
