import './styles/main.scss';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import UsersPage from './pages/users/UsersPage';
import NotFoundPage from './pages/notfound/NotFoundPage';
import MainLayout from './layouts/main/MainLayout';
import ErrorPage from './pages/error/ErrorPage';
import ProductPage from './pages/product/ProductPage';
import UserPage from './pages/user/UserPage';
const handlePathParams = async ({ params }) => {
  if (isNaN(+params.id)) {
    throw new Response('Bad Request', { status: 400 });
  }
  return null;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route
            path="products/:id"
            element={<ProductPage />}
            loader={handlePathParams}
          />
          <Route
            path="users/:id"
            element={<UserPage />}
            loader={handlePathParams}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
