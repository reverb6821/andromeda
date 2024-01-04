import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';

import Modal from '@/components/modal/Modal'
import { showModal, hideModal } from '@/store/actions/modal.actions';

import DeleteModalChildren from './DeleteModal/DeleteModalChildren';

interface TableBodyProps {
    rows: string[] | object[] | undefined,
    onEdit?: () => void,
    onDelete?: () => void,
}

const mapDispatchToProps = {
    dispatchShowModal: showModal,
    dispatchHideModal: hideModal,

};
const connector = connect(undefined, mapDispatchToProps);

type AppProps = object & ConnectedProps<typeof connector>;

const TableBody: React.FC<TableBodyProps & AppProps> = ({ rows, onEdit, onDelete, dispatchShowModal, dispatchHideModal }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <tbody>
                {rows && rows.length > 1 ? rows.map((el, index) =>
                    <tr className="odd:bg-slate-50 odd:dark:bg-slate-400 even:bg-slate-200 even:dark:bg-slate-500 text-slate-500 dark:text-slate-700" key={index}>
                        {el.map((item, index) =>
                            <th scope="col" className="px-6 py-3" key={index + 1}>
                                {item}
                            </th>
                        )}

                        {onDelete || onEdit ? (
                            <td className="flex items-center p-6">
                                {onEdit ? (
                                    <button type='button' onClick={onEdit} className="font-medium text-blue-600 hover:text-blue-800">
                                        <i className="ri-edit-2-line"></i>
                                    </button>
                                ) : null}
                                {onDelete ? (
                                    <button
                                        type='button'
                                        className="font-medium text-red-600 hover:text-red-800 ms-3"
                                        data-el={JSON.stringify(el[0])}
                                        onClick={(event) => {
                                            const el = event.currentTarget.getAttribute('data-el');
                                            if (el !== null) {
                                            dispatchShowModal({
                                                size: 'sm',
                                                title: t('t.app.table.delete.title'),
                                                children: (
                                                   <DeleteModalChildren />
                                                ),
                                                primaryBtnLabel: t('t.app.generic.confirm'),
                                                modalBtnStyle: 'primary--alert',
                                                onBtnClickPrimary: () => {
                                                    if(onDelete) { onDelete(value) }
                                                    dispatchHideModal();
                                                },
                                                btnSecondaryLabel: t('t.app.generic.cancel'),
                                            })
                                            }
                                        }}
                                    >
                                        <i className="ri-delete-bin-5-line"></i>
                                    </button>
                                ) : null}

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