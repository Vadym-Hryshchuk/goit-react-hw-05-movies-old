import PropTypes from 'prop-types';
import { LoadMoreButton } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ loadMore }) {
  return <LoadMoreButton onClick={loadMore}>load more</LoadMoreButton>;
}
LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
