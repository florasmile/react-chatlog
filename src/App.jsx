import './App.css';
import ENTRIES from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import { senderA, senderB } from './data/senders';
import ColorChoice from './components/ColorChoice';

// define function to calculate total likes
const calculateTotalLikes = (entries) => entries.reduce((total, entry) => entry.liked? total+1 : total, 0);

const App = () => {
  // register state variables
  const [entries, setEntries] = useState(ENTRIES);
  const [senderAColor, setSenderAColor] = useState('');
  const [senderBColor, setSenderBColor] = useState('');
  const totalLikes = calculateTotalLikes(entries);
  // add toggleLiked event handler call back
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
    // console.log(sender);
    if (sender === senderA) {
      setSenderAColor(color);
      // console.log(senderAColor);
    } else {
      setSenderBColor(color);
      // console.log(senderBColor);
    };
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {' '}
          <span className={senderAColor}>{senderA}</span>{' '}
          and {' '}
          <span className={senderBColor}>{senderB}</span>
        </h1>
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
