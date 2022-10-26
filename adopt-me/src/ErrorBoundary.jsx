import { Component } from 'react';
import { Link } from 'react-router-dom';

// EB is Class Component only - these fist 2 methods are the reason
// EB catches errors so the app does not crash, gives you better msgs
// create a prop that is "errorComponent" that is reusable to track
// or wrap whole <App /> component in EB if you don't need granularity
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    // like calling setState
    // static is an es6 thing like saying ErrorBoundary.getDerivedStateFromError()
    // static is method you can only call on the class itself, not its instances
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info);
    // send this to track.js or Sentry, your error tracking software
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here to go back to the homepage.</Link>
        </h2>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;