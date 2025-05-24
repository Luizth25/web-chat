import { useState } from "react";
import {
  chatHeader,
  chatInput,
  chatInputButton,
  chatInputField,
  chatMessages,
  chatWindow,
  message,
  messageMe,
  messageThem
} from "./ChatWindow.css";

type TChatWindowProps = {
  messages: Array<{ text: string; fromMe: boolean }>;
  onSend: (message: string) => void;
  contactName?: string;
};

const ChatWindow = ({ messages, onSend, contactName }: TChatWindowProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className={chatWindow}>
      <div className={chatHeader}>
        {contactName || "Nenhum contato selecionado"}
      </div>
      <div className={chatMessages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${message} ${
              msg.fromMe ? messageMe : messageThem
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={chatInput}>
        <input
          className={chatInputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma mensagem..."
        />
        <button className={chatInputButton} onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;