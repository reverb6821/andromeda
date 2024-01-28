import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';

import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import { showModal, hideModal } from '@/components/modal/actions/modal.actions';

import DeleteModalChildren from './DeleteModal/DeleteModalChildren';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
    dispatchHideModal: hideModal,

};
const connector = connect(undefined, mapDispatchToProps);

type AppProps = object & ConnectedProps<typeof connector>;

interface EmptyTableProps {
    emptyTable?: () => void
}

const EmptyTable: React.FC<EmptyTableProps & AppProps> = ({ emptyTable, dispatchShowModal, dispatchHideModal }) => {
    const { t } = useTranslation();
    
    const onCloseButtonClick = () => {
        dispatchHideModal();
    };

    return (
        <React.Fragment>
            {emptyTable ? (
                <React.Fragment>
                    <Button
                        btnStyle='primary--alert'
                        type="button"
                        label={'Delete All'}
                        icon="ri-download-2-line"
                        onBtnClick= {() => {
                            dispatchShowModal({
                                size: 'sm',
                                title: t('t.app.table.delete.title'),
                                children: (<DeleteModalChildren />),
                                primaryBtnLabel: t('t.app.generic.confirm'),
                                modalBtnStyle: 'primary--alert',
                                onBtnClickPrimary: () => {
                                     emptyTable()
                                    onCloseButtonClick()
                                },
                                btnSecondaryLabel: t('t.app.generic.cancel'),
                            })
                        }}
                    />
                    <Modal />
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )

}

export default connector(EmptyTable)