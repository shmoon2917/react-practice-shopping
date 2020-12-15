import React from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    // log it or send this information somewhere, perform some side effects with the error itself
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer
            imageUrl={
              'https://firebasestorage.googleapis.com/v0/b/corwn-shopping.appspot.com/o/Error.png?alt=media&token=969bf024-da48-4a75-b0dc-7569945e8f1c'
            }
          />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
