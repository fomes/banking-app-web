import React, { ChangeEventHandler, MouseEventHandler } from "react";
import "../styles/filter.css";

interface FilterComponentProps {
  filterText: string;
  onFilter: ChangeEventHandler<HTMLInputElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
}

export const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
}: FilterComponentProps) => (
  <div className="table-header-section">
    <input
      id="search"
      type="text"
      placeholder="Filtrar por data..."
      value={filterText}
      onChange={onFilter}
      className="filter-input"
    />
    <button onClick={onClear} className="filter-btn">
      Limpar
    </button>
  </div>
);

export default FilterComponent;
