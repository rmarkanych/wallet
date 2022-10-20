import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SelectCategory } from '../components/SelectCategory/SelectCategory';
import { CurrencyExchange } from './CurrencyExchange';
// import DiagramTab from './DiagramTab/DiagramTab';
import HomeTab from './HomeTab/HomeTab';
import {getCategories} from "../redux/transactionCategories/operationsTransactions.js"


const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);


;

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SelectCategory />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/transactions" element={<DashboardPage />}>
        <Route path="home" element={<HomeTab />} />
        {/* <Route path='diagram' element={<DiagramTab/>}/> */}
        <Route path="diagram" element={<StatisticsPage />} />
        <Route path="currency" element={<CurrencyExchange />} />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
