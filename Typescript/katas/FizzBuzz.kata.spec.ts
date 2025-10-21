/**
 * Generates a FizzBuzz sequence up to the given limit.
 *
 * - For multiples of 3, adds "Fizz" instead of the number.
 * - For multiples of 5, adds "Buzz" instead of the number.
 * - For multiples of both 3 and 5, adds "FizzBuzz".
 * - For all other numbers, adds the number itself.
 *
 * @param {number} [limit=100] - The upper limit of the sequence. Defaults to 100.
 * @returns {(string | number)[]} An array containing numbers and Fizz/Buzz/FizzBuzz strings.
 */

function FizzBuzz(limit: number = 100): Array<string | number> {
  const result: (string | number)[] = []
  console.log(limit)
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      result.push('FizzBuzz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    } else {
      result.push(i)
    }
  }

  return result
}

const fizzBuzzOnline = (limit = 100): (string | number)[] =>
  Array.from({ length: limit }, (_, i) =>
    ((i + 1) % 3 ? '' : 'Fizz') + ((i + 1) % 5 ? '' : 'Buzz') || i + 1
  );

const result = FizzBuzz(50)
console.log(result)