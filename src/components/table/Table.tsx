import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Grid from '@/components/ui/Grid/Grid';
import Typography from '@/components/ui/Typography/Typography';
import { TableProps } from '@/interfaces/components.properties';

import TableBody from './shared/TableBody';
import TableHeader from './shared/TableHeader';
import TablePagination from './shared/TablePagination';

const Table: React.FC<TableProps> = ({ head, body, /*action*/ }) => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
                {body && body.length > 1 ? (
                    <React.Fragment>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right">
                                <TableHeader head={head} />
                                <TableBody body={body} />
                            </table>
                        </div>
                        <TablePagination />
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