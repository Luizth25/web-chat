import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Sidebar from "./components/SideBar";
import { mockChats } from "./mock";
import { appContainer } from "./styles/globalStyles.css";
import { bodyBase, darkTheme, lightTheme } from "./styles/theme.css";
import type { TChat } from "./types";

function App() {
  const [selectedChat, setSelectedChat] = useState<TChat | null>(null)
  //Esse cara vai ficar aqui por enquanto
  const [dark, setDark] = useState(true);
  
    useEffect(() => {
      document.body.className = `${dark ? darkTheme : lightTheme} ${bodyBase}`;
    }, [dark]);
  
  const handleSelectChat = (chatId: number) => {
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
    <main className={appContainer}>
      <Sidebar chats={mockChats} onSelect={handleSelectChat}/>
      <ChatWindow
        messages={selectedChat?.messages || []}
        onSend={handleSendMessage}
        contactName={selectedChat?.name}
      />
    </main>
  )
}
export default App
