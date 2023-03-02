import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header, Footer, Navbar, Home, GioiThieu, Products } from './components';

const App = () => (

  <BrowserRouter>
    <div >
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/gioi-thieu" exact element={<GioiThieu />} />
        <Route path="/Products" exact element={<Products />} />
      </Routes>
      <Footer />

    </div>
  </BrowserRouter>

);

export default App;
