import { array, arrayOf, number, object, shape, string } from 'prop-types';
import SimpleLineChartBox from '../simpleLineChartBox/SimpleLineChartBox';
import './Single.scss';
function Single({
  chartData,
  id,
  title,
  img = '/noavatar.png',
  info,
  activities,
}) {
  function handleUpdate(id) {
    console.log('update id ', id);
  }
  return (
    <div className="single-wrapper">
      <div className="info-wrapper">
        <div className="info">
          <div className="info-top">
            <img src={img} alt="item" />
            <h1 className="name">{title}</h1>
            <button className="update-btn" onClick={() => handleUpdate(id)}>
              Update
            </button>
          </div>
          <div className="info-details">
            {Object.entries(info).map(([title, value]) => (
              <div className="info-details-item" key={title}>
                <span className="title">{title}:</span>
                <span className="value">
                  {title === 'verified' && value
                    ? '✓ Verified'
                    : title === 'verified' && !value
                    ? '✘ Not Verified'
                    : value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr className="separator" />
        <div className="chart-wrapper">
          <SimpleLineChartBox data={chartData} />
        </div>
      </div>
      <div className="activities-wrapper">
        <h2 className="title">Latest Activities</h2>
        <ul className="activity-list">
          {activities.map(({ text, time }, index) => (
            <li className="activity-list-item" key={index}>
              <p className="activity-list-item-desc">{text}</p>
              <span className="activity-list-item-time">{time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Single.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  img: string,
  info: object.isRequired,
  chartData: shape({
    dataKeys: array.isRequired,
    data: arrayOf(object.isRequired).isRequired,
  }).isRequired,
  activities: arrayOf(
    shape({ text: string.isRequired, time: string.isRequired })
  ),
};
export default Single;
