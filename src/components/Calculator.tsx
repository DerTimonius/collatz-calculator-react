import React, { useEffect, useState, useTransition } from 'react';
import collatzCalculator, { CollatzData } from '../utils/collatz';
import Graph from './Graph';

export default function Calculator() {
  const [numberInput, setNumberInput] = useState<number>(10);
  const [collatzData, setCollatzData] = useState<CollatzData>();
  const [collatzCounter, setCollatzCounter] = useState<number>(0);
  const [highestNumber, setHighestNumber] = useState<number>(0);
  const [isPending, startTranstion] = useTransition();

  useEffect(() => {
    setCollatzData(collatzCalculator(numberInput).numbers);
    setCollatzCounter(collatzCalculator(numberInput).counter);
    setHighestNumber(collatzCalculator(numberInput).highestNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault();
    setCollatzData(collatzCalculator(numberInput).numbers);
    setCollatzCounter(collatzCalculator(numberInput).counter);
    setHighestNumber(collatzCalculator(numberInput).highestNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={numberInput}
          onChange={(event) =>
            setNumberInput(event.currentTarget.valueAsNumber)
          }
        />
        <button onClick={(e) => startTranstion(() => handleSubmit(e))}>
          Calculate
        </button>
      </form>

      {collatzData && !isPending ? (
        <>
          <Graph data={collatzData} />
          <p>
            It takes {collatzCounter - 1} steps to reach 1 when starting with
            the number {collatzData[0]?.y}!
          </p>
          <p>The highest number reached is {highestNumber}</p>
          <p>Here are the steps:</p>
          <table>
            <th>
              <td>Steps</td>
              <td>Number</td>
            </th>
            <tbody>
              {collatzData.map((datapoint) => (
                <tr key={datapoint.x}>
                  <td>{datapoint.x === 0 ? 'Start' : datapoint.x}</td>
                  <td>{datapoint.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h4>Calculating</h4>
      )}
    </div>
  );
}
