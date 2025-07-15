import React from 'react';
import './ModalWrapper.css';

function ModalWrapper({ children, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                {/* Top-right decoration */}
                <div className="modal-decoration top-right">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1H38L56 21" stroke="#79FFB6" />
                        <path d="M56 56.5V21L38 1" stroke="#79FFB6" />
                    </svg>
                </div>

                {/* Bottom-left decoration */}
                <div className="modal-decoration bottom-left">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.5 56H19L1 36" stroke="#79FFB6" />
                        <path d="M1 0.5V36L19 56" stroke="#79FFB6" />
                    </svg>
                </div>

                {children}
            </div>
        </div>
    );
}

export default ModalWrapper;
