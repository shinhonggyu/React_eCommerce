### heroku deploy: https://crwn-vshin.herokuapp.com/

#### React Basic, React Router, Sass(styled-components OR Postcss로 모듈화가능)

#### Firebase Auth(google, mail) , Cloude Firestore

#### Redux

#### Redux-Thunk (async handling, multiple action)

#### Redux-Saga

#### mapStateToProps 에서 Reselect 라이브러리 성능최적화

#### Array 대신 Object로 저장 (Hash Table data normalization)

#### Stripe Payment API

#### Styled-components

#### Database에 동적Data 저장후 componentDidMount()아닌 비동기 Redux이용후 재사용

#### HOC Patterns 활용

#### Observer Pattern , Promise Pattern, Container Pattern

---

#### **Core React**

**리액트란**  
특히 SPA을 위한 사용자 인터페이스를 구축하는 데 사용되는 오픈 소스 프런트 엔드 JavaScript 라이브러리이다..

**React의 주요 기능**

- RealDOM 대신 VirtualDOM을 사용합니다.
- 서버 측 렌더링을 지원합니다.
- 단방향 데이터 흐름 또는 데이터 바인딩을 따릅니다.
- reusable/composable한 UI components를 사용하여 view를 개발합니다.

**컴포넌트생성하기**

- 함수형: props object를 첫 번째 parameter로 받아들이고 React elements를 반환하는 pure JavaScript 함수입니다.

```js
const Greeting = ({ message }) => {
  return <h1>{`Hello, ${message}`}</h1>;
};
```

- 클래스형:

```js
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

**Pure Components?**  
React.PureComponent는 shouldComponentUpdate () 메서드를 처리한다는 점을 제외하면 React.Component와 동일합니다.  
props나 state가 변경되면 PureComponent는 props과 state 모두에 대해 shallow comparison를 수행합니다.  
반면에 Component는 shouldComponentUpdate가 호출 될 때마다 기본적으로 다시 렌더링됩니다.

**What is state in React?**  
Component의 state는 Component의 lifetime동안 변경 될 수있는 일부 정보를 보유하는 object입니다.  
항상 상태를 가능한 한 단순하게 만들고 상태 저장 Component의 수를 최소화하려고 노력해야합니다.  
State는 props와 비슷하지만 비공개이며 Component에 의해 완전히 제어됩니다. 즉, 소유하고 설정하는 Component 이외의 다른 Component에서 액세스 할 수 없습니다.

**What are props in React?**  
Props은 Component에 대한 inputs입니다.  
Component에 전달되는 set of values을 포함하는 single values 또는 objects입니다.  
부모 Component에서 자식 Component로 전달되는 데이터입니다.

Props의 주요 목적

- Pass custom data to your component.
- Trigger state changes.

**state와 props의 차이**  
state와 props는 모두 일반 JavaScript 객체입니다.  
둘 다 렌더 출력에 영향을 미치는 정보를 보유하고 있지만 component와 관련하여 기능이 다릅니다.  
Prop은 함수 parameters와 유사하게 component에 전달되는 반면 상태는 함수 내에서 선언 된 변수와 유사하게 component 내에서 관리됩니다.

**상태를 직접 업데이트해서는 안되는 이유**  
setState() 메서드를 사용하십시오.  
component의 state object에 대한 업데이트를 **예약(비동기)** 합니다. 상태가 변경되면 component가 다시 렌더링하여 응답합니다.

**setState()의 인수로 콜백 함수**  
setState ()는 비동기식이므로 콜백 함수는 setState가 완료되고 component가 렌더링 될 때 호출됩니다.  
`setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))`

**HTML 과 React 이벤트 처리 차이**  
html  
`<button onclick='activateLasers()'>`  
react  
`<button onClick={activateLasers}>`  
HTML에서는 ()를 추가하여 함수를 호출해야하지만
react는 함수 이름에()를 추가하면 안됩니다.

**JSX 콜백에서 메소드 또는 이벤트 핸들러를 바인딩하는 방법**

- Binding in Constructor  
  JavaScript 클래스에서 메서드는 기본적으로 바인딩되지 않습니다.  
  클래스 메소드로 정의 된 React 이벤트 핸들러에도 동일한 사항이 적용됩니다.  
  일반적으로 생성자에서 바인딩합니다.

```js
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ...
  }
}
```

- Public class fields syntax

```js
handleClick = () => {
  console.log('this is:', this);
};

<button onClick={this.handleClick}>{'Click me'}</button>;
```

- Arrow functions in callbacks  
  콜백에서 직접 화살표 함수를 사용할 수 있습니다.

```js
<button onClick={(event) => this.handleClick(event)}>{'Click me'}</button>
```

**이벤트 핸들러 또는 콜백에 parameter를 전달하는 방법**  
`<button onClick={() => this.handleClick(id)} />`  
`<button onClick={this.handleClick.bind(this, id)} />`

```js
<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log('Hello, your ticket number is', id);
};
```

**synthetic events**  
SyntheticEvent는 브라우저의 기본 이벤트를 둘러싼 브라우저 간 래퍼입니다.  
API는 stopPropagation () 및 preventDefault ()를 포함한 브라우저의 기본 이벤트와 동일하지만 이벤트가 모든 브라우저에서 동일하게 작동한다는 점이 다릅니다.

**inline conditional expressions**  
조건부로 표현식을 렌더링하기 위해 if 문 또는 삼항 표현식을 사용할 수 있습니다.

```js
{
  message.length > 0 && !isLogin ? (
    <h2>You have {message.length} unread message;</h2>
  ) : (
    <h2>You don't have unread messages.</h2>
  );
}
```

**"Key"prop은 무엇이며 배열에서 사용하면 어떤 이점이 있습니까?**  
key는 배열요소를 만들 때 포함해야하는 특수 문자열 속성입니다.  
Key prop은 React가 어떤 항목이 변경, 추가 또는 제거되었는지 식별하는 데 도움이됩니다.  
대부분 데이터의 ID를 키로 사용합니다.

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

렌더링 된 items에 대한 안정적인 ID가없는 경우 마지막 수단으로 항목 인덱스를 키로 사용할 수 있습니다.

- items 순서가 변경 될 수있는 경우 키에 인덱스를 사용하지 않는 것이 좋습니다.  
  이는 성능에 부정적인 영향을 미치고 component state에 문제를 일으킬 수 있습니다.
- list item을 별도의 component로 추출하는 경우 li 태그 대신 list component에 키를 적용하십시오.

**refs는 언제 사용?**  
ref는 요소에 대한 참조를 반환하는 데 사용됩니다.  
대부분의 경우 피해야하지만 DOM 요소 또는 component의 인스턴스에 직접 액세스해야하는 경우 유용 할 수 있습니다.

**Virtual DOM이 작동하는 방식**  
Virtual DOM은 세 가지 간단한 단계로 작동합니다.

1. 기본 데이터가 변경 될 때마다 전체 UI가 Virtual DOM 표현으로 다시 렌더링됩니다.

2. 그런 다음 이전 DOM 표현과 새 DOM 표현의 차이가 계산됩니다.

3. 계산이 완료되면 실제 DOM은 실제로 변경된 것만 업데이트됩니다.

4/11/26~
