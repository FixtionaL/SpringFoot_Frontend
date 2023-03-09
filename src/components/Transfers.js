import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Transfers = () => {
  const [Transfers, setTransfersData] = useState([]);

  useEffect(() => {
    const fetchTransfers = async () => {
      const result = await axios.get("http://localhost:8080/api/transfers");
      setTransfersData(result.data);
    };
    fetchTransfers();
  }, []);

  const getTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Transfer ID</th>
          <th>Details</th>
          <th>To Club</th>
          <th>Transfer Fee</th>
          <th>Transfer Date</th>
        </tr>
      </thead>
    );
  };

  const getTableBody = () => {
    return (
      <tbody>
        {Transfers.map((transfer) => {
          return (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.player}</td>
              <td>{transfer.buying_club}</td>
              <td>{transfer.transfer_amount}</td>
              <td>{transfer.transfer_date}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div>
        <div>
            <h2>Transfers</h2>
        </div>
        <div className="transfers-container">
        <table className="table">
            {getTableHeader()}
            {getTableBody()}
        </table>
        </div>
    </div>
  );
};

export default Transfers;
