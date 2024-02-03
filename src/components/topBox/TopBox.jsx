import './TopBox.scss';
import PropTypes from 'prop-types';
import { topDealsUsersList } from '../../utils/constants/data';
function TopBox({ title }) {
  return (
    <div className="top-box">
      <h1 className="title">Top {title}</h1>
      <ul className="top-list">
        {topDealsUsersList.map((dealUser) => (
          <li key={dealUser.id}>
            <div className="item">
              <img src={dealUser.img} alt="user" />
              <div className="user-info">
                <p className="name">{dealUser.username}</p>
                <p className="email">{dealUser.email}</p>
              </div>
            </div>
            <span className="amount">
              ${Number(dealUser.amount).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
TopBox.propTypes = { title: PropTypes.string };
export default TopBox;
