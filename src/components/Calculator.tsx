import React, { useEffect, useState, useTransition } from 'react';
import collatzCalculator, { CollatzData } from '../utils/collatz';
import Graph from './Graph';
import Table from './Table';

export default function Calculator() {
  const [numberInput, setNumberInput] = useState<number>(15);
  const [collatzData, setCollatzData] = useState<CollatzData>();
  const [collatzCounter, setCollatzCounter] = useState<number>();
  const [highestNumber, setHighestNumber] = useState<number>();
  const [isPending, startTranstion] = useTransition();

  useEffect(() => {
    setCollatzData(collatzCalculator(numberInput).numbers);
    setCollatzCounter(collatzCalculator(numberInput).counter);
    setHighestNumber(collatzCalculator(numberInput).highestNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault();
    if (numberInput <= 10000000) {
      setCollatzData(collatzCalculator(numberInput).numbers);
      setCollatzCounter(collatzCalculator(numberInput).counter);
      setHighestNumber(collatzCalculator(numberInput).highestNumber);
    }
  };

  return (
    <div>
      {' '}
      <div className="flex flex-col items-center">
        <h4>Try it out:</h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center p-4 m-2 md:flex-row md:justify-center"
        >
          <input
            type="number"
            value={numberInput}
            onChange={(event) =>
              setNumberInput(event.currentTarget.valueAsNumber)
            }
            className="w-max text-black rounded mx-4 sm:mb-3"
          />
          <button
            onClick={(e) => startTranstion(() => handleSubmit(e))}
            className="px-4 py-2 mx-1 text-medium bg-orange rounded-xl  transition duration-300 ease-in-out hover:bg-orangeHover hover:underline"
          >
            Calculate
          </button>
        </form>
      </div>
      {collatzData && !isPending ? (
        <div className="flex flex-col items-center">
          <Graph data={collatzData} />
          <div className="p-4 m-2 flex flex-col items-center">
            <p>
              It takes{' '}
              <strong>
                {collatzCounter ? collatzCounter - 1 : null} steps{' '}
              </strong>{' '}
              to reach 1 when starting with the number{' '}
              <strong>{collatzData[0]?.y}</strong>!
            </p>
            <p>
              The highest number reached is <strong>{highestNumber}</strong>.
            </p>

            <Table data={collatzData} />
          </div>
        </div>
      ) : (
        <h4>Calculating</h4>
      )}
    </div>
  );
}
