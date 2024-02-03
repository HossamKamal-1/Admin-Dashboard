import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './PieChartBox.scss';
const data = [
  {
    name: 'Mobile',
    value: 400,
    color: '#0088FE',
  },
  {
    name: 'Desktop',
    value: 300,
    color: '#00C49F',
  },
  {
    name: 'Laptop',
    value: 600,
    color: '#FFBB28',
  },
  {
    name: 'Tablet',
    value: 400,
    color: '#FF8042',
  },
];
function PieChartBox() {
  return (
    <div className="pie-chart">
      <h1 className="title">Leads By Source</h1>

      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                padding: '5px',
                fontSize: '14px',
                borderRadius: '8px',
              }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="pie-chart-stat">
        {data.map((item) => (
          <div className="stat-box" key={item.name}>
            <div className="stat-box-title">
              <span
                className="cell-color"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <p className="stat-box-number">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PieChartBox;
