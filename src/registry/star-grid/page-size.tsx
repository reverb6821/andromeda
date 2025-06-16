import { useTranslation } from 'react-i18next';
import { FC } from 'react'


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


interface PageSizeProps {
pageSize: number
  pageSizeOptions: number[]
  onPageSizeChange?: (size: number) => void
}

const PageSize: FC<PageSizeProps> = ({
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
}) => {
  const { t } = useTranslation()
  
  return(
    <Select
      value={String(pageSize)}
      onValueChange={(value) => {
        if (onPageSizeChange) {
          onPageSizeChange(Number(value));
        }
      }}
    >
      <SelectTrigger
        role='button'
        aria-label={t('table.pageSize')}
        className="w-[100px] h-8"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {pageSizeOptions.map((option) => (
          <SelectItem key={option} value={String(option)}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )};

export default PageSize;