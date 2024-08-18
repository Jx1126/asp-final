import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Awareness from './components/awareness/Awareness';
import Finance from './components/finance/Finance';
import Jobs from './components/jobs/Jobs';
import Articles from './components/articles/Articles';
import ProtectedRoutes from '../src/routes/ProtectedRoutes';
import Toast from './components/common/Toast';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      
      <Header />
      <Toast type='success' message='Success Message' />

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

    </Router>
    
  )
}

export default App;