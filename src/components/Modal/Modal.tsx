import type { FC, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl p-8 min-w-[300px] text-center relative">
        {children}
        <button
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={onClose}
        >
          Ок
        </button>
      </div>
    </div>
  );
}; 