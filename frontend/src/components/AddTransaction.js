import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import API_BASE_URL from "../config";

const AddTransaction = ({ refresh }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/transactions/`, { amount, category, description })
      .then(() => {
        refresh();
        setAmount("");
        setDescription("");
      })
      .catch(error => console.error("Addition error:", error));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">➕ Add Income/Expense</h2>
      <Form onSubmit={handleSubmit} className="p-3 border rounded">
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddTransaction;
