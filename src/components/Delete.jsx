import React from "react";
import { BsTrash } from "react-icons/bs";

const Delete = ({ user, onClose, onDelete }) => {
  const handleCancel = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete(user); // Pass the entire user object
    onClose();
  };

  return (
    <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.5)] z-20 h-screen justify-center items-center">
      <div className="flex flex-col w-[500px] space-y-4 rounded-[16px] bg-white p-4">
        <div className="flex justify-center items-center bg-[rgba(4,120,87,0.10)] rounded-full w-[40px] h-[40px]">
          <BsTrash className="cursor-pointer" color="#047857" size={22} />
        </div>
        <h4 className="text-[20px] font-[700]">Delete User</h4>
        <p>Are you sure you want to delete this user's details?</p>
        <div className="flex gap-x-6 my-4 ml-auto">
          <button className="w-max p-3" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="w-max p-3 px-6 bg-[#047857] rounded-[8px] text-white"
            onClick={handleDelete}
          >
            Yes, delete
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Delete;
