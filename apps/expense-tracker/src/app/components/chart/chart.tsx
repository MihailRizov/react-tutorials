import styles from './chart.module.scss';
import ChartBar, { ChartBarProps } from './components/chart-bar/chart-bar';

export interface ChartProps {
  dataPoints: ChartBarProps[];
}

const Chart = (props: ChartProps) => {
  const { dataPoints } = props;
  const maxDataPointValue = Math.max(
    ...dataPoints.map((dataPoint: ChartBarProps) => dataPoint.value)
  );
  return (
    <section className={styles['chart']}>
      {dataPoints.map((dataPoint: ChartBarProps) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxDataPointValue}
        />
      ))}
    </section>
  );
};

export default Chart;
