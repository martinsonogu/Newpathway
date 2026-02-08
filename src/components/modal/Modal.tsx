import { FiX } from "react-icons/fi"

interface ApplyErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyErrorModal: React.FC<ApplyErrorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
         <FiX className="h-5 w-5" />
        </button>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Oops something went wrong 😕
        </h2>

        {/* <p className="mb-2 text-gray-600">
          We’re sorry, but the application link is currently unavailable.
        </p> */}

        <p className="text-gray-600">
          Please contact us at{" "}
          <a
            href="mailto:info@newpathway1.co.uk"
            className="font-medium text-teal-500 hover:underline"
          >
            info@newpathway1.co.uk
          </a>
        </p>

        <button
          onClick={onClose}
          className="mt-6 inline-flex items-center cursor-pointer justify-center rounded-md bg-teal-600 px-5 py-2 text-sm font-medium text-white hover:bg-teal-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplyErrorModal;
