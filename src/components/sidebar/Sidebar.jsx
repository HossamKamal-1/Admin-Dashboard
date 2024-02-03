import {  NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { menuList } from '../../utils/constants/data';
function Sidebar() {
  return (
    <div className="sidebar">
      {menuList.map((menuItem) => (
        <div className="sidebar-item" key={menuItem.id}>
          <p className="sidebar-item-title">{menuItem.title}</p>
          <div className="sidebar-item-links">
            {menuItem.listItems.map((listItem) => (
              <NavLink end className="link" key={listItem.id} to={listItem.url}>
                <img src={listItem.icon} alt="icon" />
                <span>{listItem.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;
