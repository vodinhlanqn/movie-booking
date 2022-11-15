import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import LayoutAdmin from './templates/admins/LayoutAdmin';
import HomeLayout from './templates/users/HomeLayout';
import TrangChu from './pages/TrangChu/TrangChu';
import NotFound from './pages/NotFound';
import Login from './pages/DangNhap/Login';
import Register from './pages/DangKy/Register';


function App() {

  // let isLogin = localStorage.getItem("user");
  return (
    <div className="App">
      <HistoryRouter history={history} >
        <Routes>
          {/* user */}
          <Route path='/home' element={<HomeLayout />}>
            <Route path='/home' element={<TrangChu />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route index path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* admin */}
          <Route path='/admin' element={<LayoutAdmin />}>

          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
