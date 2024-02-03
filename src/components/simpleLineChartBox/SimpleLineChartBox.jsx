import './SimpleLineChartBox.scss';
import { array, arrayOf, object, shape } from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
function SimpleLineChartBox({ data: { dataKeys, data } }) {
  return (
    <div className="simple-line-chart">
      <ResponsiveContainer width="99%" height={500}>
        <LineChart
          data={data}
          margin={{
            right: 30,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map(({ name, color }) => (
            <Line key={name} type="monotone" dataKey={name} stroke={color} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
SimpleLineChartBox.propTypes = {
  data: shape({
    dataKeys: array.isRequired,
    data: arrayOf(object).isRequired,
  }).isRequired,
};
export default SimpleLineChartBox;
