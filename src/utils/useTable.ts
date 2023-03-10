import { useEffect, useState } from 'react';
import { CollatzData } from './collatz';

const calculateRange = (data: any[], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: CollatzData, page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: any[], page: number, rowsPerPage: number) => {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<CollatzData>([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const sliced = sliceData(data, page, rowsPerPage);
    setSlice([...sliced]);
  }, [data, page, rowsPerPage]);

  return { slice, range: tableRange };
};

export default useTable;
