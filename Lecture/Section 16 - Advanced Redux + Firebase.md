# Section 16 - Advanced Redux + Firebase

## :raising_hand_man: TDIL

### 데이터 페칭해오는 컴포넌트를 어떻게 선택하는가

자식 컴포넌트의 가까운 공통 조상 컴포넌트를 선택하면 된다. DRY(Don't repeat yourself) 매너를 지키는 좋은 방식

하나의 예시로 user 데이터를 가장 최상위 컴포넌트인 app컴포넌트에서 페칭해오는 이유도 user데이터는 어디에서나 쓰일 수 있기 때문
