import { useState } from "react";
import { formatDate } from "../../functions";
import type { TSidebarProps } from "../../types";
import {
  buttonContainer,
  chatsContainer,
  contactButton,
  contactContainer,
  innerButtonWrapper,
  lastMessageText,
  searchInput,
  sidebarContainer,
  userPicture,
} from "./SideBar.css";

const Sidebar = ({ chats, onSelect }: TSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredChats = chats
    .filter((chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const lastMessageA = a.messages[a.messages.length - 1];
      const lastMessageB = b.messages[b.messages.length - 1];
      return (
        new Date(lastMessageB.timestamp).getTime() -
        new Date(lastMessageA.timestamp).getTime()
      );
    });

  return (
    <aside className={sidebarContainer}>
      <h2>Conversas</h2>
      <input
        className={searchInput}
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={contactContainer}>
        {filteredChats.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];

          return (
            <div key={chat.id} className={chatsContainer}>
              <img
                src={chat.photo}
                alt="user picture"
                className={userPicture}
              />
              <div className={buttonContainer}>
                <button
                  onClick={() => onSelect(chat.id)}
                  className={contactButton}
                >
                  <span className={innerButtonWrapper}>
                    <strong>{chat.name}</strong>
                    <span>{formatDate(lastMessage.timestamp)}</span>
                  </span>
                  <span className={lastMessageText}>
                    {lastMessage.fromMe ? "Enviada" : "Recebida"}:{" "}
                    {lastMessage.text || "Nenhuma mensagem ainda"}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
