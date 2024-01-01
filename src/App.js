
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import DashBoard from './Components/DashBoard';
import CreateAd from './Components/CreateAd';
import MediaAd from './Components/MediaAd';
import TextAd from './Components/TextAd';


function App() {
  return (
    <div className="App">
       
      <Router>
      <header >
        <h2>APP LOGO</h2>
        <div className='header-right'>
          <ul className='header-list'>
            <li >
            <Link to="/">DASHBOARD</Link>
            </li>
            <li > 
            <Link to="/createAd">CREATE ADS </Link>
            </li>
            </ul>
        </div>
      </header>
         <Routes>
          <Route path='/' element={<DashBoard></DashBoard>}></Route>
          <Route path='/createAd' element={<CreateAd></CreateAd>}></Route>
          <Route path='/form2' element={<MediaAd></MediaAd>}></Route>
          <Route path='/form1' element={<TextAd></TextAd>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
