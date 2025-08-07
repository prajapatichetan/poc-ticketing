import "./App.css";
import { useState } from "react";
import ListItem from "./components/ListItem";
import CreateTicket from "./components/CreateTicket";
import TicketCounter from "./components/TicketCounter";

function App() {
  const [tickets, setTickets] = useState([]);
  const [searchTicket, setSearchTicket] = useState("");
  const handleAddTicket = (newItem) => {
    setTickets((prev) => [...prev, { id: Date.now(), ...newItem }]);
  };
  const filteredTickets = tickets.filter((ticket) =>
    `${ticket.title} ${ticket.description}`
      .toLowerCase()
      .includes(searchTicket.toLowerCase())
  );
  const handleCloseTicket = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "closed" } : ticket
      )
    );
  };
  return (
    <div className="min-h-screen flex items-top justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTicket}
            onChange={(e) => setSearchTicket(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          {/* Create Ticket Button */}
          <CreateTicket handleAddTicket={handleAddTicket} />
        </div>

        <h1 className="text-2xl font-bold mb-4 text-center">Ticket List</h1>
        <TicketCounter tickets={filteredTickets} />
        {filteredTickets.map((ticket) => (
          <ListItem key={ticket.id} {...ticket} onClose={handleCloseTicket} />
        ))}
      </div>
    </div>
  );
}

export default App;
