import LocalStateComponent from './components/LocalStateComponent';
import ReduxStateAdvanceComponent from './components/ReduxStateAdvanceComponent';
import ReduxStateComponent from './components/ReduxStateComponent';

function App() {
  return (
    <div className="App">
      <LocalStateComponent />
      <ReduxStateComponent />
      <ReduxStateAdvanceComponent />
    </div>
  );
}

export default App;
