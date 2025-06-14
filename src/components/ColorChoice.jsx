import PropTypes from 'prop-types';

const COLORS = {
  '🔴': 'red',
  '🟠': 'orange',
  '🟡': 'yellow',
  '🟢': 'green',
  '🔵': 'blue',
  '🟣': 'purple'
};

const ColorChoice = ({sender, onSetColor }) => {
  // create a list of color buttons
  const getColorComponents = () => {
    return Object.keys(COLORS).map(emoji => {
      return <button
        key={COLORS[emoji]}
        onClick={() => onSetColor(sender, COLORS[emoji])}
      >{emoji}
      </button>;
    });
  };
  return (
    <span>
      <p>{sender}&apos;s color</p>
      {getColorComponents()}
    </span>
  );
};

ColorChoice.propTypes = {
  sender: PropTypes.string.isRequired,
  onSetColor: PropTypes.func.isRequired,
};

export default ColorChoice;