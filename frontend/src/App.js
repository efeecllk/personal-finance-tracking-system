import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { Container } from "react-bootstrap";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refresh = () => setRefreshTrigger(refreshTrigger + 1);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">📊 Personal Finance Tracking System</h1>
      <AddTransaction refresh={refresh} />
      <TransactionList refresh={refreshTrigger} />
    </Container>
  );
}
jklj
export default App;
