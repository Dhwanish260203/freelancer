import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// website
import Header1 from './website/Component/Header1';
import Footer from './website/Component/Footer';
import Index from './website/Pages/Index';
import About from './website/Pages/About';
import Service from './website/Pages/Service';
import Contact from './website/Pages/Contact';
import Header2 from './website/Component/Header2';
import Signup from './website/Pages/Signup';
import Login from './website/Pages/Login';
import Profile from './website/Pages/Profile';
import Editprofile from './website/Pages/Editprofile';



//admin
import Admin_login from './admin/pages/Admin_login';
import Admin_dashboard from './admin/pages/Admin_dashboard';
import Adminheader from './admin/component/Adminheader';
import Adminfooter from './admin/component/Adminfooter';
import Add_categories from './admin/pages/Add_categories';
import Manage_categories from './admin/pages/Manage_categories';
import Add_services from './admin/pages/Add_services';
import Manage_services from './admin/pages/Manage_services';
import Add_employee from './admin/pages/Add_employee';
import Manage_employee from './admin/pages/Manage_employee';
import Manage_user from './admin/pages/Manage_user';
import View_service from './website/Pages/View_service';



function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        
        {/* Website */}
        <Route path="/" element={<> <Header1/><Index/><Footer/></>}></Route>
        <Route path="/about" element={<> <Header2/><About/><Footer/></>}></Route>
        <Route path="/service" element={<> <Header2/><Service/><Footer/></>}></Route>
        <Route path="/view_service/:id" element={<> <Header2/><View_service/><Footer/></>}></Route>
        <Route path="/contact" element={<> <Header2/><Contact/><Footer/></>}></Route>
        <Route path="/signup" element={<> <Header2/><Signup/><Footer/></>}></Route>
        <Route path="/login" element={<> <Header2/><Login/><Footer/></>}></Route>
        <Route path="/profile" element={<> <Header2/><Profile/><Footer/></>}></Route>
        <Route path="/editprofile/:id" element={<> <Header2/><Editprofile/><Footer/></>}></Route>

      
        {/* admin */}
      
        <Route path="/admin" element={<> <Admin_login/> </>}></Route>
        <Route path="/dashboard" element={<> <Adminheader/> <Admin_dashboard/> <Adminfooter/> </>}></Route>
        <Route path="/add_categories" element={<> <Adminheader/> <Add_categories/> <Adminfooter/> </>}></Route>
        <Route path="/manage_categories" element={<> <Adminheader/> <Manage_categories/> <Adminfooter/> </>}></Route>
        <Route path="/add_services" element={<> <Adminheader/> <Add_services/> <Adminfooter/> </>}></Route>
        <Route path="/manage_services" element={<> <Adminheader/> <Manage_services/> <Adminfooter/> </>}></Route>

        <Route path="/add_employee" element={<> <Adminheader/> <Add_employee/> <Adminfooter/> </>}></Route>
        <Route path="/manage_employee" element={<> <Adminheader/> <Manage_employee/> <Adminfooter/> </>}></Route>

        <Route path="/manage_user" element={<> <Adminheader/> <Manage_user/> <Adminfooter/> </>}></Route>
      
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
