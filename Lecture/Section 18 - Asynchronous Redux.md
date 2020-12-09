# Section 18 - Asynchronous Redux

## :raising_hand_man: TDIL

### Moving logic from componentDidMount() to redux

기존 `shopPage`의 `componentDidMount()` 메소드에서 collections 데이터를 페칭해오고 있었는데, 이는 같은 데이터를 필요로 하는 컴포넌트가 생겼을 때, 로직이 재작성되어야 하는 불필요한 일이 발생한다. 그렇다고 최상위 컴포넌트인 `App.js`에 작성하는 것은 좋지 않은데, 데이터를 페칭해오는 로직이 모두 App.js 로 모인다면 성능적으로 문제를 일으키기 때문이다.

> DRY(Don't Repeat Yourself) manner를 지키기 위해서 재사용 가능한 로직으로 작성해야 한다.

이를 위해서 `redux-thunk`라는 라이브러리를 사용한다. 이는 redux 플로우 내에서 비동기 관련 작업들을 처리할 수 있게끔 만들어진 라이브러리이다.

스피너 컴포넌트(HOC)를 위한 `isLoading`을 redux 내로 옮겼고, 새로 비동기 처리 관련 액션 생성 함수들을 추가하였다. 이후 Thunk 함수를 작성하여 `collections`를 페칭해오는 로직을 다음과 같이 옮겼다.

```javascript
export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');

  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => {
      dispatch(fetchCollectionsFailure(error.message));
    });
};
```

#### Error Debuging

위와 같이 리팩토링을 한 후, 페이지를 리프레쉬할 때 collection이 `null`이어서 `title`을 프로퍼티를 받아올 수 없다는 에러가 발생하는데 이유는 다음과 같다.

> 리덕스 리듀서 내의 `isLoading`의 초깃값이 `false`로 설정된 상태인데, componentDidMount() 함수가 호출되어 비동기 데이터 페칭이 실행되기 전 스피너 컴포넌트가 이 props를 받아 spinner 대신 collectionsPage 컴포넌트를 렌더링하기 때문이다.

이를 위해서 새로운 `selector`를 다음과 같이 작성하였다.

```javascript
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
```

이렇게 작성하면 collections 이 없을 때는 `false` 값을 리턴하기 때문에 `selectIsCollectionFetching`과 함께 스피너 컴포넌트의 props를 받아올 selector로 사용가능하다.
