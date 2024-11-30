import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
    
  return (
    <Provider store={store}>
      <div >
        <Router>
          <Navbar/>
              <AnimatePresence 
              initial={false} 
              mode={"wait"}
              >
              <Routes location={location} key={location.pathname}>
                  <Route
                    exact
                    path='/'
                    element={<Home />}
                  />
                  <Route
                    exact
                    path='/:id'
                    element={<Detail/>}
                  />
                  {/* 
                  <Route
                    exact
                    path='/:photoId/:temaId'
                    element={Tema}
                  /> */}
                </Routes>
              </AnimatePresence>
        </Router>
      </div>
    </Provider>
  )
}

export default App
