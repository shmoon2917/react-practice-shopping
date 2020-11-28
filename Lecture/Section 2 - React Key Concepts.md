# Section 2: React Key Concepts

## The Birth Of React.js

전통적인 웹 앱의 방식은 서버에서 매 url 요청마다 HTML, CSS, JS 파일을 제공하는 형식이었다. 그러나 웹 브라우저들마다 다른 스펙의 문제로 인해 개발자들이 웹 개발을 하는데 어려움을 겪던 차 Jquery 라이브러리가 나온다.(브라우저별 호환성을 갖추고 기능적으로 필요한 신택스를 제공)

개발자들은 이 Jquery 라이브러리를 이용하여 크로스 브라우징 이슈에 대한 고민을 덜고, 계속해서 더 Scale하고 Interative한 웹 서비스들이 만들어지면서 HTML 보다는 JS 의 중요성이 갈수록 커짐.

이후 BackBone JS와 Angular.js 가 2010년에 릴리즈되면서 Ajax 기술과 더불어 SPA(Single Page Application)의 시대가 도래함. 하나의 페이지 내에서 자바스크립트를 이용하여 DOM을 수정하고 데이터를 서버와 주고받는 모습을 갖추게 되면서 웹은 native application 와 비슷한 수준의 경험을 제공할 수 있게 됨

Angular 의 MVC 모델과 잘 조직되어 제공되는 feature 들은 팀 단위의 개발자들에게 아주 좋은 솔루션이 되어줌. 그러나 이러한 프레임워크로 개발된 앱이 계속해서 커질 때마다 어플리케이션의 복잡도가 갈수록 증가하여 버그가 발생함.(데이터의 양방향 바인딩 때문)

페이스북 개발자들은 이렇게 복잡도가 증가하는 아키텍처에서의 문제점을 많이 겪으며 아예 새로운 코드 베이스를 구상하고 이를 개발하게 됨. 이 것이 바로 리액트

## Declarative vs Imperative

리액트가 성공하게 된 4가지 핵심 Key 가 있는데 먼저 첫 번째는

**1. Don't touch the DOM. I'll do it**

기존의 Javascript Library 나 Framework 들은 DOM 을 직접 조종했음. 이러한 방식을 `Imperative Paradigm` 이라고 함. 사용자가 사용하는 기술의 Syntax 를 통해 직접 DOM 조종을 명령하는 방식임.

이는 직관적이지만 앱이 거대해짐에 따라 각 독립된 케이스나 이벤트 간의 관계를 파악하기 어려워지고, 특히나 `Performance bottleneck` 이 커지게 됨. DOM이 바뀜에 따라 브라우저가 `repaint`(DOM이 JS에 의해 변경될 때 렌더트리에 재갱신된 값들을 화면에 반영하는 과정) 를 하게 되는데, 이를 많이, 그리고 자주 할 때마다 성능적으로 문제를 일으킴.

리액트는 Imperative 하지 않은 다른 방식을 채택함. 사용자가 직접 DOM 을 조작하도록 하지 않고, 앱이 어떻게 보여야 하는지에 대한 거대한 blueprint 를 가지고 변경점을 찾아내는 방식을 구현함. 이는 `Declarative Paradigm` 이라고 함.

직접 DOM을 조종하지 말고, 페이지가 어떻게 생겨야 하는지 알려만 주면, React 는 이 기술의 이름처럼 `REACT`(변경점을 찾고 DOM에 반영) 하게됨. 기존의 방식보다 복잡도는 적어지고 코드의 퀄리티는 좋아지며 개발하는데 겪는 시간도 줄어들게 됨.

## Component Architecture

두 번째는

**2. Build Websites like lego blocks**

리액트는 재사용가능한 `Component` 의 컨셉을 위해 디자인됨. 각각의 스타일과 컨텐츠를 가지는 영역을 `Component`라 하는데, Application의 `State` 들과 함께 사용자가 직접 구현하게 됨.

이렇게 컴포넌트들을 구현하여 작은 컴포넌트를 큰 컴포넌트 안에 넣을 수도 있고, 같은 역할을 수행하는 컴포넌트들을 재사용해 나열할 수도 있으며 결과적으로 하나의 큰 컴포넌트 안에 담긴 여러 개의 컴포넌트들로 앱이 구성되게 됨

이렇게 마치 레고블록처럼 특정한 역할을 수행하는 컴포넌트들을 구성하고 재사용할 수 있게끔 디자인된 것은 리액트의 핵심적 아이디어

## One Way Data Flow

세 번째는

**3. Unidirectional data flow**

리액트는 `state`라는 아이디어를 가지는데 앱 내의 모든 data 들을 설명하는 자바스크립트 객체라고 생각하면 됨. 이 `state` 와 `component` 그리고 `JSX` 구문을 가지고 리액트는 `Virtual DOM` 을 구성하게 됨. HTML 처럼 보이지만 HTML 이 아니라 자바스크립트 객체임.

이 `Virtual DOM`은 `Actual DOM` 을 어떻게 업데이트 시켜야하는지에 대한 blueprint 를 리액트에게 제공하는 역할을 함. 리액트가 이 Virtual DOM 을 보고 DOM 을 업데이트 함. 이러한 데이터 흐름을 `Unidirectional data flow` 라고 함. 우리가 웹페이지에서의 변화를 원할 때마다 data(state) 가 변화되고, 이를 다시 React 에서 Virtual DOM 을 새로 구성하여 Actual DOM 에 반영하게 됨.

또한 컴포넌트 내의 데이터는 Virtual DOM의 구성 요소 중 상위 컴포넌트에 데이터 흐름이 역행하지 않고 하위 컴포넌트로만 흘러감. 이는 디버그할 때 매우 편리한데, 관련되지 않은 컴포넌트는 찾아볼 필요 없이 데이터가 존재하는 컴포넌트만 찾으면 되기 때문

## UI Library

마지막으로

**4. UI, The rest is up to you**

많은 빌트인들을 가지는 angular는 `프레임워크`라고 하며, 어플리케이션을 구성하는데 필요한 모든 툴들을 개발자에게 제공함. 부엌이 프레임워크라면 사람에게 오븐과 팬과 서랍과 칼 등 필요한 것들을 제공하는 예시를 들 수 있음.

반면에 리액트는 오직 `component` 와 `Virtual DOM` 를 가지고 View 를 다루는 일에만 집중하고 다른 일은 필요에 따라 다른 라이브러리나 모듈을 사용하게끔 함. 인덕션을 제공하지만 요리를 만들기 위한 재료나 다른 것들은 직접 필요에 의해 챙겨야 함. 이렇게 UI를 위한 핵심적인 아이디어와 원칙에만 집중하기 때문에 `React Native`, `React 360`, `Electorn` 과 같이 다른 운영 환경에서의 어플리케이션도 구현할 수 있게됨

## How To Be A Great React Developer

1. Decide on Components
2. Decide the State and where it lives
3. What Changes when state changes

이 세 가지를 알면 좋은 리액트 개발자가 될 수 있음.
