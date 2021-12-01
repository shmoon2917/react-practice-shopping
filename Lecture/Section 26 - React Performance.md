# Section 26 - React Performance

## :raising_hand_man: TDIL

### 참고 자료

[CSS Grid Cheat Sheet](https://css-tricks.com/snippets/css/complete-guide-grid/)

[React Performance Cheat Sheet](https://houssein.me/progressive-react)

[React Profiler Docs](https://reactjs.org/docs/profiler.html#usage)

[npm - compression](https://www.npmjs.com/package/compression)

### 주의할 점

퍼포먼스 향상과 관련된 많은 기술들을 아무 이유없이 적용하지 말아야 한다. 문제가 생겼을 때 퍼포먼스를 최적화 하면 된다. 너무 퍼포먼스 측면을 열망하지 말고 곧바로 최적화를 할 필요는 없다. 두 가지를 기억하자.

1. 너의 코드가 느린지 측정을 먼저 해야 어느 부분에서 퍼포먼스를 향상시킬 수 있는지를 파악할 수 있다.

2. 너무 과도하게 퍼포먼스 최적화를 하지마라

### Look into Chrome Dev Tools

사이트를 리프레쉬 했을 경우, 이미지와 폰트 관련 css가 캐싱됨.`(memory cache, disk cache)`

자바스크립트 볼륨도 줄어들음

### React Lazy

React Lazy를 사용하면 당장에 구동이 필요하지 않은 컴포넌트들을 비동기로 나중에 로딩할 수 있다.

문제점이 하나 있는데, lazy로 컴포넌트를 불러오는 것은 비동기이기 때문에 페이지가 존재하지 않는 순간이 생긴다. 불러오기 전까지 불러올 컴포넌트가 없기 때문에 에러가 생길 수 있다.

이를 위해 `React Suspense`를 사용한다.

### Error Boundaries

lazy loading을 통해 이제 각각의 페이지 페칭이 네트워크에 의존하기 때문에, 네트워크 환경에 따라 연결이 중지되거나 느려진다면 에러가 발생할 수 있다.

에러가 나는 상황에서 보기 싫은 에러대신 보여주는 `Error Boundary` 컴포넌트를 작성할 수 있다.

### React.memo, PureComponent, shouldComponentUpdate

리렌더링을 막아주는 함수와 클래스.

**주의할 점** : 위 함수를 통한 컴포넌트의 메모이제이션은 그냥 그 자체로 렌더링될 때보다 조금 느리다. 따라서 꼭 필요한 곳에서 사용해야 한다. 모든 최적화는 비용이다.

### Gzipping and Compression

Heroku에 배포할 때, after gzip 다음에 나오는 각 번들 사이즈보다 실제로 네트워크를 통해 살펴본 번들 사이즈가 더 크다.

이를 해결하기 위해 노드 서버에 `compress` 를 사용한다.
