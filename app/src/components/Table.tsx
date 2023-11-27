import { useMemo } from "react";
import { FaFilter, FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import { throttle } from "lodash";
import type { Column, FilterFnOption, RowData } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Table,
} from "@tanstack/react-table";
import Popover from "@/components/Popover";
import Select from "@/components/Select";
import type { Option } from "@/components/Select";
import Slider from "@/components/Slider";
import TextBox from "@/components/TextBox";
import classes from "./Table.module.css";

type Props<Datum extends object> = {
  cols: {
    /** key of row object to access as value */
    key: keyof Datum;
    /** label for header */
    name: string;
    /** is sortable (default true) */
    sortable?: boolean;
    /** is filterable (default true) */
    filterable?: boolean;
    /** type used for filtering (default string) */
    type?: "string" | "number" | "enum";
  }[];
  rows: Datum[];
};

/** https://tanstack.com/table/v8/docs/api/core/column-def#meta */
declare module "@tanstack/table-core" {
  // eslint-disable-next-line
  interface ColumnMeta<TData extends RowData, TValue> {
    type: NonNullable<Props<object>["cols"][number]["type"]>;
  }
}

/**
 * table with sorting, filtering, searching, pagination, etc.
 *
 * reference:
 * https://codesandbox.io/p/devbox/tanstack-table-example-kitchen-sink-vv4871
 */
const Table = <Datum extends object>({ cols, rows }: Props<Datum>) => {
  const columnHelper = createColumnHelper<Datum>();

  /** custom filter func for when col type is enum */
  const enumFilter = useMemo<FilterFnOption<Datum>>(
    () => (row, id, value: Option[]) => {
      if (!value.length) return true;
      const rowValue = row.getValue(id);
      return !!value.find((option) => option.text === rowValue);
    },
    [],
  );

  /** column definitions */
  const columns = cols.map((col, index) =>
    columnHelper.accessor((row: Datum) => row[col.key], {
      id: String(index),
      header: col.name,
      enableSorting: col.sortable ?? true,
      enableColumnFilter: col.filterable ?? true,
      meta: { type: col.type ?? "string" },
      ...(col.type === "enum" ? { filterFn: enumFilter } : {}),
    }),
  );

  /** tanstack table api */
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    // globalFilterFn: ,
    autoResetPageIndex: true,
    columnResizeMode: "onChange",
    // onColumnVisibilityChange: setColumnVisibility,
    initialState: { sorting: [{ id: "0", desc: false }] },
    state: {
      // columnFilters,
      // globalFilter,
      // columnVisibility,
    },
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} style={{ width: header.getSize() }}>
                {header.isPlaceholder ? null : (
                  <div className={classes.th}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <button
                      className={classes.button}
                      data-active={header.column.getIsSorted() ? "" : undefined}
                      onClick={header.column.getToggleSortingHandler()}
                      aria-label={`Sort "${header.column.columnDef.header}"`}
                    >
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "asc" ? (
                          <FaSortUp />
                        ) : (
                          <FaSortDown />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </button>
                    {header.column.getCanFilter() ? (
                      <Popover
                        label={`Filter "${header.column.columnDef.header}"`}
                        content={<Filter column={header.column} />}
                      >
                        <button
                          className={classes.button}
                          data-active={
                            header.column.getIsFiltered() ? "" : undefined
                          }
                        >
                          <FaFilter />
                        </button>
                      </Popover>
                    ) : null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} style={{ width: cell.column.getSize() }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

type FilterProps<Datum extends object> = {
  column: Column<Datum>;
};

/** content of filter popup for column */
const Filter = <Datum extends object>({ column }: FilterProps<Datum>) => {
  /** get facets */
  const unique = column.getFacetedUniqueValues();
  const uniqueValues = useMemo(
    () => Array.from(unique.keys()).sort(),
    [unique],
  );

  /** type of filter */
  const type = column.columnDef.meta?.type;

  /** filter as number range */
  if (type === "number") {
    const [min = 0, max = 100] = column.getFacetedMinMaxValues() || [];
    return (
      <Slider
        min={min}
        max={max}
        multi={true}
        value={(column.getFilterValue() as [number, number]) ?? [min, max]}
        onChange={throttle(column.setFilterValue, 10)}
      />
    );
  }

  /** filter as multi-select */
  if (type === "enum") {
    return (
      <Select
        options={uniqueValues.map((value) => ({
          id: String(value),
          text: String(value),
        }))}
        value={column.getFilterValue() as Option[]}
        onChange={column.setFilterValue}
        multi={true}
      />
    );
  }

  /** filter as text */
  return (
    <TextBox
      placeholder="Search"
      value={column.getFilterValue() as string}
      onChange={column.setFilterValue}
    />
  );
};
