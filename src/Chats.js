import React from "react";
import './views/Chats.css'
import Chat from './Chat';

function Chats() {
    return <div className="chats">
        <Chat 
            name="Angel"
            message="Give me your flesh"
            timestamp="1 hr ago"
            profilePic="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/17457457_1276528642437546_8149981211938969256_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=RUUZKqwJfXAAX_e5OiT&_nc_ht=scontent-hou1-1.xx&oh=00_AT92_TfTPZx2vOK8ytczhuZfDkwjplBOlU-7vISq0w-Qjg&oe=6248EB7E"
        />
        <Chat 
            name="Jackie"
            message="Give me money first"
            timestamp="30 minutes ago"
            profilePic="https://media.blogto.com/articles/20210126-mrbean-cover.jpg?w=1200&cmd=resize_then_crop&height=630&quality=70"
        />
        <Chat 
            name="Lex"
            message="I carry no money, only bubblegum wrappers."
            timestamp="5 minutes ago"
            profilePic="https://static3.cbrimages.com/wordpress/wp-content/uploads/2016/09/michael-rosenbaum-as-lex-at-computer-in-smallville.jpg"
        />
        <Chat 
            name="Ellen"
            message="A man of culture."
            timestamp="40 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg"
        />
    </div>;

}

export default Chats;