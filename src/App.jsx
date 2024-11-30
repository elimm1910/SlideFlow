import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

// Style
import './App.css'

// Store
import store from './store';

// Components
import Navbar from './components/Navbar/Navbar.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx';

function AppRouters() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router basename="/SlideFlow/">
        <Navbar />
        <AppRouters />
      </Router>
    </Provider>
  );
}

export default App
