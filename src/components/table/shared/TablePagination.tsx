import * as React from 'react';
import { useTranslation } from 'react-i18next';

const TablePagination =()=> {
const { t } = useTranslation();

return(
    <React.Fragment>
        <div className="flex mt-2">
            <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-color-primary bg-white border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                {t("t.app.table.pagination.previous")}
            </a>
            <a href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-color-primary bg-white border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                {t("t.app.table.pagination.next")}
            </a>
        </div>
    </React.Fragment>
)}

export default TablePagination