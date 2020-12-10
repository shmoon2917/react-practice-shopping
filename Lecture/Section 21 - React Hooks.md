# Section 21 - React Hooks

## :raising_hand_man: TDIL

### Why Did React Add Hooks?

[React Docs](https://reactjs.org/docs/hooks-intro.html#motivation)

#### Motivation

Hooks는 우리가 5년 동안 수만 개의 컴포넌트를 작성하고 유지하면서 직면해 온 리액트의 연관성이 없어 보이는 다양한 문제들을 해결한다. 당신이 리액트를 배워 매일 이것을 사용하던지, 또는 비슷한 컴포넌트 모델을 가진 다른 라이브러리를 선호하던지 간에 아마 이러한 문제점들을 인지했을 것이다.

##### 컴포넌트간에 stateful한 로직을 재사용하기 힘들다

리액트는 컴포넌트에 reusable behavior를 붙일 방법을 제공하지 않는다. (예를 들어, store에 연결하는 것과 같이). 리액트로 작업을 해봤다면, 이러한 문제를 해결하기 위한 [render props](https://reactjs.org/docs/render-props.html)이나 [HOC](https://reactjs.org/docs/higher-order-components.html) 패턴에 익숙할 것이다. 그러나 이러한 패턴은 사용할 때 컴포넌트를 재구성해야 하므로 번거롭고 코드를 따르기가 더 어려워질 수 있다. React DevTools 로 Hooks 이전의 리액트 어플리케이션을 살펴볼 때, providers, consumers, hoc, render props, 그리고 다른 추상화의 층들로 감싸진 `"wrapper hell"`을 발견할 수 있을 것이다. DevTools에서 필터링할 수 있지만, 이는 보다 근본적인 문제를 지적한다: **리액션은 stateful 로직을 공유하기 위해서 더 나은 방법을 필요로 한다.**

Hooks를 이용하면, 컴포넌트로부터 stateful 로직을 추출할 수 있어 재사용할 수 있고, 독립적으로 테스트할 수 있다. 컴포넌트 계층을 변경하지 않고도 stateful 로직을 재사용할 수 있게 해주는데, 이는 많은 컴포넌트들과 커뮤니티들 간에 Hooks를 쉽게 공유할 수 있게 해준다.

##### 갈수록 복잡해지는 컴포넌트는 이해하기 힘들어진다

우리는 처음엔 간단하게 시작했지만, 갈수록 stateful logic과 side effects들로 점철되어 관리할 수 없을 정도로 커지는 컴포넌트를 유지해야했다. 각 lifecycle 메소드들은 서로 관련없는 로직들을 다 포함해야 했다. 예를 들어, 컴포넌트는 componentDidMount와 componentDidUpdate 에서 어떤 데이터의 페칭을 수행한다. 그러나 componentWillUnmount에서 클린업을 수행함과 함께 동일한 componentDidMount 메소드가 이벤트 리스너를 세팅하는 연관없는 로직을 포함하게 되었다. 서로 관련된 코드는 함께 분리되어 변경되어야 하는데, 완전히 관련없는 코드는 하나의 메소드 내에 결합되어 있다. 이는 버그와 무일관성을 쉽게 가져온다.

많은 경우에 이러한 컴포넌트들을 작게 분리하는 것은 불가능한데, 왜냐하면 stateful한 로직이 곳곳에 있기 때문이다.
또한 테스트하기에도 어렵다. 이 것은 사람들이 다른 상태 관리 라이브러리를 선호하는 이유 중 하나이기도 하다. 그러나, 이는 과도한 추상화를 도입하고, 다른 파일 사이를 계속해서 이동하게 하며, 컴포넌트 재사용을 더욱 어렵게 한다.

이러한 문제를 해결하기 위해서, Hooks는 하나의 컴포넌트를 어떤 부분들이 서로 관련되어 있는지에 기반하여 작은 함수로 나눌 수 있게 해준다.(subscription 세팅 또는 fetching data 와 같이) 또한 더욱 예측 가능하게끔 하기 위해서 reducer를 이용한 로컬 스테이트를 매니징할 수도 있다.

##### 클래스는 사람과 기계를 동시에 혼란스럽게 한다.

코드 재사용과 조직을 어렵게 하는 것 뿐만 아니라, 클래스는 리액트를 배우는 데 있어 큰 장애물이 된다. 이 것이 자바스크립트에서 어떻게 작동하는지 이해해야 하는데, 대부분의 언어에서의 작동 방식과는 매우 다르다. 사람들은 props, state, 그리고 탑-다운 데이터 플로우에는 매우 익숙하나, 여전히 클래스로 고통받는다. 리액트에서의 함수형과 클래스형 컴포넌트의 구분과 언제 어떤 것을 사용해야 하는지 고민하는 것은 숙련된 리액트 개발자들 사이에서도 아직도 의견이 쟁쟁하다.

추가로, 리액트는 세상에 나온지 5년이 지났고, 우리는 향후 5년 안에 이 것이 의의가 있는지 확인하고 싶었다. Svelte, Angular, Glimmer 등의 `ahead-of-time compilation of component` 방식은 잠재력이 많다. 특히나 템플릿에 제한이 없다면 말이다. 최근에, 우리는 프리팩을 이용한 컴포넌트 폴딩 실험도 해왔고, 초기 결과도 기대했었다. 하지만, 클래스 컴포넌트는 이러한 최적화를 느린 경로로 되돌리는 의도하지 않은 패턴을 초래할 수 있다. 오늘날의 도구 사용에도 Class는 문제가 있다. 예를 들어 클래스는 압축이 잘 되지 않고, hot reloading도 믿을 수가 없다. 우리는 코드의 최적화가 가능한 경로에 머무를 가능성이 높은 API를 제시하고자 한다.

이러한 문제를 해결하기 위해, Hooks는 클래스 없이도 리액트의 기능들을 사용할 수 있게 해준다. 개념적으로, 리액트 컴포넌트는 항상 함수에 가까웠다. Hooks는 함수를 수용하지만 리액트의 실질적 정신을 희생하지 않는다.

### Rules of Hooks

[React Docs](https://reactjs.org/docs/hooks-rules.html)

#### Hooks는 반드시 최상단에서만 호출해라!

Hooks를 반복문, 조건문 또는 중첩된 함수 내에서 사용하지 마라. 항상 리액트 함수의 최상단에서만 사용해라. 이러한 룰을 지킴에 따라, 매번 컴포넌트가 렌더링될 때마다 같은 방식으로 호출되는 것을 확신할 수 있다. 그 것이 useState와 useEffect의 반복 호출 사이에서 Hooks의 state를 올바르게 보존할 수 있도록 하는 방법이다.

#### 리액트 함수에서만 사용해라!

일반적인 자바스크립트 함수에서는 사용하지 마라.

### useEffect In Our App

shopPage component 에 있는 `fetchCollectionsStart`를 호출하기 위해서 useEffect를 작성할 때, 의존성 배열을 제거하면 useEffect가 두 번이 실행된다. 왜냐하면 App.js에서 `checkUserSession`을 호출한 이후 `currentUser` props가 변경되어 App component가 리렌더링됨에 따라 자식 컴포넌트인 shopPage component도 새로 리렌더링되어 useEffect를 한 번더 실행하기 때문이다.

### Should We Adopt Hooks?

[React Redux Docs](https://react-redux.js.org/next/api/hooks)

- [Optimize your redux selectors with useSelector and Reselect](https://programmerden.com/2020/04/06/optimize-your-redux-selectors-with-useselector-hook-and-memoize-them-with-reselect/)
  - useSelector의 작동과 reselect의 메모이제이션 방식을 명확하게 설명해주는 좋은 포스트이다

[React Router Docs](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/hooks.md)

[‘A Complete Guide to useEffect’ - Dan Abramov](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko#tldr-too-long-didnt-read---%EC%9A%94%EC%95%BD)

새로운 프로젝트를 시작하게 된다면, 리액트 Hooks를 사용하면 된다. 다만 기존 프로젝트를 무리하게 일일이 Hooks로 마이그레이션 할 필요는 없다. 쉽지 않은 작업이고, 알다시피 개발자에게는 시간과 자원이 한정적이다. 마이그레이션할 명확한 이유와 충분한 시간이 주어진다면 고려해볼만 하다.
