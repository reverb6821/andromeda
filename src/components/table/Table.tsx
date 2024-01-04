import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@/components/ui/Grid/Grid';
import Typography from '@/components/ui/Typography/Typography';

import EmptyTable from './shared/EmptyTable';
import ExportTableButton from './shared/ExportTable/ExportTableButton';
import TableBody from './shared/TableBody';
import TableHeader from './shared/TableHeader';
import TablePagination from './shared/TablePagination';
import TableSearch from './shared/TableSearch';

interface TableProps {
    model?: string
    columns: string[],
    rows:  { [key: string]: string | number | boolean; }[],
    filterValue?: string,
    onEdit?: () => void,
    onDelete?: () => void,
    emptyTable?: () => void,
}

const Table: React.FC<TableProps> = ({ columns, rows, onDelete,  emptyTable, onEdit, model }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentRowsPerPage, setCurrentRowsPerPage] = React.useState(15);
    const { t } = useTranslation();

    const currentData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * currentRowsPerPage;
        const lastPageIndex = firstPageIndex + currentRowsPerPage;
        return (rows || []).slice(firstPageIndex, lastPageIndex);
    }, [currentPage, currentRowsPerPage, rows]);

    const pageOptions = [15, 25, 50, 100]

    return (
        <React.Fragment>
            {rows && rows.length > 1 ? (
                <React.Fragment>
                    <div className="relative">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <TableSearch />
                            <Grid direction='row' classNames='ml-2'>
                                {model ? (
                                    <ExportTableButton
                                    data={rows}
                                    headers={columns}
                                    model={model}
                                    />
                                ) : (<div/>)}
                                {emptyTable ? (
                                    <EmptyTable emptyTable={emptyTable} />
                                ) : (
                                <div/>
                                )}
                            </Grid>
                        </div>
                        <div className='overflow-x-auto shadow-lg sm:rounded-lg'>
                            <table className="w-full text-sm text-left rtl:text-right">
                                <TableHeader columns={columns} onDelete={onDelete} onEdit={onEdit}/>
                                <TableBody rows={currentData} onDelete={onDelete} onEdit={onEdit}/>
                            </table>
                        </div>
                        <Grid direction='column' classNames='sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4'>
                            <select
                                className='input-style text-color-primary color-primary placeholder-slate-400 dark:placeholder-slate-700 text-sm rounded-lg block px-3 py-1.5 dark'
                                value={currentRowsPerPage}
                                onChange={(e) => setCurrentRowsPerPage(Number(e.target.value))}
                                >
                                {pageOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                    {option}
                                    </option>
                                ))}
                            </select>
                            <TablePagination
                                currentPage={currentPage}
                                totalCount={rows.length}
                                pageSize={15}
                                onPageChange={setCurrentPage}
                            />
                        </Grid>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="relative">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <TableSearch />
                            {model ? (
                               <ExportTableButton
                                data={rows}
                                headers={columns}
                                model={model}
                                />
                            ) : null}
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right">
                            <TableHeader columns={columns} />
                        </table>
                    </div>
                    <Grid direction='row' classNames='m-auto items-center justify-center'>
                        <Typography
                            textSize='caption'
                            textStyle='secondary'
                            text={t("t.app.table.noOptions")} />
                    </Grid>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Table