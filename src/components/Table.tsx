import React from "react";

interface TableProps {
  id: string;
  value: string;
  debitedAccountId: string;
  creditedAccountId: string;
  createdAt: string;
}

export default function Table({ transfersList }: any) {
  return (
    <table>
      <caption>Movimentação</caption>
      <tbody>
        <tr className="thead">
          <td>Id</td>
          <td>Valor</td>
          <td>Origem</td>
          <td>Destino</td>
          <td>Data</td>
        </tr>
        {transfersList?.map((item: TableProps, index: number) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>R$ {item.value}</td>
            <td>{item.debitedAccountId}</td>
            <td>{item.creditedAccountId}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
