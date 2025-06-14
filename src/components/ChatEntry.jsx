import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { senderA } from '../data/senders';

const ChatEntry = (props) => {
  const timeComponent = <TimeStamp time={props.timeStamp} />;
  const heart = props.liked ? '❤️':'🤍';
  // ternary operator to decide which css class to add depending on the sender
  const chatPosition = props.sender === senderA ? 'local': 'remote';
  const chatEntryClass = `chat-entry ${chatPosition}`;
  return (
    <div className={chatEntryClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={props.senderColor}>{props.body}</p>
        <p className="entry-time">{timeComponent}</p>
        <button className="like" onClick={() => props.onToggleLiked(props.id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  senderColor: PropTypes.string,
  onToggleLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
