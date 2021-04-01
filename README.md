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

04/01

1. 리액트❓  
   특히 SPA을 위한 사용자 인터페이스를 구축하는 데 사용되는 오픈 소스 프런트 엔드 JavaScript 라이브러리이다..

2. React의 주요 기능

- RealDOM 대신 VirtualDOM을 사용합니다.
- 서버 측 렌더링을 지원합니다.
- 단방향 데이터 흐름 또는 데이터 바인딩을 따릅니다.
- reusable/composable한 UI components를 사용하여보기를 개발합니다.

5. 컴포넌트생성하기

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

04/02  
 6. 클래스형 언제사용하나?
