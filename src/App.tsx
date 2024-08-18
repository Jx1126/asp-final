import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Awareness from './components/awareness/Awareness';
import Finance from './components/finance/Finance';
import Jobs from './components/jobs/Jobs';
import Articles from './components/articles/Articles';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Toast from './components/common/Toast';
import { ToastProvider, useToast } from  './utils/ToastContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ToastProvider>
      <Router>
        <AppContent />
      </Router>
    </ToastProvider>
  )
}

function AppContent() {
  const { toastProps } = useToast();
  console.log('Current toastProps', toastProps);

  return (
    <>
      <Header />

      {toastProps && <Toast type={toastProps.type} message={toastProps.message} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scam-awareness" element={<Awareness />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/finance-manager" element={<Finance />} />
          <Route path="/wealth" element={<Jobs />} />
          <Route path="/articles" element={<Articles />} />
        </Route>

      </Routes>

      <Footer />

    </>
  )
}

export default App;