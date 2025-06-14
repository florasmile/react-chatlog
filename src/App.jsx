import './App.css';
import ENTRIES from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import { senderA, senderB } from './data/senders';
import ColorChoice from './components/ColorChoice';

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
  const [senderAColor, setSenderAColor] = useState('');
  const [senderBColor, setSenderBColor] = useState('');
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
  const setColorCallBack = (sender, color) => {
    console.log(sender);
    if (sender === senderA) {
      setSenderAColor(color);
      // console.log(senderAColor);
    } else {
      setSenderBColor(color);
      // console.log(senderBColor);
    };
    console.log(senderAColor);
    console.log(senderBColor);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {senderA} and {senderB}</h1>
        <section className="widget">
          <ColorChoice sender={senderA} onSetColor={setColorCallBack} />
          <span id="heartWidget">{totalLikes} ❤️s</span>
          <ColorChoice sender={senderB} onSetColor={setColorCallBack} />
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          senderAColor={senderAColor}
          senderBColor={senderBColor}
          onToggleLiked={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
