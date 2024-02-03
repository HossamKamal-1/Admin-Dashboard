import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from '../../components';
import './MainLayout.scss';

function MainLayout() {
  return (
    <div className="main">
      <Header />
      <div className="main-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;
