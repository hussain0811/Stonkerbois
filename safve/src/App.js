import './App.css';
import Main from './components/maincomponent'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;

