import { FC } from 'react';

import { Button } from '@/components/ui/button'

interface PaginationControlsProps {
  onPreviousPage?: () => void
  onNextPage?: () => void
  canPreviousPage?: boolean
  canNextPage?: boolean
  t: (key: string) => string
}

const PaginationControls: FC<PaginationControlsProps> = ({
  onPreviousPage,
  onNextPage,
  canPreviousPage,
  canNextPage,
  t,
}) => (
  <div className="space-x-2">
    <Button
      variant="outline"
      size="sm"
      onClick={onPreviousPage}
      disabled={!canPreviousPage || !onPreviousPage}
    >
      {t('homepage.aquariums.table.previous')}
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={onNextPage}
      disabled={!canNextPage || !onNextPage}
    >
      {t('homepage.aquariums.table.next')}
    </Button>
  </div>
);

export default PaginationControls;