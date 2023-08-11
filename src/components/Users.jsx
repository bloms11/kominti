import React, { useEffect, useState } from "react";
import userData from "../users.json";
import { RiDraggable } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { useDrag, useDrop } from "react-dnd";
import Edit from "./Edit";
import { toast } from "react-toastify";

const UserItem = ({ user, index, moveUser, editUser, deleteUser }) => {
  const [, ref] = useDrag({
    type: "user",
  });

  const [, drop] = useDrop({
    accept: "user",
    hover(item) {
      if (item.index !== index) {
        moveUser(item.index, index);
      }
    },
  });

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.fullname}?`)) {
      deleteUser(user.user_id);
    }
    toast.success("User deleted successfully!");
  };

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="flex justify-between my-[6px] px-4 py-6 bg-white rounded-[5px]"
    >
      <div className="flex justify-between  gap-x-40">
        <div className="flex w-[100px] ">
          <RiDraggable size={24} />
        </div>
        <div className="flex w-[250px] ">
          <h4 className="text-[14px] text-[#565656]">{user.user_id}</h4>
        </div>
        <div className="flex w-[350px] ">
          <h4 className="text-[14px] text-[#565656]">{user.fullname}</h4>
        </div>
      </div>
      <div className="flex gap-x-16">
        <CiEdit
          className="cursor-pointer"
          color="#047857"
          size={22}
          onClick={() => editUser(user.user_id)}
        />
        <BsTrash
          className="cursor-pointer"
          color="#047857"
          size={22}
          onClick={handleDelete}
        />{" "}
      </div>{" "}
    </div>
  );
};

const Users = () => {
  const [users, setUsers] = useState(userData);
  const [currentEditUser, setCurrentEditUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUserOrder = localStorage.getItem("userOrder");
    if (savedUserOrder) {
      const parsedUserOrder = JSON.parse(savedUserOrder);
      const updatedUsers = parsedUserOrder.map((userId) => {
        const user = userData.find((user) => user.user_id === userId);
        const editedNames =
          JSON.parse(localStorage.getItem("editedNames")) || {};
        if (editedNames[userId]) {
          return { ...user, fullname: editedNames[userId] };
        }
        return user;
      });
      setUsers(updatedUsers);
    } else {
      setUsers(userData);
    }
  }, []);
  const moveUser = (fromIndex, toIndex) => {
    const updatedUsers = [...users];
    const [movedUser] = updatedUsers.splice(fromIndex, 1);
    updatedUsers.splice(toIndex, 0, movedUser);
    setUsers(updatedUsers);
    localStorage.setItem(
      "userOrder",
      JSON.stringify(updatedUsers.map((user) => user.user_id))
    );
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.user_id === userId);
    setCurrentEditUser(userToEdit);
    setIsEditing(true);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.user_id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem(
      "userOrder",
      JSON.stringify(updatedUsers.map((user) => user.user_id))
    );
  };

  const handleSaveEdit = (userId, editedFullName) => {
    const updatedUsers = users.map((user) => {
      if (user.user_id === userId) {
        return { ...user, fullname: editedFullName };
      }
      return user;
    });

    setUsers(updatedUsers);
    localStorage.setItem(
      "userOrder",
      JSON.stringify(updatedUsers.map((user) => user.user_id))
    );
    setIsEditing(false);
    toast.success("User edited successfully!");
  };
  return (
    <div className="flex flex-col w-[94%] mx-auto ">
      <div className="flex my-6 justify-between px-4 py-6 bg-white rounded-[5px]">
        <div className="flex justify-between  gap-x-40">
          <div className="flex w-[100px] "></div>
          <div className="flex w-[250px] ">
            <h4>id</h4>
          </div>
          <div className="flex w-[350px] ">
            <h4>Full Name</h4>
          </div>
        </div>
        <div className="flex w-[110px] justify-between ">
          <h4>Actions</h4>
        </div>
      </div>

      {users.map((user, index) => (
        <UserItem
          key={user.user_id}
          user={user}
          index={index}
          moveUser={moveUser}
          editUser={handleEditUser}
          deleteUser={handleDeleteUser} // Pass the function to delete user
        />
      ))}

      {isEditing && currentEditUser && (
        <Edit
          user={currentEditUser}
          onClose={() => setIsEditing(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default Users;
