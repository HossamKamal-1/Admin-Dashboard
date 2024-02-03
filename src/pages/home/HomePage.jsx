import {
  BarChartBox,
  LineChartBox,
  PieChartBox,
  StackedAreaChartBox,
  TopBox,
} from '../../components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  lineChartBoxConversion,
  lineChartBoxProduct,
  lineChartBoxRevenue,
  lineChartBoxUser,
} from '../../utils/constants/data';
import './HomePage.scss';
function HomePage() {
  useDocumentTitle();  
  return (
    <div className="home">
      <div className="box box-1">
        <TopBox title="Deals" />
      </div>
      <div className="box box-2">
        <LineChartBox {...lineChartBoxUser} />
      </div>
      <div className="box box-3">
        <LineChartBox {...lineChartBoxProduct} />
      </div>
      <div className="box box-4">
        <PieChartBox />
      </div>
      <div className="box box-5">
        <LineChartBox {...lineChartBoxConversion} />
      </div>
      <div className="box box-6">
        <LineChartBox {...lineChartBoxRevenue} />
      </div>
      <div className="box box-7">
        <StackedAreaChartBox />
      </div>
      <div className="box box-8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box-9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
export default HomePage;
