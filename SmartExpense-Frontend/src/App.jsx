
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import WalletPage from './pages/WalletPage.jsx';
import BudgetPage from './pages/BudgetPage.jsx';
import TransactionPage from './pages/TransactionPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/wallets" element={<WalletPage />} />
        <Route path="/budgets" element={<BudgetPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
}
export default App;
