import React from 'react';
import './App.css';
// import Article from './Components/articles/Article';
import Brands from './Components/brands/Brands';
import Cta from './Components/cta/Cta';
// import Features from './Components/features/Features';
import Navbar from './Components/Navbar/Navbar';
import { Feature,Footer,Blogs,Header,Possibility,Whatgpt3 } from './Containers';
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brands/>
      <Whatgpt3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
