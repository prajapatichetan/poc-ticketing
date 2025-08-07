import React from "react";

function ListItem({ id, title, description, priority, status, onClose }) {
  return (
    <div
      className={`border rounded p-4 mb-2 flex justify-between items-start ${
        status === "closed" ? "bg-gray-100 opacity-70" : ""
      }`}
    >
      <div className="flex-1 pr-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs mt-1 text-gray-500">Priority: {priority}</p>
      </div>
      {status === "open" && (
        <button
          onClick={() => onClose(id)}
          className="text-sm text-red-500 hover:text-red-700 whitespace-nowrap"
        >
          Close
        </button>
      )}
    </div>
  );
}

export default ListItem;
