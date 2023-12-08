import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/button/Button';
import Grid from '@/components/ui/Grid/Grid';
import Typography from '@/components/ui/Typography/Typography';
import { TableProps } from '@/interfaces/components.properties';

import TableBody from './shared/TableBody';
import TableHeader from './shared/TableHeader';
import TablePagination from './shared/TablePagination';
import TableSearch from './shared/TableSearch';

const Table: React.FC<TableProps> = ({ head, body, rowsPerPage }) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentRowsPerPage, setCurrentRowsPerPage] = React.useState(rowsPerPage);

    // const [filter, setFilter] = React.useState();
    const { t } = useTranslation();

    const currentData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * currentRowsPerPage;
        const lastPageIndex = firstPageIndex + currentRowsPerPage;
        return (body || []).slice(firstPageIndex, lastPageIndex);
    }, [currentPage, currentRowsPerPage, body]);

    const pageOptions = Array.from({length: Math.ceil((body || []).length / 5)}, (_, i) => (i * 4) + 1)

    return (
        <React.Fragment>
            {body && body.length > 1 ? (
                <React.Fragment>
                    <div className="relative overflow-x-auto ">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <TableSearch />
                            <Button
                            onBtnClick={() => {}}
                            btnStyle='primary--success'
                            type="button"
                            label={t('t.app.table.button.export')}
                            icon="ri-download-2-line"
                            />
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right shadow-lg sm:rounded-lg">
                            <TableHeader head={head} />
                            <TableBody body={currentData} />
                        </table>
                    </div>
                    <div className="relative overflow-x-auto w-full pt-4">
                        <Grid direction='column' classNames='sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4'>
                            <select
                                className='input-style text-color-primary placeholder-slate-400 dark:placeholder-slate-700 text-sm rounded-lg block px-3 py-1.5 dark'
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
                                totalCount={body.length}
                                pageSize={rowsPerPage}
                                onPageChange={setCurrentPage}
                            />
                        </Grid>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <TableHeader head={head} />
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