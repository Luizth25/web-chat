import { useEffect, useState } from "react";
import { formatDate } from "../../functions";
import { bodyBase, darkTheme, lightTheme } from "../../styles/theme.css";
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
  timeLabel,
} from "./ChatWindow.css";

const ChatWindow = ({ messages, onSend, contactName }: TChatWindowProps) => {
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(true);

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

    useEffect(() => {
      document.body.className = `${dark ? darkTheme : lightTheme} ${bodyBase}`;
    }, [dark]);

  return (
    <section className={chatWindow}>
      <div className={chatHeader}>
        <p>{contactName || "Nenhum contato selecionado"}</p>
        <button
          style={{ background: "none", border: "none", fontSize: "1rem" }}
          onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
        </button>
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
            <small className={timeLabel}>
              {formatDate(msg.timestamp)}
            </small>
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