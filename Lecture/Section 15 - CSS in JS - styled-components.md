# Section 15 - CSS in JS - styled-components

## :raising_hand_man: TDIL

### Styled-components

#### Issues with CSS

CSS의 글로벌 네임스페이스가 공유되어 클래스가 겹칠 수 있게 되는 문제가 발생한다. 이는 javascript로 해결할 수 있는데,

```javascript
const textStyles = {
  fontSize: '24px',
  color: 'red',
}

<div style={textStyles}>...</div>
```

위 방식이 기본적인 CSS in JS 방식이다. 다만, 이 방식의 유일한 문제점은 여러 CSS selector에 대해 접근할 수가 없게 된다. **(ex. :hover, :first-child 등..)**

#### styled-components 라이브러리

위 문제는 Styled-components 라이브러리를 사용함으로서 해결할 수 있다. CSS in JS 라이브러리 중 가장 많이 사용되는 라이브러리이며, 장점으로는

1. 클래스 네임의 고유성을 보장할 수 없었던 기존의 방식과는 다르게 100% 고유성을 보장할 수 있다. (클래스가 서로 침범하는 문제가 발생하지 않는다)
2. 스타일을 더 이상 사용하기 않게 되면, 간단하게 컴포넌트를 제거함으로써 해결할 수 있다.
3. 필요한 부분에 컴포넌트를 재사용 가능하다
4. CSS selector 사용이 가능하고, 컴포넌트에 props를 주입하여 동적으로 스타일 컨트롤이 가능하다

### CSS 선택자

[반드시 기억해야 하는 30가지 CSS 선택자](https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

필요할 때 찾아보기
