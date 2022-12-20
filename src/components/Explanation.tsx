export default function Explanation() {
  return (
    <>
      <h1>Collatz Calculator</h1>
      <p>
        The Collatz conjecture is a problem in math that says if you start with
        any number and keep following a simple rule, you will always end up with
        the number 1.
      </p>
      <p>
        Here's the rule:{' '}
        <span style={{ textDecoration: 'underline' }}>
          if the number is even, divide it by 2; if the number is odd, multiply
          it by 3 and add 1
        </span>
        .
      </p>
      <p>
        It is also known as the 3n + 1 problem. It's a fun and interesting math
        problem that people have been trying to figure out for a long time.
      </p>
    </>
  );
}
