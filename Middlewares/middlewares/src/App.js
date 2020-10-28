import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import Counter from './Counter';
import { Character } from './Character';

function App() {
  return (
   <Provider store={store}>
     <Counter />
     <Character />
   </Provider>
  );
}

export default App;
