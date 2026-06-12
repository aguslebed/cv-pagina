import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({ isOpen, onClose, imageSrc, altText }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div className="relative max-w-[95vw] max-h-[95vh] flex flex-col items-center">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <img
                    src={imageSrc}
                    alt={altText}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-600/50"
                    onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                />
            </div>
        </div>,
        document.body
    );
}
