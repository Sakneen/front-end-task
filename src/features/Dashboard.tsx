import { Container } from "@mui/system";
import { DataTable, Header } from "./Dashboard/component";

export function DashBoard() {
  return (
    <Container>
      <Header />
      <DataTable />
    </Container>
  );
}
