import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import { senderA } from '../data/senders';

// map each message to a chat entry component
const ChatLog = (props) => {
  const chatLogComponent = props.entries.map((entry) => {
    const senderColor = entry.sender === senderA ? props.senderAColor: props.senderBColor;
    return <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      senderColor={senderColor}
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
  senderAColor: PropTypes.string,
  senderBColor: PropTypes.string,
  onToggleLiked: PropTypes.func.isRequired,
};

export default ChatLog;