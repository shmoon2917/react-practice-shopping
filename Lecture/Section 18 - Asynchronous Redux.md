# Section 18 - Asynchronous Redux

## :raising_hand_man: TDIL

### Moving logic from didmount to redux

The only reason we want to do such a thing is because

there's chance that we need to do this call where we're fetching some kind of data from our backend and then converting it and storing it our reducer

위 로직을 다시 사용해야할 컴포넌트가 생길 경우, 재작성을 하는 불필요한 일이 발생

그렇다고 app.js로 옮기는 것도 relly tedious - > bad performance 다 모이는 것
