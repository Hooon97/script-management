'use client';

import { useState } from 'react';
import styles from './CreateNew.module.css';

// Mock chat message type
type Message = {
  text: string;
  sender: 'user' | 'ai';
};

const CreateNewPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Welcome to the script creator. To begin, please provide your prompt in the text area below.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      const userMessage: Message = { sender: 'user', text: input };
      setMessages(prev => [...prev, userMessage]);

      // Mock AI response
      setTimeout(() => {
        const aiResponse: Message = { sender: 'ai', text: `This is a mock response to: "${input}"` };
        setMessages(prev => [...prev, userMessage, aiResponse]);
      }, 1000);

      setInput('');
    }
  };

  const handleReset = () => {
    setMessages([
      { sender: 'ai', text: `Chat reset.\r\n Welcome to the script creator. To begin, please provide your prompt in the text area below.` },
    ]);
  };

  return (
    <div className={styles.chatContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create New Script</h1>
        <div className={styles.actions}>
          <button className={styles.saveButton}>Save</button>
          <button onClick={handleReset} className={styles.resetButton}>Reset</button>
        </div>
      </header>

      <main className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </main>

      <footer className={styles.inputArea}>
        <textarea
          className={styles.textarea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your script prompt here..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} className={styles.sendButton}>Send</button>
      </footer>
    </div>
  );
};

export default CreateNewPage;
