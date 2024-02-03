import PropTypes from 'prop-types';
import './BarChartBox.scss';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
function BarChartBox(props) {
  return (
    <div className="bar-chart">
      <p className="title">{props.title}</p>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
          <Tooltip
            labelStyle={{ display: 'none' }}
            contentStyle={{
              background: '#2a3447',
              borderRadius: '5px',
              border: 'none',
            }}
            cursor={{ fill: '#384256' }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
BarChartBox.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  dataKey: PropTypes.string,
  chartData: PropTypes.array,
};

export default BarChartBox;
