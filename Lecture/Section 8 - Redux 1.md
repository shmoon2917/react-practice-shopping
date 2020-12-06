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
