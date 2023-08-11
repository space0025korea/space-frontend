import React, { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, open, setOpen }: ModalProps) => {
  const onClick = (e: MouseEvent) => {
    if (e.target instanceof Element) {
      if (
        e.target.classList.contains("modal-background") ||
        e.target.classList.contains("close-button")
      ) {
        setOpen(false);
      }
    }
  };
  return (
    <div
      className="modal-background fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-70"
      onClick={onClick}
    >
      <div className="modal-background h-screen w-10/12">
        <button className="absolute right-4 top-4" onClick={() => setOpen(false)}>
          <XMarkIcon className="z-10 h-auto w-10 text-white opacity-50 hover:opacity-100" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
