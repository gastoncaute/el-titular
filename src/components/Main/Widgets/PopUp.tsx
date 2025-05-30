"use client";
import React, { useState } from "react";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="pop-up-container">
          <div className="pop-up">
            <button className="close-button" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <div className="adds-container">Publicidad</div>
          </div>
        </div>
      )}
    </>
  );
}

// <div className="banner-1"></div>
// <div className="banner-1"></div>
// <div className="banner-1"></div>
