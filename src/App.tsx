import { useState } from "react";
import Sidebar from "./components/SideBar";
import { mockChats } from "./mock";
import { appContainer } from "./styles/globalStyles.css";

function App() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  
  const handleSelectChat = (chatId: number) => {
    const chat = mockChats.find((chat) => chat.id === chatId);
    setSelectedChat(chat ? chatId : null);
  };

  return (
    <div className={appContainer}>
      <Sidebar chats={mockChats} onSelect={handleSelectChat}/>
      <p>Ola heheheehehhee</p>
    </div>
  )
}
export default App
