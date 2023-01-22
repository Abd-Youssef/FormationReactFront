import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  {Routes}  from '../src/Routes/Routes'
import './App.css';
import STORE ,{PERSISTOR} from "./Redux/Store"
import './Assets/Components.css'

function App() {
  return (
      <PersistGate persistor={PERSISTOR}>
        <Provider store={STORE}>
        <Routes/>
        </Provider>
      </PersistGate>
  );
}

export default App;
