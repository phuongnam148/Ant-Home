import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import { publicRoutes } from './routes';

const App = () => (
	<BrowserRouter>
		<Routes>
			{publicRoutes.map((route, index) => {
				let Layout = DefaultLayout;
				if (route.layout) {
					Layout = route.layout;
				} else if (route.layout === null) {
					Layout = Fragment;
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
	</BrowserRouter>
);

export default App;
