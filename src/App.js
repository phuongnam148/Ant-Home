
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar,Home,GioiThieu,Products,Footer ,Header } from './components';


const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/gioi-thieu' exact element={<GioiThieu />} />
        <Route path='/products' exact element={<Products />} />

      </Routes>
      <Footer />

    </div>
  </BrowserRouter>

)

export default App;
