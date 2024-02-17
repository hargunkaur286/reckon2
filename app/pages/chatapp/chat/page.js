"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome user icon

const Chat = () => {
  const [selectedRoom, setSelectedRoom] = useState('General');
  const [messages, setMessages] = useState({
    General: [],
    Room1: [],
    Room2: []
  });
  const [inputMessage, setInputMessage] = useState('');

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages({
        ...messages,
        [selectedRoom]: [...messages[selectedRoom], inputMessage]
      });
      setInputMessage('');
    }
  };

  return (
    <div className="flex h-screen mt-20">
      <div className="w-1/4 bg-gray-800 text-white ">
        <h2 className="text-xl font-bold p-4 ">Chat Rooms</h2>
        <ul>
          <li
            className={`p-4 cursor-pointer ${selectedRoom === 'General' ? 'bg-gray-600' : ''}`}
            onClick={() => handleRoomChange('General')}
          >
            General
          </li>
          <li
            className={`p-4 cursor-pointer ${selectedRoom === 'Room1' ? 'bg-gray-600' : ''}`}
            onClick={() => handleRoomChange('Room1')}
          >
            Room 1
          </li>
          <li
            className={`p-4 cursor-pointer ${selectedRoom === 'Room2' ? 'bg-gray-600' : ''}`}
            onClick={() => handleRoomChange('Room2')}
          >
            Room 2
          </li>
        </ul>
      </div>
      <div className="w-3/4 bg-gray-200">
        <h2 className="text-xl font-bold p-4 bg-gray-400">Chat Room: {selectedRoom}</h2>
        <div className="chat-box p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
          {messages[selectedRoom].map((message, index) => (
            <div key={index} className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-2 text-gray-700" /> {/* User icon */}
              <div className="bg-gray-100 rounded-md p-2">{message}</div>
            </div>
          ))}
        </div>
        <div className="input-box p-4 flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 flex-grow mr-2"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
