import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './StackedAreaChartBox.scss';
const data = [
  {
    name: 'Sun',
    books: 4545,
    clothes: 478,
    electronics: 1214,
  },
  {
    name: 'Mon',
    books: 3000,
    clothes: 1450,
    electronics: 1224,
  },
  {
    name: 'Tue',
    books: 4784,
    clothes: 200,
    electronics: 2110,
  },
  {
    name: 'Wed',
    books: 5000,
    clothes: 300,
    electronics: 2148,
  },
  {
    name: 'Thu',
    books: 100,
    clothes: 1200,
    electronics: 6000,
  },
  {
    name: 'Fri',
    books: 4000,
    clothes: 2400,
    electronics: 2400,
  },
  {
    name: 'Sat',
    books: 1247,
    clothes: 2457,
    electronics: 9800,
  },
];
function StackedAreaChartBox() {
  return (
    <div className="area-chart">
      <h1 className="title">Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="electronics"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default StackedAreaChartBox;
