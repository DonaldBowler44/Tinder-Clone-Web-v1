import React, { useState } from 'react';
import './views/ChatScreen.css';
import Avatar from '@mui/material/Avatar';

function ChatScreen() {
  const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Angel',
            image: 
            'https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/17457457_1276528642437546_8149981211938969256_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=RUUZKqwJfXAAX_e5OiT&_nc_ht=scontent-hou1-1.xx&oh=00_AT92_TfTPZx2vOK8ytczhuZfDkwjplBOlU-7vISq0w-Qjg&oe=6248EB7E',
            message: 'Give me your flesh',
        },
        {
            name: 'Angel',
            image: 
            'https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/17457457_1276528642437546_8149981211938969256_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=RUUZKqwJfXAAX_e5OiT&_nc_ht=scontent-hou1-1.xx&oh=00_AT92_TfTPZx2vOK8ytczhuZfDkwjplBOlU-7vISq0w-Qjg&oe=6248EB7E',
            message: 'Give me your flesh now',
        },
        {
            message: 'No weirdo',
        },
    ]);

    const handleSend = (e) => {
      e.preventDefault();

      setMessages([...messages, {message: input }]);
      setInput("");
    };

    return (
        <div className="chatScreen">
        <p className="chatScreen__timestamp">
        YOU MATCHED WITH ANGEL ON 06/06/06
        </p>
        {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}
      
        <form className="chatScreen__input">
          <input 
          value={input}
          onChange={ (e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message" 
            text="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
         </form>
      
    </div>
    );
};



export default ChatScreen;