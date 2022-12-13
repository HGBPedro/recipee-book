import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.less';
import router from './Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
