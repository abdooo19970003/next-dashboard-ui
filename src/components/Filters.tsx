import { Column, FilterFnOption } from "@tanstack/react-table";

export function StringFilter({ column }: { column: Column<string> }) {
  return (
    <input
      type="text"
      value={column.getFilterValue() || ""}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search ${column.id}`}
      style={{ width: "100%" }}
    />
  );
}

export function NumberRangeFilter({ column }: { column: Column<number> }) {
  const [min, max] = column.getFilterValue() || ["", ""];

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="number"
        value={min}
        onChange={(e) => {
          const val = e.target.value;
          column.setFilterValue((old = []) => [
            val ? Number(val) : undefined,
            old[1],
          ]);
        }}
        placeholder="Min"
        style={{ width: "70px" }}
      />
      to
      <input
        type="number"
        value={max}
        onChange={(e) => {
          const val = e.target.value;
          column.setFilterValue((old = []) => [
            old[0],
            val ? Number(val) : undefined,
          ]);
        }}
        placeholder="Max"
        style={{ width: "70px" }}
      />
    </div>
  );
}

export function DateRangeFilter({ column }: { column: Column<Date> }) {
  const [start, end] = column.getFilterValue() || ["", ""];

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="date"
        value={start}
        onChange={(e) => {
          const val = e.target.value;
          column.setFilterValue((old = []) => [val || undefined, old[1]]);
        }}
        style={{ marginBottom: "5px" }}
      />
      to
      <input
        type="date"
        value={end}
        onChange={(e) => {
          const val = e.target.value;
          column.setFilterValue((old = []) => [old[0], val || undefined]);
        }}
        style={{ marginLeft: "5px" }}
      />
    </div>
  );
}
