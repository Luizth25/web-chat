import { contact, sidebarConrainer } from "./SideBar.css";

type TSidebarProps = {
  chats: {
    id: number;
    name: string;
    messages: {
        fromMe: boolean;
        text: string;
    }[];
  }[]
  onSelect: (id: number) => void;
};

const Sidebar = ({ chats, onSelect }: TSidebarProps) => {
  return (
    <div className={sidebarConrainer}>
      <h2>Conversas</h2>
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => onSelect(chat.id)} className={contact}>
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
