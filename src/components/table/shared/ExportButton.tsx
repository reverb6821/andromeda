import { DateTime } from 'luxon';
import * as React from 'react';
import { downloadExcel } from "react-export-table-to-excel";
import { useTranslation } from 'react-i18next';


import Button from '@/components/button/Button';

interface ExportButtonProps {
    data: { [key: string]: string | number | boolean; }[],
    headers: string[],
    model: string
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, headers, model }) => {
    const { t } = useTranslation();

    function handleDownloadExcel() {
        if (!data || !headers) {
            return;
        }
        downloadExcel({
          fileName: `${model}_${DateTime.now().toString()}`,
          sheet: "react-export-table-to-excel",
          tablePayload: {
            header: headers,
            body: data,
          },
        });
      }
    return (
        <React.Fragment>
            <Button
                onBtnClick={() => handleDownloadExcel()}
                btnStyle='primary--success'
                type="button"
                label={t('t.app.table.button.export')}
                icon="ri-download-2-line"
            />
        </React.Fragment>
    )
}

export default ExportButton