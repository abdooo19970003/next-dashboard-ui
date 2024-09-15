import { FilterFnOption, Row } from "@tanstack/react-table";

type classData = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

export const fuzzyTextFilterFn = (
  row: Row<classData>,
  columnId: string,
  filterValue: string
) => {
  const rowValue: string = row.getValue(columnId);
  return rowValue.toLowerCase().includes(filterValue.toLowerCase());
};

export const numberRangeFilterFn = (
  row: Row<classData>,
  columnId: string,
  filterValue: [number, number]
) => {
  const [min, max] = filterValue;
  const value: number = row.getValue(columnId);
  if (min !== undefined && max !== undefined) {
    return value >= min && value <= max;
  } else if (min !== undefined) {
    return value >= min;
  } else if (max !== undefined) {
    return value <= max;
  }
  return true;
};

export const dateRangeFilterFn = (
  row: Row<classData>,
  columnId: string,
  filterValue: [Date, Date]
) => {
  const [start, end] = filterValue;
  const value = new Date(row.getValue(columnId));
  if (start && end) {
    return value >= new Date(start) && value <= new Date(end);
  } else if (start) {
    return value >= new Date(start);
  } else if (end) {
    return value <= new Date(end);
  }
  return true;
};
