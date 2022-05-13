import PropTypes from 'prop-types';

export default function BtnGoBack({ onClick }) {
  return <button onClick={onClick}>Go back</button>;
}

BtnGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
