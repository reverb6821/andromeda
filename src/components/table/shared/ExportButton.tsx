import * as FileSaver from "file-saver";
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as XLSX from "xlsx";

import Button from '@/components/button/Button';

interface ExportButtonProps {
    data: string[] | undefined | object[],
    headers: string[],
    model: string
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, headers, model }) => {
    const { t } = useTranslation();

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (data, fileName: string) => {
        const dataWithHeaders = [headers, ...data];
        const ws = XLSX.utils.json_to_sheet(dataWithHeaders);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const newData = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(newData, fileName + fileExtension);
    };

    return (
        <React.Fragment>
            <Button
                onBtnClick={() => exportToCSV(data, `${model}_`)}
                btnStyle='primary--success'
                type="button"
                label={t('t.app.table.button.export')}
                icon="ri-download-2-line"
            />
        </React.Fragment>
    )
}

export default ExportButton