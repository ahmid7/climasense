"use client"
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }: any) => {
  return (
    <>
      {isOpen && (
        <div className='modalBackdrop' onClick={onClose}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;