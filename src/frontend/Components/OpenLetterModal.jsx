// Modal.js
import React from "react";

// Right now, when clicking outside the modal, it closes.
// If you want to prevent that, you can remove the onClick from the overlay

export default function OpenLetterModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
        {children}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },
//   modal: {
//     background: "transparent",
//     padding: "0",
//     borderRadius: "10px",
//     position: "relative",
//     maxWidth: "90%",
//     maxHeight: "90%"
//   },
//   closeBtn: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     cursor: "pointer"
//   }
};
