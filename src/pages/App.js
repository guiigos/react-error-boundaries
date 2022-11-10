import ErrorBoundary from '../error/ErrorBoundary';
import Trigger from './components/Trigger';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Trigger />
        <Trigger />
      </ErrorBoundary>

      <ErrorBoundary>
        <Trigger />
      </ErrorBoundary>
      <ErrorBoundary>
        <Trigger />
      </ErrorBoundary>

      <Trigger />
    </>
  );
}

export default App;
