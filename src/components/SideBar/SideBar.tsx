import type { TSidebarProps } from "../../types";
import { contact, contactContainer, sidebarConrainer } from "./SideBar.css";

const Sidebar = ({ chats, onSelect }: TSidebarProps) => {
  return (
    <aside className={sidebarConrainer}>
      <h2>Conversas</h2>
      <div className={contactContainer}>
        {chats.map((chat) => (
          <div key={chat.id} style={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <img src={chat.photo} alt="user picture"  style={{width: '50px', borderRadius: "50%"}}/>
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={contact}>
              {chat.name}
          </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
