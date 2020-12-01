# Section 7 - Firebase + User Authentication

## :raising_hand_man: TDIL

### git commit --amend -m 'message'

commit 메세지를 수정할 수 있는 명령어

### box-sizing: border-box;

[box-sizing - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)

박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성

- content-box : 콘텐트 영역을 기준으로 크기를 정합니다.
- **border-box** : 테두리를 기준으로 크기를 정합니다.
- initial : 기본값으로 설정합니다.
- inherit : 부모 요소의 속성값을 상속받습니다.

### firestore 데이터에 접근하는 법

`collection` 과 `doc` 메소드

```javascript
firestore.collection('users').doc('k4w...').collection('cartItems').doc('b64...')
firestore.doc('/users/k4w.../cartItems/b64...')
firestore.collection('/users/k4w.../cartItems)
```

### QueryReference and QuerySnapshot

`query` 란 파이어스토어가 우리에게 데이터베이스로부터 무언가를 주도록 하는 요청이다.

Firestore는 query 에 대한 응답으로 두 가지 타입의 오브젝트를 보내는데, 바로 `query reference` 와 `query snapshot`이다.

queryRefrence 는 우리가 쿼리로 요청한 데이터베이스의 **현재** 위치를 나타내는 객체이다.

다음의 방식으로 요청했을 때 얻을 수 있다.

```javascript
firestore.doc("/users/:userId");
firestore.collections("/users");
```

이는 collection이나 document의 실제 데이터를 가지진 않는다. 대신 그에 대한 details 을 보여주는 properties(ex. id, path, parent 등)를 가지거나, 우리가 찾는 데이터를 제공하는 snapshot 객체에 접근하는 메소드를 제공한다.

**DocumentReference vs CollectionReference**

CRUD 메소드를 실행하기 위해 `documentRef` 객체를 사용한다. documentRef 메소드로는 **.set(), .get(), .update(), .delete()** 가 있다.

또 우리는 collection에 document를 추가하기 위해서 **.add()** 메소드를 이용하여 `collectionRef` 객체를 사용한다. (ie. collectionRef.add({value: prop}))

**.get()** 메소드를 사용하여 referenceObject 로부터 snapshotObject 를 받게된다. (ie. documentRef.get() or collectionRef.get())

documentRef는 `documentSnapshot` 객체를 리턴하고, collectionRef는 `querySnapshot` 객체를 리턴한다.

**DocumentSnapshot**

우리는 documentReference로부터 documentSnapshot 객체를 얻을 수 있다.

documentSnapshot 객체는 boolean값을 리턴하는 **.exists** 프로퍼티를 이용하여 해당 쿼리에 대해 도큐먼트가 존재하는지를 확인할 수 있게끔 한다.

또한 **.data()** 메소드를 호출하면 객체에 대한 실제 프로터리르 얻을 수 있는데, JSON 객체 형태로 제공된다.
