"use client";
import React from "react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";


export default function Home() {
  const [room, setRoom] = React.useState("")
  const [joined, setJoined] = React.useState(false)
  const [messages, setMessages] = React.useState<{sender: string; message: string;}[]>([]);
  const [username, setUsername] = React.useState("")
  const handleSendMessage = (message: string) => {
    console.log(message);
  }
  return (
    <div className="flex mt-24 justify-center w-full">
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
        <ChatForm onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}
