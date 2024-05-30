import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar.jsx";
import Index from "./pages/Index.jsx";
import Orders from "./pages/Orders.jsx";
import Customers from "./pages/Customers.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  return (
    <Router>
      <Grid templateColumns="200px 1fr">
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
