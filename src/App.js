// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import './App.css';
import Home from "./Home";
import NFT from './Nft';





function App() {

  return (
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path='/NFT' element={<NFT />} />


      </Routes>
   </Router>
  
  );
}

export default App;
