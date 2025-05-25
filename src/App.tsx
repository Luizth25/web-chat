import { useState } from "react";
import { mockChats } from "../public/mock";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/SideBar";
import { appContainer } from "./styles/globalStyles.css";
import type { TChat } from "./types";

function App() {
  const [selectedChat, setSelectedChat] = useState<TChat | null>(null)
  const handleSelectChat = (chatId: number) => {
    const chat = mockChats.find((chat) => chat.id === chatId);
    setSelectedChat(chat ? { ...chat, messages: [...chat.messages] } : null);
  };

  const handleSendMessage = (text: string) => {
    if (!selectedChat) return;

    const updatedMessages = [...selectedChat.messages, { fromMe: true, text, timestamp: new Date().toISOString() }];
    const updatedChat = { ...selectedChat, messages: updatedMessages };
    setSelectedChat(updatedChat);
  };


  return (
    <main className={appContainer}>
      <Sidebar chats={mockChats.map(chat => ({ ...chat, messages: [...chat.messages] }))} onSelect={handleSelectChat}/>
      <ChatWindow
        messages={selectedChat?.messages || []}
        onSend={handleSendMessage}
        contactName={selectedChat?.name}
      />
    </main>
  )
}
export default App
