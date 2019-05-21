import React from 'react';

const Message = ({ title, color, children }) => {
  return (
    <article className={`message ${color || ''}`}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">{children}</div>
    </article>
  );
};

export default Message;
