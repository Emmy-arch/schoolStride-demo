import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { cn } from "../../lib/utils";

/**
 * columns = [
 *   {
 *     key: "name" OR "user.email",
 *     header: "Name",
 *     render?: (item) => JSX,
 *     className?: "text-right"
 *   }
 * ]
 */

export function DataTable({
  data = [],
  columns = [],
  className,
  onRowClick,
}) {
  // Supports nested keys like "user.email"
  const getValue = (item, key) => {
    return key
      .split(".")
      .reduce((acc, current) => acc?.[current], item);
  };

  return (
    <div
      className={cn(
        "rounded-xl border bg-card overflow-hidden",
        className
      )}
    >
      <Table>
        {/* ===== TABLE HEADER ===== */}
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={cn("font-semibold", column.className)}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* ===== TABLE BODY ===== */}
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-32 text-center text-muted-foreground"
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow
                key={item.id ?? index}
                onClick={() => onRowClick?.(item)}
                className={cn(
                  "transition-colors",
                  onRowClick && "cursor-pointer hover:bg-muted/50"
                )}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={column.className}
                  >
                    {column.render
                      ? column.render(item)
                      : String(
                          getValue(item, column.key) ?? ""
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
