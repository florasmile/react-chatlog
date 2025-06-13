import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';

const senderA = entries[0].sender;
const senderB = entries[0].sender;
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between {senderA} and {senderB}</h1>
        <p>0❤️s</p>
      </header>
      <main>
        <ChatLog entries={entries} />
      </main>
    </div>
  );
};

export default App;
