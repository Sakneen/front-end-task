import { Box } from "@mui/material";

interface Props {
  forSale: boolean;
}

export function SaleTag({ forSale }: Props) {
  return (
    <Box
      sx={{
        padding: "6px 16px",
        backgroundColor: forSale ? "#1976d2" : "gray",
        color: "white",
        borderRadius: "4px",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        width: "max-content",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      {forSale ? "for sale" : "not for sale"}
    </Box>
  );
}
