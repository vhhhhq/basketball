import React from 'react';
import './App.css';
import Basketball from './containers/Basketball/Basketball';
import Bestsellers from './containers/Bestsellers/Bestsellers';
import BlackBlock from './containers/BlackBlock/BlackBlock';
import BlockContent from './containers/BlockContent/BlockContent';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import MainBlock from './containers/MainBlock/MainBlock';
import Piece from './containers/Piece/Piece';


function App() {
  return (
    <body>
      <Header/>
      <MainBlock/>
      <BlackBlock/>
      <Piece/>
      <BlockContent/>
      <Basketball/>
      <Bestsellers/>
      <Footer/>
    </body>
  );
}

export default App;
