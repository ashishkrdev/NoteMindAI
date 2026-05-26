import { useSelector } from 'react-redux';

function ChatBox() {
  const { messages, status } = useSelector((state) => state.chat);

  return (
    <section className="chat-box" aria-label="Ask your notes chat preview">
      <div className="chat-head">
        <span>Ask your notes</span>
        <span>{status}</span>
      </div>
      {messages.map((message) => (
        <div className={`bubble ${message.role}`} key={message.id}>
          {message.text}
        </div>
      ))}
    </section>
  );
}

export default ChatBox;
