import { useEffect, useState } from 'react';
import { CollatzData } from '../utils/collatz';
import useTable from '../utils/useTable';

interface Props {
  data: CollatzData;
}

export default function Table({ data }: Props) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable(data, page, 15);
  return (
    <>
      <p className="my-2">Here are the steps:</p>
      <table className="bg-tableBackground text-textOffWhite table-fixed">
        <thead className="border-b p-1 font-medium">
          <tr>
            <th className="w-1/2">Steps</th>
            <th className="w-3/4">Number</th>
          </tr>
        </thead>
        <tbody className="bg-tableBackground">
          {slice.map((datapoint) => (
            <tr
              key={datapoint.x}
              className="mb-1 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-black text-center"
            >
              <td>{datapoint.x === 0 ? 'Start' : datapoint.x}</td>
              <td>{datapoint.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} setPage={setPage} page={page} slice={slice} />
    </>
  );
}

type TableFooterProps = {
  setPage: (number: number) => void;
  page: number;
  slice: CollatzData;
  range: number[];
};

function TableFooter({ setPage, page, slice, range }: TableFooterProps) {
  const lastPage = range[range.length - 1];
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div>
      <button
        onClick={() => setPage(1)}
        className="mx-1 hover:underline hover:font-medium hover:text-white"
      >
        First
      </button>
      <button
        onClick={() => setPage(page - 1)}
        className="mx-1 hover:underline hover:font-medium hover:text-white"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="mx-1 hover:underline hover:font-medium hover:text-white"
      >
        Next
      </button>
      <button
        onClick={() => {
          if (lastPage) {
            return setPage(lastPage);
          }
        }}
        className="mx-1 hover:underline hover:font-medium hover:text-white"
      >
        Last
      </button>
    </div>
  );
}
