import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// takes some component and return new functional component.
// 우리가 감싸고싶은 WrappedComponent
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
    // This way we pass through the props to the component we wrap
  );
};

// const WithSpinner = WrappedComponent => {
//    const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     )
//   }
//   return Spinner;
// }

export default WithSpinner;
