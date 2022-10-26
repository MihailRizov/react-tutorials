import Chart from '../../../chart/chart';
import { Expense } from '../../../new-expense/new-expense';
import styles from './expense-chart.module.scss';

export interface ExpenseChartProps {
  expenses: Expense[];
}

const ExpenseChart = (props: ExpenseChartProps) => {
  const { expenses } = props;
  const dataPointsLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const chartDataPoints = dataPointsLabels.map((label: string) => ({
    label,
    value: 0,
  }));

  for (let index = 0; index < expenses.length; index++) {
    const expenseMonthIndex: number = expenses[index].date.getMonth();
    chartDataPoints[expenseMonthIndex].value += expenses[index].amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
