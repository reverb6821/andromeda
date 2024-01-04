import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface TablePaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

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
            <button onClick={handlePrev} disabled={currentPage === 1} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-color-primary rounded-md   color-primary">
                {t("t.app.table.pagination.previous")}
            </button>
            <button onClick={handleNext} disabled={currentPage === pages} className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-color-primary rounded-md   color-primary">
                {t("t.app.table.pagination.next")}
            </button>
        </div>
    </React.Fragment>
)}

export default TablePagination