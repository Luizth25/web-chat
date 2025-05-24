import type { TSidebarProps } from "../../types";
import { contact, contactContainer, sidebarConrainer } from "./SideBar.css";

const Sidebar = ({ chats, onSelect }: TSidebarProps) => {
  return (
    <aside className={sidebarConrainer}>
      <h2>Conversas</h2>
      <div className={contactContainer}>
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={contact}>
              {chat.name}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
