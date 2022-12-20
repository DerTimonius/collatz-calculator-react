import CanvasJSReact from '../utils/canvasjs.react';
import { CollatzData } from '../utils/collatz';

type Props = {
  data: CollatzData;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Graph({ data }: Props) {
  const interval = data.length > 5 ? 5 : 2;
  const options = {
    animationEnabled: true,
    theme: 'dark1',
    title: {
      text: 'Collatz Data',
    },
    axisY: {
      title: 'Number',
    },
    axisX: {
      title: 'Steps',
      interval: interval,
    },
    data: [
      {
        type: 'line',
        toolTipContent: 'Step {x}: {y}',
        dataPoints: data,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
}
