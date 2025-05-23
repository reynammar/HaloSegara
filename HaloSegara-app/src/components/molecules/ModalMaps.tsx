interface ModalMapsProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalMaps = ({ isOpen, onClose, children }: ModalMapsProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-[90vw] max-h-[90vh] overflow-auto p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
          aria-label="Close Modal"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalMaps;