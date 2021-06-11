import React from 'react';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
function App() {
  return (
   <React.Fragment>
     <header>
     <Navbar/>
      <Home/>
     </header>
     <Main/>
     <Footer/>
   </React.Fragment>
     
  );
}

export default App;
