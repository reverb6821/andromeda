import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button';


interface ColumnDropdownProps {
   columns: Array<{
    id: string
    getIsVisible: () => boolean
    toggleVisibility: (visible: boolean) => void
    getCanHide: () => boolean
  }>
  t: (key: string) => string
  labelKeyPrefix: string
}

const ColumnDropdown: FC<ColumnDropdownProps> = ({
  columns,
  t,
  labelKeyPrefix,
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="ml-auto">
        {t('genericTable')} <ChevronDown />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {columns
        .filter((col) => col.getCanHide())
        .map((col) => (
          <DropdownMenuCheckboxItem
            key={col.id}
            checked={col.getIsVisible()}
            onCheckedChange={(value) => col.toggleVisibility(!!value)}
          >
            {t(`${labelKeyPrefix}.${col.id}`)}
          </DropdownMenuCheckboxItem>
        ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default ColumnDropdown;