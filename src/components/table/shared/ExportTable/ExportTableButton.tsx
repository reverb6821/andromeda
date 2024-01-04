import { DateTime } from 'luxon';
import * as React from 'react';
import { downloadExcel } from "react-export-table-to-excel";
import { useTranslation } from 'react-i18next';

import Button from '@/components/button/Button';

interface ExportTableButtonProps {
  data: { [key: string]: string | number | boolean; }[],
  headers: string[],
  model: string,
}

const ExportTableButton: React.FC<ExportTableButtonProps> = ({ data, headers, model }) => {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = React.useState(false);

  async function handleDownloadExcel() {
    if (!data || !headers) {
      return;
    }
    setIsDownloading(true);
    try {
      await downloadExcel({
        fileName: `${model}_${DateTime.now().toString()}`,
        sheet: model,
        tablePayload: {
          header: headers,
          body: data,
        },
      })
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <React.Fragment>
      <Button
        onBtnClick={() => handleDownloadExcel()}
        btnStyle='primary--success'
        type="button"
        label={t('t.app.table.button.export')}
        icon="ri-download-2-line"
        disabled={isDownloading || data.length === 0}
        isLoading={isDownloading}
      />
    </React.Fragment>
  )
}

export default ExportTableButton