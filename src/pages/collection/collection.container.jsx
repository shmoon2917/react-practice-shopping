import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

// 반대 값을 줘야 하므로 함수 형태로 리턴
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

// Container don't render anything, just pass props down to components
export default CollectionPageContainer;
