import React from 'react';
import './styles/App.scss';
import Router from './routes/Router';
import { NewContextProvider } from './contexts/Context';

function App() {
  return (
    <NewContextProvider>
      <Router />
    </NewContextProvider>
  );
}

export default App;
