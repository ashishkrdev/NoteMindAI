import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

function AppRoutes() {
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
