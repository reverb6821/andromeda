import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@/components/ui/Typography/Typography';

const DeleteModalChildren: React.FC = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className='p-2 md:p-2 text-center'>
                <i className="ri-alert-line text-5xl text-red-600"></i>
                <Typography
                    textSize='2xl'
                    textStyle='secondary'
                    text={t('t.app.table.delete.alert')}
                />
            </div>
        </React.Fragment>

    )
}

export default DeleteModalChildren