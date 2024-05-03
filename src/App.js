import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import Mantrapage from './pages/mantrapage/Mantrapage';
import TopUsersPage from './pages/topusers/Topusers';
import MyPerformance from './pages/MyPerformance/MyPerformance';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/topusers" element={<TopUsersPage/>}></Route>
      <Route path="/mantrapage" element={<Mantrapage/>}></Route>
      <Route path="/myperformance" element={<MyPerformance/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
