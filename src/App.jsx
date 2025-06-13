import './App.css';
import ENTRIES from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const senderA = ENTRIES[0].sender;
const senderB = ENTRIES[0].sender;

const App = () => {
  // add toggleLiked event handler
  // register entries as state variable, loop through entries, to find matching id, toggle liked status;
  const [entries, setEntries] = useState(ENTRIES);
  const toggleLiked = (id) => {
    setEntries(entries.map((entry) => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };
  return (
    <div id="App">
      <header>
        <h1>Chat Between {senderA} and {senderB}</h1>
        <p>0❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={entries}
          onToggleLiked={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
