import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import { motion } from "framer-motion";

interface ModalProps extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({show, title, onClose, children}) => {
  return (
    <>
      <Backdrop show={show}/>
      <motion.div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
        onClick={onClose}
        animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.7 }}
        transition={{
          default: {
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            {children}
          </div>
        </div>
      </motion.div>
    </>

  );
};

export default Modal;