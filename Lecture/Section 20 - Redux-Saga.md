# Section 20 - Redux-Saga

## :raising_hand_man: TDIL

### Introduction To Sagas

Think of it as: Ability to **PAUSE** functions

어플리케이션의 전체나 일부에 관련된 비동기 작업들(i.e API requests)은 saga로 옮겨야 한다.

### Correction about Saga flow

액션을 디스패치할 때, 실제로는 reducer가 먼저 실행되고, 이후 saga가 액션을 받는다. 그 이후 saga가 리듀서가 실행되도록 새로운 액션을 디스패치하거나 다른 saga를 실행한다.

### Planning Ahead with Sagas

`App.js`에 있는 `user authentication` 관련 데이터 페칭 코드를 redux-saga 로 제어한다.

`userActionTypes`을 추가하고(START, SUCCESS, FAILURE), `action creator`도 함께 추가한다. 또한 각 액션에 맞는 역할을 수행하도록 `userReducer`도 수정한 뒤, saga를 작성한다. 코드는 아래와 같다.

```javascript
function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
```

기존에는 구글 로그인을 위한 `signInWithPopup` 메소드를 `SignInComponent`에서 바로 호출하고 있었는데, 코드를 변경하면서부터 이를 saga에서 호출한다. 이후 받아온 유저 정보를 통해 새로운 document를 만들어 firestore에 저장하고, reducer로 SUCCESS 액션을 디스패치하는 로직은 구글 로그인과 이메일 로그인이 동일하기 때문에 코드 중복을 제거하고 saga util 함수를 하나 생성하였다. 코드는 아래와 같다.

```javascript
function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    put(signInFailure(error));
  }
}
```

### CustomButton

구글 로그인 커스텀 버튼도 폼 안에 있기때문에 누르면 폼 submit 이벤트가 발생한다. 이를 해결하기 위해서 아래와 같이 `type=button` 속성을 정해줘야 submit이 되지 않는다

```javascript
<CustomButton type='button' ...>Sign in with Google</CustomButton>
```

### Recreating Persistence

기존 App.js에서 `auth.onAuthStateChanged` 함수를 통해 Observable 패턴으로 `userAuth`를 구독받았던 형태를 변경해야 한다. 더 이상 App.js에서 auth 관련 일을 처리하지 않기 때문. 이 비동기 작업을 saga로 옮길 것인데, 이를 위해서 firebase 유틸 함수를 다음과 같이 하나 작성한다.

```javascript
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
```

이는 firebase 를 백엔드로 쓰지 않는 상황을 단순히 묘사한 것이다. 위처럼 `userAuth`에 대한 구독을 함수가 실행될 때 딱 한번만 받고 바로 구독을 해지한 후, Promise 패턴으로 감싸서 비동기로 처리해준다. 이를 이용하여 이제는 saga 함수에서 비동기로 현재 유저 세션에 대한 정보를 가져올 수 있다. 코드는 아래와 같다.

```javascript
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
```
