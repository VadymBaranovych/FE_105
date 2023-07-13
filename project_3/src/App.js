import './App.scss';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
import NotFoundPage from './pages/NotFoundPage';
import Layout from "./pages/Layout";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
              index 
              element={<Home />}
          />
          <Route
              path='/catalog/:category/search/:keyword'
              element={<Catalog />}
          />
          <Route
              path='/catalog/:category/:id'
              element={<Detail />}
          />
          <Route
              path='/catalog/:category'
              element={<Catalog />}
          />
          <Route 
              path='*'
              element={<NotFoundPage />} 
          />
        </Route>
      </Routes>
  );
}

export default App;
