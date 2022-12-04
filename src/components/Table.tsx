import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import "../styles/datatable.css";

export const Table = (props: any) => {
  const columns: any = [
    {
      name: "ID da Transação",
      selector: "id",
      sortable: true,
      grow: 2,
      width: "16%",
    },
    {
      name: "Valor",
      selector: (row: any) => "R$ " + row.value,
      grow: 2,
      width: "6%",
    },
    {
      name: "Conta Origem",
      selector: "debitedAccountId",
      sortable: true,
      hide: "sm",
      width: "20%",
    },
    {
      name: "Conta Destino",
      selector: "creditedAccountId",
      sortable: true,
      width: "20%",
    },
    {
      name: "Data",
      selector: (row: any) =>
        new Date(row.createdAt).toISOString().substring(0, 10),
      sortable: true,
      hide: "md",
      width: "10%",
    },
    {
      name: "Hora",
      selector: (row: any) =>
        new Date(row.createdAt).toTimeString().substring(0, 9),
      sortable: true,
      hide: "md",
      width: "10%",
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = props.data.filter(
    (item: any) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="data-table">
      <DataTable
        title="Movimentação"
        columns={columns}
        data={filteredItems}
        defaultSortFieldId="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
    </div>
  );
};

export default Table;
