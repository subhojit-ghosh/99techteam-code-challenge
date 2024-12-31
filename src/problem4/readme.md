# Problem 4: Three ways to sum to n

This project contains three different implementations of a function that calculates the sum of the first `n` natural numbers. The implementations are provided in the `index.ts` file.

## Implementations

1. **sum_to_n_a**: Uses a loop to calculate the sum.
2. **sum_to_n_b**: Uses the mathematical formula to calculate the sum.
3. **sum_to_n_c**: Creates an array and uses the `reduce` method to calculate the sum.

## Setup

To set up the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Running the Code

To run the code and see the output of the different implementations, use one of the following commands:

```sh
npx ts-node src/problem4/index.ts
```

Alternatively, you can use:

```sh
npm start
```

This will execute the `index.ts` file and print the results of the three implementations to the console.

## Example Output

```sh
sum_to_n_a 15
sum_to_n_b 15
sum_to_n_c 15
```

This output shows the sum of the first 5 natural numbers calculated by each implementation.
