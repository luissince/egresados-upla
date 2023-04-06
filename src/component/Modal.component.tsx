import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; 
}

Modal.setAppElement('#root');

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4"
      overlayClassName="fixed z-[1000] top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;