import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { TablePaginationProps } from '@/interfaces/components.properties';

const TablePagination: React.FC<TablePaginationProps> = ({ currentPage, totalCount, pageSize, onPageChange }) => {
const { t } = useTranslation();

const pages = Math.ceil(totalCount / pageSize);

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, pages));
  };

  const handlePrev = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

return(
    <React.Fragment>
        <div className="flex mt-2">
            <button onClick={handlePrev} disabled={currentPage === 1} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-color-primary bg-white border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                {t("t.app.table.pagination.previous")}
            </button>
            <button onClick={handleNext} disabled={currentPage === pages} className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-color-primary bg-white border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                {t("t.app.table.pagination.next")}
            </button>
        </div>
    </React.Fragment>
)}

export default TablePagination