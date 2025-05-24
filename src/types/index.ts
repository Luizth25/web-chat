export type TMessage = {
  fromMe: boolean;
  text: string;
};

export type TChat = {
  id: number;
  name: string;
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
