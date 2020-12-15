# Section 26 - React Performance

## :raising_hand_man: TDIL

### 주의할 점

퍼포먼스 향상과 관련된 많은 기술들을 아무 이유없이 적용하지 말아라. 문제가 생겼을 때 퍼포먼스를 최적화 하면 된다. 너무 퍼포먼스 측면을 열망하지 말고 곧바로 최적화를 할 필요는 없다. 두 가지를 기억하라.

1. 너의 코드가 느린지 측정을 먼저 해야 어느 부분에서 퍼포먼스를 향상시킬 수 있는지를 파악할 수 있다.

2. 너무 과도하게 퍼포먼스 최적화를 하지마라

### Look into Chrome Dev Tools

2.671xx.chunk.js -> anything that we were using to build our application

main.xxx.chunk.js -> react code that we wrote

사이트를 리프레쉬 했을 경우, 이미지와 폰트 관련 css가 캐싱됨.(size -> memory cache, disk cache), 자바스크립트 볼륨도 줄어들음

유저가 페이지를 네비게이팅하기도 전에 모든 코드를 받아올 필요가 없다.

### React lazy

문제점이 하나 있는데, lazy로 컴포넌트를 불러오는 것은 비동기이기 때문에 페이지가 존재하지 않는 순간이 생긴다. 불러오기 전까지 없기 때문에 에러가 생길 수 있다.

-> suspense를 사용한다.

### Error Boundaries

이제 각각의 페이지 페칭이 네트워크에 의존하기 때문에, 네트워크 환경에 따라 연결이 중지되거나 느려진다면 에러가 발생할 수 있다.

-> error boundary 사용

### React.memo, PureComponent, shouldComponentUpdate

리렌더링을 막아주는 함수와 클래스.

주의: inital memoization of our component takes longer than just simply passing the component itself.

모든 최적화는 이 비용이다.

우리의 앱에서

selector와 리셀렉터를 이용해 props으로 받아오는 state들은 모두 메모이징된다. 이미 최적화를 해놓은 것.

### Gzipping and Compression

히로쿠에 배포할 때, after gzip 다음에 나오는 각 번들 사이즈보다 실제로 네트워크를 통해 살펴본 번들 사이즈가 더 크다.

compression install
