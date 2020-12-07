# Section 11 - Advanced Routing

## :raising_hand_man: TDIL

### Nested route

```javascript
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
```

### Mapping string to id

url parameter의 타입은 string인데, ID와 매칭시켜야 한다면, 매핑 객체를 이용하여 간단하게 해결할 수 있다.

**(이후 Hash Table 사용하면서 deprecated)**

```javascript
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  ...
};

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
```

### Memoizing selectCollection and collectionUrlParam

우리가 방금 작성한 `selectCollection` 함수는 **메모이제이션이 되지 않는다.**
상태가 바뀔 때마다 실행되고 새로운 selectCollection 함수 인스턴스를 호출하는 `mapStateToProps` 때문인데, 이로부터 전달되는 `collectionUrlParam`으로 인해 메모이제이션이 되지 않는다.

이 경우 `collectionUrlParam`은 변경될 수 있는 dynamic argument이므로, selectCollection을 메모이징하기 위해서는 헬퍼 함수를 이용하여 **전체 함수를 메모이징해야 한다.**

`locash.memoize` 헬퍼 함수를 사용할 수 있는데, 함수가 호출되고 `collectionUrlParam`을 받을 때마다, 이 함수(selector를 리턴하는)의 리턴값을 메모이징한다. 함수가 같은 param을 가지고 다시 호출됐을 때, 다시 이 함수를 호출하지 않고 단지 전에 저장해두었던 selector를 리턴한다.

### Currying

```javascript
// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3);
```
