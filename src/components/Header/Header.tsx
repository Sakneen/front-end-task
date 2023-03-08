import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export function Header() {
  return (
    <Box mt={8}>
      <Typography variant="h4">Dashboard</Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          marginTop: "15px",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        <MuiLink
          href="/"
          underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", gap: "2px" }}
          component={Link}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </MuiLink>
        <MuiLink
          href="/"
          underline="hover"
          color="text.primary"
          aria-current="page"
          component={Link}
        >
          Dashboard
        </MuiLink>
      </Breadcrumbs>
    </Box>
  );
}
