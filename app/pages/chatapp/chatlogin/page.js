"use client"
import React, { useState } from 'react';
import Link from "next/link";

const ChatLogin = () => {
  const [username, setUsername] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('General');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleLogin = () => {
    if (username.trim() !== '') {
      // Handle login logic here, you might want to send this data to the server or perform some client-side actions
      console.log(`Username: ${username}, Selected Room: ${selectedRoom}`);
    } else {
      alert('Please enter a valid username');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Chat Login</h1>
        <input
          type="text"
          placeholder="Enter your username"
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          value={username}
          onChange={handleUsernameChange}
        />
        <select
          value={selectedRoom}
          onChange={handleRoomChange}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        >
          <option value="General">General</option>
          <option value="Room1">Room 1</option>
          <option value="Room2">Room 2</option>
        </select>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          <Link href="/pages/chatapp/chat" className="text-white">
            Join Chat
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ChatLogin;
