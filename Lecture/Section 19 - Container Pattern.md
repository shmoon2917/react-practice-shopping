# Section 19 - Container Pattern

## :raising_hand_man: TDIL

### Container Pattern

현재 `shopPage`는 `isFetchingCollections` 과 `isCollectionsLoaded` state 들을 단순히 컴포넌트로 전달해주는 역할이기 때문에 이를 각자의 컴포넌트로 옮길 수 있다. 하지만 그렇게 하면 HOC를 중첩해서 커링해야하는데, 이렇게 되면 깔끔한 코드 작성이 어렵다.

이를 해결하기 위해서 `Container` 를 구현하여 컨테이너에서 store state를 props로 받아오고, `withSpinner(HOC)`를 받아와서 redux의 `compose` 메소드로 차례로 커링하여 enhanced 시킬 수 있다. 코드는 아래와 같다.

```javascript
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// 오른쪽에서 왼쪽 순서로 커링된다.
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
```

이후 shopPage에서 Container 를 가져와서 아래와 같이 코드를 수정한다.

```javascript
// Before
<Route
  exact
  path={`${match.path}`}
  render={(props) => <CollectionOverViewWithSpinner isLoading={} {...props} />}
/>

// After
<Route exact path={`${match.path}`} component={CollectionOverViewContainer}
/>
```

이처럼 컴포넌트의 역할이 복잡하지 않고 잘 드러나게끔 컨테이너와 컴포넌트를 나눠서 작성하는 방법이 좋다.

이를 `Container Pattern` 이라고 한다.

### Refactoring is A TradeOff

왜 기능적으로 차이점도 없는데 굳이 컨테이너를 나눠서 작성해야할까?

기억하자. 리팩토링은 항상 `tradeoff`이다. **리팩토링의 목적은 코드를 나눠 읽고 이해하기 쉽게끔 하고, 각각의 컴포넌트가 하나의 역할만에 충실하게끔 만드는 것이다.**

개발자로서 시간과 자원은 한정된다. 아무 이유없이 코드를 클린업하거나 단순히 영리해보이게끔 코드를 작성하는 것과 같은 리팩토링은 좋은 것은 아니다. 리팩토링을 왜 해야 하는지에 대해 가치가 있어야 한다.
