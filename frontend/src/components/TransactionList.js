import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Container } from "react-bootstrap";

const TransactionList = ({ refresh }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/transactions/")
      .then(response => setTransactions(response.data))
      .catch(error => console.error("Veri çekme hatası:", error));
  }, [refresh]);

  return (
    <Container className="mt-4">
      <h2 className="text-center">💰 Gelir-Gider Listesi</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Miktar</th>
            <th>Kategori</th>
            <th>Açıklama</th>
            <th>Sil</th>
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
                  Sil
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
