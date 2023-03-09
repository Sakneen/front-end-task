import { ImageViewer } from "@/components/ImageViewer/ImageViewer";
import { ApiResponse } from "@/hooks";
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import { SaleTag } from "../SaleTag/SaleTag";
import { StyledTableRow } from "../StyledTableRow/StyledTableRow";

interface Props {
  data?: ApiResponse;
}

export function Table({ data }: Props) {
  const [images, setImages] = useState<Array<string>>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (val: string[]) => {
    setImages(val);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>Unit ID</TableCell>
              <TableCell>Unit Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Build up area</TableCell>
              <TableCell>For sale</TableCell>
              <TableCell>Gallery</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((x) => {
              return (
                <StyledTableRow key={x.unit_id}>
                  <TableCell>
                    <Typography>{x.unit_id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.unit_type}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {(x.total_price / 1000000).toFixed(2)}M EGP
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{x.bua} m&sup2;</Typography>
                  </TableCell>
                  <TableCell>
                    <SaleTag forSale={x.for_sale} />
                  </TableCell>
                  <TableCell>
                    <ImagePreview
                      imgSrc={x.photos?.[0]}
                      onClick={() => {
                        handleOpenModal(x.photos);
                      }}
                    />
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <ImageViewer open={isOpen} onClose={handleCloseModal} images={images} />
    </>
  );
}
