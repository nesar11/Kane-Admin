import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

import Home from "./pages/home/Home";

import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList"

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
       <div className="container"> 
        <Sidebar />
        <Routes>
     
        <Route exact path="/" element={<Home />} />
        <Route path="users" element={<UserList />} />
        <Route path="user/:userId" element={<User />} />
        <Route path="newUser" element={<NewUser />} />
        <Route path="products" element={<ProductList />} />
      
        </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
