import React, { useState } from "react";

const Edit = ({ user, onClose, onSave }) => {
  const [editedFullName, setEditedFullName] = useState(user.fullname);

  const handleFullNameChange = (event) => {
    setEditedFullName(event.target.value);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleApply = () => {
    onSave(user.user_id, editedFullName); // Call the onSave function with edited data
    onClose(); // Close the modal after applying changes

    // Update the edited names in local storage
    const editedNames = JSON.parse(localStorage.getItem("editedNames")) || {};
    editedNames[user.user_id] = editedFullName;
    localStorage.setItem("editedNames", JSON.stringify(editedNames));
    toast.success("User edited successfully!");
  };
  return (
    <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.5)] z-20 h-screen justify-center items-center ">
      <div className="flex flex-col w-[600px] rounded-[16px] bg-white ">
        <div className="flex border-b-[1px] p-4 border-[#c7c7c7]">
          <h4 className="text-[20px]">Edit</h4>
        </div>
        <div className="flex flex-col p-4">
          <h4 className="text-[16px] text-[#565656] my-4">Enter Full Name</h4>
          <input
            className="bg-[#FAFAFA] p-4 rounded-[8px]"
            placeholder="e.g: Savannah Nguyen"
            value={editedFullName}
            onChange={handleFullNameChange}
          />
          <div className="flex gap-x-6 my-4 ml-auto">
            <button className="w-max p-3" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="w-max p-3 px-6 bg-[#047857] rounded-[8px] text-white"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
