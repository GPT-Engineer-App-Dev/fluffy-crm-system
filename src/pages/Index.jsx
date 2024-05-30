import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaUndo } from "react-icons/fa";

const initialOrders = [
  { id: 1, customer: "John Doe", product: "Laptop", amount: "$1200", status: "Shipped" },
  { id: 2, customer: "Jane Smith", product: "Smartphone", amount: "$800", status: "Processing" },
  { id: 3, customer: "Sam Wilson", product: "Headphones", amount: "$200", status: "Delivered" },
];

const Index = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const toast = useToast();

  const handleEdit = (order) => {
    setEditingOrder(order);
    setNewStatus(order.status);
  };

  const handleSave = () => {
    setOrders(orders.map((order) => (order.id === editingOrder.id ? { ...order, status: newStatus } : order)));
    setEditingOrder(null);
    toast({
      title: "Order updated.",
      description: "The order status has been updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRefund = (orderId) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "Refunded" } : order)));
    toast({
      title: "Order refunded.",
      description: "The order has been refunded successfully.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Fluffy CRM System
        </Text>
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>Customer</Th>
              <Th>Product</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.customer}</Td>
                <Td>{order.product}</Td>
                <Td>{order.amount}</Td>
                <Td>{editingOrder && editingOrder.id === order.id ? <Input value={newStatus} onChange={(e) => setNewStatus(e.target.value)} /> : order.status}</Td>
                <Td>
                  <HStack spacing={2}>
                    {editingOrder && editingOrder.id === order.id ? (
                      <Button colorScheme="teal" onClick={handleSave}>
                        Save
                      </Button>
                    ) : (
                      <IconButton aria-label="Edit" icon={<FaEdit />} onClick={() => handleEdit(order)} />
                    )}
                    <IconButton aria-label="Refund" icon={<FaUndo />} onClick={() => handleRefund(order.id)} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
