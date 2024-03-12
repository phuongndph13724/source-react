import "./App.css";
import Home from "./pages/clients/homes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/admins/dashboards/DashboardAdmin";
import ProductManagement from "./pages/admins/product-managements/ProductManagement";
import UserManagement from "./pages/admins/user-managements/UserManagement";
import ProductList from "./pages/clients/products/ProductList";
import DetailProduct from "./pages/clients/products/DetailProduct";
import Notfound from "./components/notfounds/Notfound";
import FormProduct from "./pages/admins/product-managements/FormProduct";
import Information from "./pages/clients/infomations/Information";
import Layout from './components/layouts/Layout';
import LayoutAdmin from './components/layouts/LayoutAdmin';
import Login from "./pages/auths/Login";
import Register from "./pages/auths/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=':id' element={<DetailProduct />} />
            </Route>

            <Route path="information" element={<Information />} />
            <Route path="*" element={<Notfound />} />

          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<DashboardAdmin />} />

            <Route path="product-managements">
              <Route index element={<ProductManagement />} />
              <Route path="add" element={<FormProduct />} />
            </Route>

            <Route path="user-managements" element={<UserManagement />} />
            <Route path="*" element={<Notfound />} />
          </Route>
          <Route path='/auth/'>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
