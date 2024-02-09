
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './Routers/UserRouter'
import AdminRouter from './Routers/AdminRouter';
import ParentRouter from './Routers/ParentRouter'
import WardenRouter from './Routers/WardenRouter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/*' element={<UserRouter/>}/>
      <Route path='/admin/*' element={<AdminRouter/>}/>
      <Route path='/parent/*'  element={<ParentRouter/>}/>
      <Route path='/warden/*'  element={<WardenRouter/>}/>
      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
