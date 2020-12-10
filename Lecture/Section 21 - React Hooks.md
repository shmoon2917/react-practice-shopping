# Section 21 - React Hooks

## :raising_hand_man: TDIL

### Why Did React Add Hooks?

[React Docs](https://reactjs.org/docs/hooks-intro.html#motivation)

### Rules of Hooks

[React Docs](https://reactjs.org/docs/hooks-rules.html)

### useEffect In Our App

shopPage component 에 있는 `fetchCollectionsStart`를 호출하기 위해서 useEffect를 작성할 때, 의존성 배열을 제거하면 useEffect가 두 번이 실행된다. 왜냐하면 App.js에서 `checkUserSession`을 호출한 이후 `currentUser` props가 변경되어 App component가 리렌더링됨에 따라 자식 컴포넌트인 shopPage component도 새로 리렌더링되어 useEffect를 한 번더 실행하기 때문이다.
