import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIscollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // tate = {
  //   loading: true,
  // };
  s;
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollectionStartAsync();

    // querySnapshot object from collectionReference object

    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //   }
    // );
  }

  render() {
    // const { loading } = this.state;
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIscollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
