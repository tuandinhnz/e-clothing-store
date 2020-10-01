import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './ErrorBoundary.styles';

class ErrorBoundary extends React.Component {
  state = { hasErrored: false };

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }
  //This life cycle method is unique to let React know this is a Error Boundary
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>A Dog Ate this Page</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
