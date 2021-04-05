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

04/06 16~20
