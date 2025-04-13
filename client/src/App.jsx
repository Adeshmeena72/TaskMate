// import { TaskContextProvider } from './contexts/TaskContextProvider';
import TaskContextProvider from './contexts/TaskContextProvider';
import Home from './pages/Home';

function App() {
  return (
    <TaskContextProvider>
      <div className="min-h-screen bg-gray-100">
        <Home />
      </div>
    </TaskContextProvider>
  );
}

export default App;