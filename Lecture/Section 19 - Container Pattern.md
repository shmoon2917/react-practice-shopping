# Section 19 - Container Pattern

## :raising_hand_man: TDIL

### spinner 관련 props 옮기기

shoppage에서 isFetchingCollections 과 isCollectionsLoaded 를 단순히 컴포넌트로 전달해주기 때문에,

이를 각자의 컴포넌트로 옮길 수 있다.

이를 위해서 container 를 구현하여

컨테이너에서 store state를 props로 받아오고, withSpinnerHOC를 받아와서

compose 로 CollectionsOverview 에게 차례로 curring하여 enhanced 시킨다

shopPage에서 Container 를 가져와서

render = { } ... 대신 다시 component={..} 로 변경!

,,

cartItems / collectionPage / collectionsOverview 수정

-> 복잡하지 않게 컴포넌트의 역할이 잘 드러나게끔 컨테이너와 컴포넌트를 나눠서 작성하는 방법은 좋다.

-> 컨테이너 패턴

### Refactoring is A TradeOff

왜 기능적으로 차이점도 없는데 굳이 컨테이너를 나눠서 작성해야할까?

리팩토링은 항상 tradeoff이다. break things down / make sure that each component do one thing really well.

easier to read and understand

개발자로서 시간과 자원은 한정된다. 아무 이유없이 코드를 클린업하거나 단순히 영리해보이게끔 코드를 작성하는 모든 리팩토링이 좋은 것은 아니다. 왜 이것을 해야 하는지에 대해 가치가 있어야 한다.
