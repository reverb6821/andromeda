import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';

import Modal from '@/components/modal/Modal'
import Typography from '@/components/ui/Typography/Typography';
import { TableBodyProps } from '@/interfaces/components.properties';
import { showModal, hideModal } from '@/store/actions/modal.actions';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
    dispatchHideModal: hideModal,

};
const connector = connect(undefined, mapDispatchToProps);

type AppProps = object & ConnectedProps<typeof connector>;

const TableBody: React.FC<TableBodyProps & AppProps> = ({ body, onEdit, onDelete, dispatchShowModal, dispatchHideModal }) => {
    const { t } = useTranslation();

    const onCloseButtonClick = () => {
        dispatchHideModal();
      };

    return (
        <React.Fragment>
            <tbody>
                {body && body.length > 1 ? body.map((el, index) =>
                    <tr className="odd:bg-slate-50 odd:dark:bg-slate-400 even:bg-slate-200 even:dark:bg-slate-500 text-slate-500 dark:text-slate-700" key={index}>
                        {el.map((item, index) =>
                            <th scope="col" className="px-6 py-3" key={index + 1}>
                                {item}
                            </th>
                        )}
                        {onDelete || onEdit ? (
                            <td className="flex items-center px-6 py-4">
                            <button type='button' onClick={onEdit} className="font-medium text-blue-600 hover:text-blue-800">
                                <i className="ri-edit-2-line"></i>
                            </button>
                            <button
                                type='button'
                                className="font-medium text-red-600 hover:text-red-800 ms-3"
                                onClick={() => {
                                dispatchShowModal({
                                    size: 'sm',
                                    title: t('t.app.table.delete.title'),
                                    children: (
                                        <div className='p-2 md:p-2 text-center'>
                                            <i className="ri-alert-line text-5xl text-red-600"></i>
                                            <Typography
                                            textSize='2xl'
                                            textStyle='secondary'
                                            text={t('t.app.table.delete.alert')}
                                            />
                                        </div>
                                        ),
                                    primaryBtnLabel: t('t.app.generic.confirm'),
                                    modalBtnStyle: 'primary--alert',
                                    onBtnClickPrimary: () => {
                                        {onDelete()}
                                        onCloseButtonClick()
                                    },
                                    btnSecondaryLabel: t('t.app.generic.cancel'),
                                })}}
                            >
                                <i className="ri-delete-bin-5-line"></i>
                            </button>
                        </td>
                        ) : null}
                        
                    </tr>
                ) : null}
            </tbody>
            <Modal />
        </React.Fragment >
    )
}

export default connector(TableBody)