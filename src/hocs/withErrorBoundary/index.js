import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this);

  render() {
    if (this.state.errorInfo) {
      return handleError(this);
    }
    return this.props.children;
  }
}

export const withErrorBoundary = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch = (error, errorInfo) => catchFunc(error, errorInfo, this);

    render() {
      if (this.state.errorInfo) {
        return handleError(this);
      }
      return <WrappedComponent {...this.props} />;
    }
  };

const catchFunc = (error, errorInfo, ctx) => {
  ctx.setState({
    error: error,
    errorInfo: errorInfo,
  });
};

const handleError = ctx => (
  <div style={ctx.props.style || styles.error}>
    <h2>Something went wrong.</h2>
    <details style={{ whiteSpace: 'pre-wrap' }}>
      {ctx.state.error && ctx.state.error.toString()}
      <br />
      {ctx.state.errorInfo.componentStack}
    </details>
  </div>
);

const styles = {
  error: {
    backgroundColor: '#f98e7e',
    borderTop: '1px solid #777',
    borderBottom: '1px solid #777',
    padding: '12px',
  },
};
