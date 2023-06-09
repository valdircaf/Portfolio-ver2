import React from 'react';
import './styles/App.scss';
import Router from './routes/Router';
import { NewContextProvider } from './contexts/Context';
import ArrowBack from './Pages/Components/ArrowBack/ArrowBack';

function App() {
  return (
    <NewContextProvider>
      <ArrowBack />
      <Router />
    </NewContextProvider>
  );
}

export default App;
