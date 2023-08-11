import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import Edit from "./components/Edit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [editingUserId, setEditingUserId] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null); // New state for deleting user

  const openEditModal = (userId) => {
    setEditingUserId(userId);
  };

  const openDeleteModal = (userId) => {
    setDeletingUserId(userId);
  };

  const closeModals = () => {
    setEditingUserId(null);
    setDeletingUserId(null);
  };

  return (
    <div className="relative">
      {editingUserId && <Edit userId={editingUserId} onClose={closeModals} />}
      <Navbar />
      <Search />
      <Users openEditModal={openEditModal} openDeleteModal={openDeleteModal} />
      <ToastContainer />
    </div>
  );
}

export default App;
