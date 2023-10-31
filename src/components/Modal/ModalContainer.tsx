/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux';

import { showModal } from '@/store/actions/modal.actions';

import Modal from './Modal'
import Button from '../button/Button';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
  };
  
  const connector = connect(undefined, mapDispatchToProps);
  
  type AppProps = object & ConnectedProps<typeof connector>;

  const ModalContainer = (props: AppProps) => {
    const { dispatchShowModal } = props;

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Button
            btnStyle='success'
            label='MODAL OPEN'
            type='button'
            onBtnClick={() => {
              dispatchShowModal({
                size: 'sm',
                title: 'A new title.',
                children: <div>children example</div>,
                primaryBtnLabel: 'primary',
                modalBtnStyle: 'primary',
                onBtnClickPrimary: () => {
                  alert('You clicked that button!');
                },
                btnSecondaryLabel: 'cancel',
              });
            }}
          />
          
          <Button
            btnStyle='alert'
            type='button'
            label='MODAL OPEN2'
            onBtnClick={() => {
              dispatchShowModal({
                size: 'md',
                title: 'A new title.',
                children: <div>children 23example</div>,
                modalBtnStyle: 'alert',
                primaryBtnLabel: 'sec',
                onBtnClickPrimary: () => {
                  alert('You clicked that button!');
                },
                btnSecondaryLabel: 'cancel2',
              });
            }}
          />
        </header>
      </div>
      <Modal />

    </React.Fragment>)
  }

  export default connector(ModalContainer);