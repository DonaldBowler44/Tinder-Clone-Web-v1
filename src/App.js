import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    
      <Routes>
      <Route path="/chat/:person"  element={<div>
        <Header backButton="/chat" />
        <ChatScreen />
        </div>
      }
    />
      <Route path="/chat"  element={<div>
        <Header backButton="/" />
        <Chats />
        </div>
      }
    />
      <Route path="*" element={<div>
        <Header />
      <TinderCards /><SwipeButtons />
      </div>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

{/* <div className="App">
    <Router>
    <Routes>
    <Route path="/Header" element={<Header />} />
    </Routes>
    </Router>
    </div> */}

{/* <Router>
      <Header />
    </Router> */}

  //   <Route path="*"
  //   element={
  //     <main style={{ padding: "1rem" }}>
  //       <p>There's nothing here!</p>
  //     </main>
  //   }
  // />