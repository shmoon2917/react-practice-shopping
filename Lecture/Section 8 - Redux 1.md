# Section 8 - Redux 1

## :raising_hand_man: TDIL

### Redux's 3 Principles

1. Single source of truth

2. State is read only

3. changes using pure functions

### connect()

connect()는 HOC **(컴포넌트를 특정 함수로 감싸서 특정 값 또는 함수를 props로 받아와서 사용 할 수 있게 해주는 패턴)** 중 하나이다.

리덕스 패턴에 사용되는 state와 action dispatcher를 컴포넌트의 props로 사용할 수 있게끔 해준다.

`mapDispatchToProps` 를 redux 라이브러리에 내장된 `bindActionCreators`라는 함수를 사용하여 리팩토링이 가능하다.

#### 참고

[Redux Docs](https://react-redux.js.org/api/connect)

[Velopert](https://react.vlpt.us/redux/09-connect.html)

### State memoization and Reselect

리덕스의 state는 매번 state가 변경될 때마다 새로운 객체가 된다. 변경되는 것이 없다고 하더라도 reducer에서 새로운 겍체로 리턴한다. state가 변경될 때마다 매번 `mapStateToProps`와 `mapDispatchToProps`가 호출되는데, **실제로 데이터가 변경되지 않음에도 새로운 객체를 props로 주입하여 컴포넌트가 리렌더링되는 것은 퍼포먼스에 영향을 준다.**

따라서 기존 state를 메모이제이션하여 데이터의 변경이 없다면 컴포넌트의 리렌더링을 막는 기능이 필요한데, 이를 도와줄 라이브러리가 `Reselect`이다.

#### Shallow equality check

우리가 작성한 `CartIconComponent`에서 `itemCount`를 props로 받아올 때, selector를 사용하지 않아도 `mapStateToProps`에서 알아서 원시타입에 대한 `얕은 동등성 검사`를 수행한다. 따라서 불필요하게 다시 렌더링하지 않도록 값을 교체하지 않는다.

#### CreateStructuredSelector

reselect 라이브러리의 `CreateStructuredSelector` 메소드를 사용하면 mapStateToProps를 통해 필요한 state를 받아올 때 일일이 셀렉터들마다 state를 주입할 필요 없이 간단하게 작성할 수 있다.

```javascript
// createStructuredSelector 사용
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  ...: ...
});

// 사용 x
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
  ...: ...(state)
});
```

### UTF-8 Wingdings

[W3School](https://www.w3schools.com/charsets/ref_utf_dingbats.asp)
