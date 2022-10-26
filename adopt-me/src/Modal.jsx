import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';

// just pass thru children
const Modal = ({ children }) => {
  const elRef = useRef(null);
  // ref means use the same div every time
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // how you do componentWillUnmount in a functional component
    // removes eventListeners, modals, stop a timer (setTimeout, 
    // requestAnimationFrame, cancelInterval);
    return () => modalRoot.removeChild(elRef.current);
  }, []);


  // need this div bc of css
  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;