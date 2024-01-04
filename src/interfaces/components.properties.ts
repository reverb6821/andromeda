
  
// interface optionsProps {
//     label: string,
//     value: string,
// }









export interface TableHeaderProps {
    columns: string[],
    onEdit?: () => void,
    onDelete?: () => void,
}


export interface TablePaginationProps {
    currentPage: number;
    totalCount: number;
    pageSize: number;
    onPageChange: (page: number) => void;
  }

