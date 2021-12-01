# React Shopping Application

---

## Why I do this

리액트의 여러 기능들과 다양한 써드파티 라이브러리들을 사용하고, 리팩토링해보며 하나의 어플리케이션을 개발해보고 싶었습니다.
Udemy 강의를 수강하며 전체적인 리액트 생태계의 기술과 지식들을 적용해보며 학습하기 위한 개발 프로젝트입니다. 진행한 학습 및 개발 과정은 다음과 같습니다.

- [x] 1. `Hooks`가 나오기 전의 개념인 `class component`와 `functional component`로 첫 어플리케이션을 작성
- [x] 2. BackEnd는 `firebase`의 기능들을 사용(firestore, authentication)하고 데이터를 fecthing 관련 유틸 함수 작성
- [x] 3. `redux` 로직 구현 및 `react-persist` 이용하여 스토리지에 저장 및 동기화
- [x] 4. 결제 모듈 연동
- [x] 5. `redux thunk/saga` 로직 구현하여 기존 firebase 데이터를 페칭해오는 방식을 `observable` 패턴에서 비동기 `promise` 패턴으로 redux 모듈과 연동
- [x] 6. custom HOC 구현(withSpinner)
- [x] 7. `styled-components` 적용 - 스타일 코드 모두 마이그레이션 완료
- [x] 8. `Hooks` 코드로 기존 class component 리팩토링 및 `Context API` 학습
- [x] 9. Performance Optimization
- [ ] 10. `GraphQL + Apollo` 적용하여 redux state flow 대체
- [ ] 11. (TODO) Testing - `jest` 사용

## Description

학습용으로 제작한 간단한 쇼핑몰 어플리케이션입니다. 구현된 기능으로는 다음과 같습니다.

- firebase 이용하여 로그인(+ 구글 로그인) 및 회원가입 구현
- firestore에서 페칭해온 데이터를 보여주는 display 컴포넌트 구현 및 스피너 컴포넌트 구현
- 상품 장바구니 담기 구현
- 장바구니에서 물품 수량 증감 구현
- Redux 적용(user/collections(상품 목록)/cart(장바구니))
- Redux-saga 적용(데이터 페칭, 회원가입 등)
- 컴포넌트 지연 로딩 적용 및 suspense 처리
- stripe 결제 모듈 연동(test ver.)
- will be added...

## Installation and Usage

```
npm install

npm start
```

## Link

https://crwn-shmoon2917.herokuapp.com/
