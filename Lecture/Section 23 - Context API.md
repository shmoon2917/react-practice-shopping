# Section 23 - Context API

## :raising_hand_man: TDIL

### Context.Consumer

```javascript
<CollectionsContext.Consumer>
  {(collections) => {
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }}
</CollectionsContext.Consumer>
```

### useContext()

```javascript
const collections = useContext(CollectionsContext);
const collection = collections[match.params.collectionId];
const { title, items } = collection;
return (
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);
```

### Provider

```javascript
const [hidden, setHidden] = useState(true);
const toggleHidden = () => setHidden(!hidden);

<CartContext.Provider value={{ hidden, toggleHidden }}>
  <CartIcon />
</CartContext.Provider>;
```

### Pros and Cons

#### Redux

##### pros

- 리덕스 에코시스템에는 많은 문제들을 해결한 좋은 솔루션들이 많다.
- 상태와 디스패처를 컴포넌트로 주입함으로서 컴포넌트와 디커플링이 되는데, 이를 통해 더 resuable한 컴포넌트 작성이 가능하다.

##### cons

- 리덕스 로직을 준비하기 위한 코드가 많이 필요하고, 그에 따라 볼륨도 다소 크다.

#### Context API

##### pros

- 리덕스의 개념에 비해 훨씬 덜 장황하고, 리액트 코어 API이므로 추가적인 라이브러리 사용이 필요하지 않다. 매우 가벼운 솔루션이다.

##### cons:

- 리덕스 시스템의 flexibility 를 잃어버린다 (ex. 리덕스 미들웨어[saga, thunk]를 통해 처리했던 비동기 액션 핸들링 등을 못한다.)
- 컴포넌트가 필요로 하는 상태들과 강하게 묶여있다 (reusability를 잃는다)
- 앱이 커짐에 따라 Provider를 계속해서 래핑해야 하는 문제가 생긴다.

#### Conclusion

애플리케이션이 커지면 리덕스 사용이 필요해질 것이다. 포트폴리오 프로젝트나 랜딩 페이지 정도의 재사용하는 경우가 많지 않고 볼륨이 적은 프로젝트인 경우, context API 를 쓰면 좋다.
