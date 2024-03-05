import classnames from "classnames";
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "@/store/store";
import { hideModal } from '@/store/actions/modal.actions';

import Button from '@/components/Button/Button';

import ModalProperties from './Modal.properties'

const mapStateToProps = (state: RootState) => ({
    modal: state.modal.modal,
});

const mapDispatchToProps = {
    dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ModalProperties = object & ConnectedProps<typeof connector>;

const Modal: React.FC<ModalProperties> = ({ dispatchHideModal, modal }) => {
    if (!modal) {
        return null;
    }

    const onCloseButtonClick = () => {
        dispatchHideModal();
    };

    return (
        <React.Fragment>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:text-slate-100">
                <div className={classnames("relative shadow-xl",
                    {
                        "w-full max-w-md max-h-full": modal.size === 'sm',
                        "w-full max-w-lg max-h-full": modal.size === 'md',
                        "w-full max-w-4xl max-h-full": modal.size === 'lg',
                    })}>
                    <div className="relative bg-slate-100 rounded-lg shadow dark:bg-slate-700">
                        <div className="flex items-center justify-between p-5 rounded-t">
                            <h3 className="text-xl font-medium text-center text-slate-900 dark:text-slate-100">
                                {modal.title}
                            </h3>
                            <button
                                type="button"
                                className="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-slate-600 dark:hover:text-slate-100"
                                onClick={onCloseButtonClick}
                            >
                                <i className="ri-close-line text-color-primary text-lg"></i>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            {modal.children}
                        </div>
                        <div className="flex items-center justify-center p-6 space-x-2">
                            <Button
                                label={modal.primaryBtnLabel}
                                onBtnClick={modal.onBtnClickPrimary}
                                btnStyle={modal.modalBtnStyle}
                                type='button'
                            />
                            <Button
                                label={modal.btnSecondaryLabel}
                                onBtnClick={onCloseButtonClick}
                                type='button'
                                btnStyle='secondary'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-slate-900"></div>
        </React.Fragment>
    )
};

export default connector(Modal)