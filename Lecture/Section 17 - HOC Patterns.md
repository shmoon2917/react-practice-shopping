# Section 17 - HOC Patterns

## :raising_hand_man: TDIL

### with-spinner component(HOC) 작성

백엔드로부터 데이터를 fetching 해오는 로직은 구현되었으나, INITIAL_DATA의 값을 `null`로 수정한 탓에 처음 컴포넌트에서 `state`를 selector를 통해 받아올 때, 에러가 발생하였다.

**TypeError: Cannot convert undefined or null to object**

```javascript
export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
```

위 에러를 수정하기 위해 `collections`가 없을 경우에는 빈 배열을 리턴하도록 아래와 같이 수정하였다.

```javascript
export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
```

위와 같이 셀렉터들에 분기점을 두어 리턴되는 값을 수정해주었으나, 이번에는 `collectionPage`에서 collection을 받아올 때, null값을 비구조화하는 문제가 발생하였다.

```javascript
const CollectionPage = ({ collection }) => {
  const { title, items } = collection; // 데이터를 페칭해오기 전 collection은 null이므로 에러 발생
  return (
    ...
  )
})
```

이를 위해서 실제 collections 데이터를 받아오기 전까지는, 이 데이터를 사용하는 컴포넌트 대신 `Spinner` 를 보여주도록 스피너 컴포넌트를 새로 만들었다.

스피너 컴포넌트의 `isLoading` 값은 데이터를 페칭해오는 곳에서 설정할 수 있는 값이므로, `shopPage`에서 routing component 들을 `withRouter()`로 감싸고, `loading` 값을 만들어 `props`로 전달한다.
