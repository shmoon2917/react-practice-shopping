# Section 16 - Advanced Redux + Firebase

## :raising_hand_man: TDIL

### 백엔드로부터 데이터를 fecthing 해올 컴포넌트를 선택하는 방법

데이터를 사용하는 자식 컴포넌트들의 가장 가까운 공통 조상 컴포넌트를 선택하면 된다. DRY(Don't Repeat Yourself) 매너를 지키는 좋은 방식이다.

하나의 예시로, user 데이터를 가장 최상위 컴포넌트인 App 컴포넌트에서 페칭해오는 이유도 user 데이터는 어디에서나 쓰일 수 있기 때문이다.

### 개발 과정

#### firestore로 데이터 옮기기 및 유틸 함수 및 리덕스 함수 추가 작성

shop.data.js 에서 가지고 있던 데이터를 migration function(`addCollectionAndDocuments()`)을 이용하여 `firestore` 로 옮겼다. 이 과정에서 필수 데이터인 `title`과 `items` 프로퍼티들만 넣고 나머지는 제외하였다.

백엔드에서의 `collections` 콜렉션을 `store`로 가져와 어플리케이션에서 사용하기 위해서, `action` 생성 함수(`updateCollections`)와 리듀서를 추가로 작성하였고, 기존 `INITIAL_STATE`는 `null`로 수정하고 shop.data.js 파일은 삭제하였다.

이제 firestore에서 우리의 앱으로 데이터를 가져올 때, 페칭해오는 컴포넌트를 `collectionPage`와 `collectionsOverview`의 공통 조상인 `shopPage`로 설정하였다. shopComponent 를 클래스 컴포넌트로 변경한 후, `componentDidMount()` 메소드에서 `collections` 콜렉션을 페칭해왔다.

이를 다시 우리의 어플리케이션에서 사용하기 위한 형태인 해쉬 테이블 타입 변경과 프로퍼티 추가를 위해서, `convertCollectionsSnapshotToMap()` 함수를 작성하여 `routeName`과 `id` 프로퍼티를 추가하였고, 해쉬 테이블 형태로 데이터를 변환하여 `dispatch(updateCollections)` 시켰다.
