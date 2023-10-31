### example of modal usage

props accepted:
* title: string,
* description: string,
* children?: if you set description do not set or viceversa
* size: string, accepted value-> sm, md, lg
* primaryBtnLabel: string
* onBtnClickPrimary: click primary action
* onBtnSecondaryLabel: string,

```
import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux';

import { showModal } from '@/store/actions/modal.actions';

import Modal from './Modal'
import Button from '../button/Button';

const mapDispatchToProps = {
    dispatchShowModal: showModal,
  };
  
  const connector = connect(undefined, mapDispatchToProps);
  
  type AppProps = {} & ConnectedProps<typeof connector>;

  const ModalContainer= (props: AppProps) => {
    const { dispatchShowModal } = props;

  return (
    <React.Fragment>
        <Modal />
        <Button
            primary
            label='MODAL OPEN'
            onBtnClick={() => {
              dispatchShowModal({
                size: 'sm',
                title: 'A new title.',
                children: <div>children example</div>,
                primaryBtnLabel: 'primary',
                onBtnClickPrimary: () => {
                  alert('You clicked that button!');
                },
                onBtnSecondaryLabel: 'cancel',
              });
            }}>
    </React.Fragment>)
  }

  export default connector(ModalContainer);
```