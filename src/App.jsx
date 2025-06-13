import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          id={messages[0].id}
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
          liked={messages[0].liked}
        />
      </main>
    </div>
  );
};

export default App;
