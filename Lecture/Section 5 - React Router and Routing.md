# Section 5 - React Router and Routing

[React Router DOM Docs](https://reactrouter.com/web/guides/quick-start)

## TDIL

### exact attribute

URL이 path 와 정확히 일치해야함을 알려주는 어트리뷰트

### React Router DOM props

리액트 라우터 돔을 통해 렌더되는 컴포넌트는 props 를 받게 되는데, 총 `4가지(history, location, match, staticContext)` 로 구성되어 있다.

### withRouter

Route 컴포넌트로 받게되는 routing 관련 props 를 사용해야 하는 컴포넌트까지 계속 tunneling 시키지 않고, withRouter 라는 [Higher Order Component(HOC)](https://ko.reactjs.org/docs/higher-order-components.html) 를 사용하여 props 를 바로 받을 수 있다.

### rest parameter

Child Component의 props 로 보내는 데이터들이 많다면, `rest parameter(...)` 를 사용하여 간편하게 작성할 수 있다.
