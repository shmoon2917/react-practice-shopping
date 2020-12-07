# Section 12 - State Normalization

## :raising_hand_man: TDIL

### Data normalization

`collections` array의 데이터들을 다 조회해서 일치하는 ID를 찾아내는 방식 **(개별 데이터가 필요한 때)** 은 데이터의 양이 많아질수록 성능에 영향을 줄 수 있다. O(N)의 시간 복잡도를 가지는 배열 대신 `Hash Table`을 사용하면 O(1)의 시간 복잡도로 데이터를 가져올 수 있다.

### 객체를 배열로 변환시켜주는 selector 구현

```javascript
export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
```

`Object.values()`를 사용하지 않는 이유는 리턴되는 배열 요소의 참조값이 객체 내 요소 참조값과 동일하기 때문이다. redux의 state는 항상 새로운 객체여야 하기 때문에 위 방식으로 하여 매 새로운 데이터를 리턴하도록 한다.
