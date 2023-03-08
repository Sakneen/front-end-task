import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Footer() {
  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%", padding: "30px" }}>
      <Typography variant="subtitle2" textAlign={"right"}>
        @2023 Sakneen Inc. All rights reserved.
      </Typography>
    </Box>
  );
}
