import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <p> Testing </p>
    </div>
  );
}

export default App;
