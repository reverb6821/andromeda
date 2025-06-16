import { useTranslation } from 'react-i18next'
import { ReactNode, useState } from 'react'
import { Trash2 } from 'lucide-react'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'

import PaginationControls from './pagination-controls'
import PageSize from './page-size'
import ColumnDropdown from './column-dropdown'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

type StarGridProps<TData extends { id: string }> = {
  data: TData[]
  columns: ColumnDef<TData>[]
  filterKey?: keyof TData
  onAction?: (rows: TData[]) => void
  onNextPage?: () => void
  onPreviousPage?: () => void
  canNextPage?: boolean
  canPreviousPage?: boolean
  children?: ReactNode
  pageSizeOptions?: number[]
  onPageSizeChange?: (size: number) => void
  pageSize?: number
}

export function StarGrid<TData extends { id: string }>({
  data,
  columns,
  onAction,
  onNextPage,
  onPreviousPage,
  canNextPage,
  canPreviousPage,
  children,
  pageSizeOptions = [10, 20, 50],
  onPageSizeChange,
  pageSize = 10,
}: StarGridProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const { t } = useTranslation()
  const finalColumns: ColumnDef<TData>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: true,
      enableHiding: false,
    },
    ...columns,
  ]

  const table = useReactTable({
    data,
    columns: finalColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageSize,           
        pageIndex: 0,       
      },
    },
    manualPagination: true,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newPagination = updater({ pageIndex: 0, pageSize });
        onPageSizeChange?.(newPagination.pageSize);
      } else {
        onPageSizeChange?.(updater.pageSize);
      }
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        
        {children}

        <Button
          role='button'
          aria-label={t('table.delete')}
          variant="destructive"
          onClick={() => {
            const selectedRows = table.getFilteredSelectedRowModel().rows.map(r => r.original);
            onAction?.(selectedRows);
          }}
          disabled={table.getSelectedRowModel().rows.length === 0}
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <ColumnDropdown
          columns={table.getAllColumns()}
          t={t}
          labelKeyPrefix="table.waterParamsTable"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={finalColumns.length} className="h-24 text-center">
                  {t('homepage.aquariums.table.noResults')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 space-x-2 py-4">
        <PageSize
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          onPageSizeChange={onPageSizeChange}
        />
        <PaginationControls
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          canPreviousPage={canPreviousPage ?? false}
          canNextPage={canNextPage ?? false}
          t={t}
        />
      </div>
    </div>
  )
}
