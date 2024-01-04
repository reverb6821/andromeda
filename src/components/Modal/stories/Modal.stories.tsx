import type { Meta, StoryObj } from "@storybook/react";
import { Provider , connect, ConnectedProps } from 'react-redux';

import { showModal } from '@/store/actions/modal.actions';
import store from '@/store/store.ts';

import Button from '../../button/Button';
import Modal from '../Modal';

const meta: Meta<typeof Modal> = {
    title: "Andromeda/UI/Modal",
    component: Modal,
    decorators: [
      (Story) => (
          <Provider store={store}>
              <Story />
          </Provider>
      )
  ]
  };

export default meta;

type Story = StoryObj<typeof Modal>;



  const mapDispatchToProps = {
    dispatchShowModal: showModal,
  };
  
const connector = connect(undefined, mapDispatchToProps);
  
type ModalProps = object & ConnectedProps<typeof connector>;


export const ModalBtn: Story = (props: ModalProps) => {
  const { dispatchShowModal } = props;
  return (<Button
    btnStyle='primary'
    label='Modal Example'
    type='button'
    onBtnClick={() => {
        dispatchShowModal({
            size: 'sm',
            title: 'New Modal Example',
            children: <p>Children Example</p>,
            primaryBtnLabel: 'Confirm',
            modalBtnStyle: 'primary',
            onBtnClickPrimary: () => {
              alert('You clicked that button!');
            },
            btnSecondaryLabel: 'Cancel',
        });
    }}
  />);
}

