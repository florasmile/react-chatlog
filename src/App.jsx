import './App.css';
import ENTRIES from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import { senderA, senderB } from './data/senders';

// define function to calculate total likes
const calculateTotalLikes = (entries) => {
  return entries.reduce((total, entry) => {
    return entry.liked? total+1 : total;
  }, 0);
};
const App = () => {
  // add toggleLiked event handler
  // register entries as state variable, loop through entries, to find matching id, toggle liked status;
  const [entries, setEntries] = useState(ENTRIES);
  const totalLikes = calculateTotalLikes(entries);

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
        <p>{totalLikes} ❤️s</p>
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
