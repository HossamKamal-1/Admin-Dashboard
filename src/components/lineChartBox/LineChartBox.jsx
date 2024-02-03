import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import './LineChartBox.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function ChartBox(props) {
  return (
    <div className="chart-box">
      <div className="info">
        <div className="title">
          <img src="" alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: -10, y: 67 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span
            className="percentage"
            style={{ color: props.percentage <= 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}%
          </span>
          <div className="duration">{props.duration}</div>
        </div>
      </div>
    </div>
  );
}
ChartBox.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  dataKey: PropTypes.string,
  duration: PropTypes.string,
  number: PropTypes.string || PropTypes.number,
  percentage: PropTypes.number,
  chartData: PropTypes.array,
};
export default ChartBox;
