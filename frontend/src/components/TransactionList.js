import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Container } from "react-bootstrap";
import API_BASE_URL from "../config";

const TransactionList = ({ refresh }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/transactions/`)
      .then(response => setTransactions(response.data))
      .catch(error => console.error("Data fetch error:", error));
  }, [refresh]);

  return (
    <Container className="mt-4">
      <h2 className="text-center">💰 Income-Expense List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.amount}₺</td>
              <td>{t.category}</td>
              <td>{t.description}</td>
              <td>
                <Button variant="danger" onClick={() => axios.delete(`http://127.0.0.1:8000/transactions/${t.id}`).then(() => refresh())}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionList;