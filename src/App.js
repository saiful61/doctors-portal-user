
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home/Home';
import Contact from './Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Shared/Login/Login';
import SignUp from './Shared/SignUp/SignUp';
import RequireAuth from './Shared/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Shared/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}
        />

        <Route path="dashboard" element={<RequireAuth> <Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        </Route>
        {/* <Route path="about" element={<About />} />s */}
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
