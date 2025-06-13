import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

// map each message to a chat entry component

const ChatLog = (props) => {
  const chatLogComponent = props.entries.map((entry) => {
    return <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      onToggleLiked={props.onToggleLiked}
    />;
  });
  return (
    <ul className="chat-log">
      {chatLogComponent}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
  onToggleLiked: PropTypes.func.isRequired,
};

export default ChatLog;