
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import { publicRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>

    {/* <Route path='/' exact element={<Home />} /> */}
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }

          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>

  </BrowserRouter>
)

export default App;
