import React from 'react';

const ModalComponent = ({ isOpen, onConfirm, onClose, actionType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Confirm {actionType}</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to {actionType} this item?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
