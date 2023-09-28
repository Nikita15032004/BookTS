import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.tsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import SingleBookPage from './components/SingleBookPage.tsx';
import SearchingPage from './components/SearchingPage.tsx';
import NotFoundPage from './components/AdditionalPages/NotFoundPage.tsx';
import ErrorBoundary from './components/AdditionalPages/ErrorBoundary.tsx';


const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<ErrorBoundary><SearchingPage /></ErrorBoundary>}>
				<Route index element={<ErrorBoundary><App /></ErrorBoundary>}></Route>
				<Route path="books/:bookId" element={<ErrorBoundary><SingleBookPage /></ErrorBoundary>} />
			</Route>
			<Route path='*' element={<ErrorBoundary><NotFoundPage /></ErrorBoundary>}></Route>
		</>
	)
);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>,
)
