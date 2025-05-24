import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/SideBar";
import { mockChats } from "./mock";
import { appContainer } from "./styles/globalStyles.css";

function App() {
  const [selectedChat, setSelectedChat] = useState<any | null>(null)
  
  const handleSelectChat = (chatId: number) => {
    console.log("Selected chat", chatId);
    const chat = mockChats.find((chat) => chat.id === chatId);
    setSelectedChat(chat ? chat : null);
  };

  const handleSendMessage = (text: string) => {
    if (!selectedChat) return;
  
    const updatedMessages = [...selectedChat.messages, { fromMe: true, text }];
    const updatedChat = { ...selectedChat, messages: updatedMessages };
    setSelectedChat(updatedChat);
  };


  return (
    <div className={appContainer}>
      <Sidebar chats={mockChats} onSelect={handleSelectChat}/>
      <ChatWindow
        messages={selectedChat?.messages || []}
        onSend={handleSendMessage}
        contactName={selectedChat?.name}
      />
    </div>
  )
}
export default App
