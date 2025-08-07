import React, { useState } from "react";

const CreateTicket = ({ handleAddTicket }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "open",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTicket(formData);
    setFormData({
      title: "",
      description: "",
      priority: "Low",
      status: "open",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Open Modal Button */}

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        + Create Ticket
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 text-left">
            <h2 className="text-xl font-bold mb-6 text-left">New Ticket</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTicket;
