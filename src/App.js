import './App.css';
import HomePage from './components/HomePage';
import WeeklyPage from './components/WeeklyPage';
import Create from  './components/Create';
import Edit from  './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Planner2023 from './components/Planner2023';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <HomePage/>} />
          <Route exact path="/create" element={<Create/>} />
          <Route exact path="/edit/:id" element={<Edit/>} />
          <Route exact path="/weekly" element={ <WeeklyPage/>} />
          <Route exact path="/planner2023" element={ <Planner2023/> } />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
