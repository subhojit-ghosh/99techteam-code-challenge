function sum_to_n_a(n: number): number {
  // Time complexity: O(n) - Linear time as it iterates through the input size
  // Space complexity: O(1) - Uses a single variable to store the sum

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function sum_to_n_b(n: number): number {
  // Time complexity: O(1) - Constant time as it uses a direct formula and doesn't depend on the input size
  // Space complexity: O(1) - No extra space is used

  const sum = (n * (n + 1)) / 2;

  return sum;
}

function sum_to_n_c(n: number): number {
  // Time complexity: O(n) - Linear time as it creates an array of size n
  // Space complexity: O(n) - Uses extra space to store the array

  const array = Array.from({ length: n }, (_, i) => i + 1);

  const sum = array.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log("sum_to_n_a", sum_to_n_a(5));
console.log("sum_to_n_b", sum_to_n_b(5));
console.log("sum_to_n_c", sum_to_n_c(5));
