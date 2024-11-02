import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import './modal.css';
import { Survey } from '../../PollStore/PollStore';
import { Modal } from './Modal';
import { usePollStore } from '../../PollStore/usePollStore';

interface ModalProps {
  active?: boolean;
  mode?: string;
  children?: Survey;
  onClose: () => void;
}

interface ModalContextType {
  showModal: (props: ModalProps) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);
  const getSurvey = usePollStore((state) => state.getSurvey);

  useEffect(() => {
    let interval = null
    if (modalProps?.active && modalProps.children) {
      const updated = () => {
        getSurvey(modalProps.children!.poll.id, (updatedSurvey) => {
          setModalProps({ ...modalProps, children: updatedSurvey });
        });
      }
      interval = setInterval(updated, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [modalProps, getSurvey]);


  const showModal = (props: ModalProps) => {
    setModalProps(props);
  };

  const hideModal = () => {
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {modalProps && <Modal {...modalProps} onClose={hideModal} />}
    </ModalContext.Provider>
  );
};