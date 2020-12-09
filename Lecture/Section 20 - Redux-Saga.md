# Section 20 - Redux-Saga

## :raising_hand_man: TDIL

function is impure , num exists in the scope outside of my func

it has an external dependency, just like an API call inside of componentDidMount()

Anything that requires us to make API requests or possibly handle something that might be impure

The idea is that you move it out into sagas any asynchronous activity that happens inside of our app that is not related to our component state but rather possibly related to the application as a whole or some part of the application should be moved into a saga.

In the video, yihua mentioned sagas fire before reducers, it's actually the other way around. reducers fire first, then sagas receive the action. From there, sagas can fire off new actions which in turn hit the reducers and ohter sagas as well

this correction does not change any of the code we will write for the remainder of the course, it's just a small correction on a theoretical level. The impact is also not significant because we write actions that only our sagas are listening for, our reducers receiving it before the sagas is not an issue because our reducers are not reacting to these actions that are intended for our sagas.

### Generator Function

```javascript
function* gen(i) {
  yield i;
  yield i + 10;
  return 30;
}
```

Think of it as: Ability to **pause** functions

### Take, TakeEvery, TakeLatest

### Planning Ahead with Sagas

App.js에 있는 user authentication 코드를 옮길 예정. redux-saga 로 제어할 것임

userActionTypes 추가 & action creator 추가

userReducer 수정

signInWithGoogle saga 작성

firebase utils 수정 (export googleProvider)

sagas.js 에서 import

```javascript

```

#### CustomButton

구글 로그인 커스텀 버튼도 폼 안에 있기때문에 누르면 폼 submit 이 된다. 이를 해결하기 위해서 type=button 을 해야 submit이 되지 않는다
