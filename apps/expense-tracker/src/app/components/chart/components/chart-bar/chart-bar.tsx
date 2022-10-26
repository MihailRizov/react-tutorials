import styles from './chart-bar.module.scss';

export interface ChartBarProps {
  value: number;
  label: string;
  maxValue?: number;
}

const ChartBar = (props: ChartBarProps) => {
  const { value, label, maxValue } = props;
  let barFillHeight = '0%';

  if (maxValue) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillHeight }}></div>
      </div>
      <div className={styles['chart-bar__label']}>{label}</div>
    </div>
  );
};

export default ChartBar;
