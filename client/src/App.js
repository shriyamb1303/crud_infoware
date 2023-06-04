import './App.css';
import Navbarstick from './components/Navbar';
import User from './components/User';
import { Route, Routes } from "react-router-dom"
import Form from './components/Form';
import Userprofile from './components/Userprofile';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Navbarstick />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/newuser" element={<Form />} />
        <Route path="/user/:id" element={<Userprofile />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
