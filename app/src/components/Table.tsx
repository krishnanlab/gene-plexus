import { Column, ColumnDef, createColumnHelper } from "@tanstack/react-table";
import classes from "./Table.module.css";

type Props<Datum extends object> = {
  cols: {
    key: keyof Datum;
    name: string;
  }[];
  rows: Datum[];
};

const Table = <Datum extends object>({ cols, rows }: Props<Datum>) => {
  const columnHelper = createColumnHelper<Datum>();

  const columns = cols.map((col) =>
    columnHelper.accessor((row: Datum) => row[col.key], {
      header: col.name,
    }),
  );

  return <></>;
};

export default Table;
