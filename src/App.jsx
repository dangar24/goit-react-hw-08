import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
// import HomePage from './pages/HomePage/HomePage'
// import ContactsPage from "./pages/ContactsPage/ContactsPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {


  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  

  return isRefreshing ? <Loader /> :
  <div>
    
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
          </Routes>
        </Suspense>
    </Layout>
  </div>
}

export default App
