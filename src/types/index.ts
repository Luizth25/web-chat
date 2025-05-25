export type TMessage = {
  fromMe: boolean;
  text: string;
  timestamp: string;
};

export type TChat = {
  id: number;
  name: string;
  photo?: string;
  messages: TMessage[];
};

export type TSidebarProps = {
  chats: TChat[];
  onSelect: (id: number) => void;
};

export type TChatWindowProps = {
  messages: TMessage[];
  onSend: (text: string) => void;
  contactName?: string;
};
