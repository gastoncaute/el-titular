"use client";

import React, { useState, useEffect } from "react";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="pop-up-container"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="pop-up" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="close-button"
          onClick={handleClose}
          aria-label="Cerrar ventana emergente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <div className="adds-container">
          <span>Publicidad "PopUp"</span>
        </div>
      </div>
    </div>
  );
}
