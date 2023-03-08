import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Footer() {
  return (
    <footer>
      <Box sx={{ width: "100%", padding: "30px" }}>
        <Typography textAlign={"right"}>
          &copy;2023 Sakneen Inc. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}
