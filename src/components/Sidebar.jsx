import { VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <VStack as="nav" spacing={4} align="stretch">
      <Link as={NavLink} to="/">
        Home
      </Link>
      <Link as={NavLink} to="/orders">
        Orders
      </Link>
      <Link as={NavLink} to="/customers">
        Customers
      </Link>
      <Link as={NavLink} to="/reports">
        Reports
      </Link>
    </VStack>
  );
}

export default Sidebar;
