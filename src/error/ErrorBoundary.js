import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      errorInfo: undefined,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>An error has occured</h2>
          <strong>{this.state.error.message}</strong>
          <small>{this.state.errorInfo.componentStack}</small>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
