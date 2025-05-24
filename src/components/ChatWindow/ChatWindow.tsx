import { useState } from "react";
import type { TChatWindowProps } from "../../types";
import {
  chatHeader,
  chatInput,
  chatInputButton,
  chatInputField,
  chatMessages,
  chatWindow,
  message,
  messageMe,
  messageMeText,
  messageThem,
} from "./ChatWindow.css";

const ChatWindow = ({ messages, onSend, contactName }: TChatWindowProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <section className={chatWindow}>
      <div className={chatHeader}>
        <p>{contactName || "Nenhum contato selecionado"}</p>
      </div>
      <div className={chatMessages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${message} ${
              msg.fromMe ? messageMe : messageThem
            }`}
          >
            <p className={`${msg.fromMe ? messageMeText : ""}`}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className={chatInput}>
        <input
          className={chatInputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
        />
        <button className={chatInputButton} onClick={handleSend}>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default ChatWindow;