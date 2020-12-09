# React Shopping Application

---

## Why I do this

리액트에 대한 학습을 어느정도 진행한 이후, 리액트의 여러 기능들과 다양한 써드파티 라이브러리들을 사용하고 리팩토링해보며 하나의 어플리케이션을 개발해보고 싶었습니다. Udemy 강의를 수강하며 전체적인 리액트 생태계의 기술과 지식들을 적용해보며 학습하기 위한 개발 프로젝트입니다. 계획된 개발 플로우는 다음과 같습니다.

- [x] 1. `Hooks`가 나오기 전의 개념인 `class component`와 `functional component`로 처음 대략적인 어플리케이션을 작성
- [x] 2. BackEnd는 `firebase`의 기능들을 사용(firestore, authentication)하고 데이터를 fecthing 관련 유틸 함수 작성
- [x] 3. `redux` 로직 구현 및 `react-persist` 이용하여 스토리지에 저장 및 동기화
- [x] 4. 결제 모듈 연동
- [x] 5. `redux thunk/saga` 로직 구현하여 기존 firebase 데이터를 페칭해오는 방식을 `observable` 패턴에서 비동기 `promise` 패턴으로 redux 모듈과 연동
- [x] 6. custom HOC 구현(withSpinner)
- [x] 7. `styled-components` 적용 - 스타일 코드 모두 마이그레이션 완료
- [ ] 8. **(WIP)** `Hooks` 코드로 기존 class component 리팩토링 및 Context API 구현
- [ ] 9. (TODO) `GraphQL + Apollo` 적용하여 redux state flow 대체
- [ ] 10. (TODO) Performance Optimization
- [ ] 11. (TODO) Testing - `jest` 사용

## Description

핵심 기능들을 구현한 쇼핑몰 어플리케이션입니다. css보다는 javascript 코드에 집중하였습니다. 구현된 기능으로는

- firebase 이용하여 로그인(+ 구글 로그인) 및 회원가입 구현
- firestore에서 데이터 페칭하여 상품 display 구현
- 데이터 페칭 전 스피너 컴포넌트 구현
- Redux 적용(user/collections(상품 목록)/cart(장바구니))
- 상품 카트에 담기 구현
- 결제 모듈 연동(test)
- will be added...

## Installation and Usage

```
npm install

npm start
```

## Link

https://crwn-shmoon2917.herokuapp.com/
