import React, {useState} from 'react';
import './App.css';
import PropBasedDemo from './prop/PropBasedDemo'
import ObservableDemo from './observable/ObservableDemo'

function App() {
  const [ locations ] = useState([
      { id: 1, city: "Halifax", province: { id: 1, code: "NS" } },
      { id: 2, city: "Bridgewater", province: { id: 1, code: "NS" } },
      { id: 3, city: "Kingston", province: { id: 2, code: "ON" } },
      { id: 4, city: "Toronto", province: { id: 2, code: "ON" } },
  ]);

  return (
    <div className="App">
      <PropBasedDemo locations={locations} />
      <hr />
      <ObservableDemo locations={locations} />
    </div>
  );
}

export default App;
