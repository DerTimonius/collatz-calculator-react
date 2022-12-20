export default function Explanation() {
  return (
    <>
      <div className="flex justify-center p-6">
        <h1 className="text-4xl text-textWhite font-bold font-mono">
          Collatz Calculator
        </h1>
      </div>
      <div className="p-4 m-2 flex flex-col items-center">
        <p>
          The Collatz conjecture is a problem in math that states if you start
          with any number and keep following a simple rule, you will always end
          up with the number 1.
        </p>
        <p>
          Here's the rule:{' '}
          <span className="text-textWhite font-medium hover:underline">
            if the number is even, divide it by 2; if the number is odd,
            multiply it by 3 and add 1
          </span>
          .
        </p>
        <p>
          It is also known as the 3n + 1 problem. It's a fun and interesting
          math problem that people have been trying to figure out for a long
          time.
        </p>
      </div>
    </>
  );
}
