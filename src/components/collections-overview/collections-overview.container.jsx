import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// right to left
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
