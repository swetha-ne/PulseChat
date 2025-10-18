"use client";
import React from "react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

export default function Home() {
  const [room, setRoom] = React.useState("");
  const [joined, setJoined] = React.useState(false);
  const [messages, setMessages] = React.useState<
    { sender: string; message: string }[]
  >([]);
  const [username, setUsername] = React.useState("");
  const handleSendMessage = (message: string) => {
    console.log(message);
  };
  const handleJoinRoom = () => {
    setJoined(true);
  }
  return (
    <div className="flex mt-24 justify-center w-full">
      {!joined ? (
        <div className=" flex w-full max-w-3xl mx-auto flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Join a Chat Room</h1>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-64 mb-4 px-4 py-2 border-2 rounded-lg border-gray-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter room ID"
            className="mb-4 px-4 py-2 border-2 rounded-lg w-64 border-gray-300"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleJoinRoom}>
            Join Room
            </button>
        </div>
          
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Room: 1</h1>
          <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border-2 rounded-lg">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                message={msg.message}
                isOwnMessage={msg.sender === username}
              />
            ))}
          </div>
          <ChatForm onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}
