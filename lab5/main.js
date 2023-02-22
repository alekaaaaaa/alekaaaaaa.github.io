function compute() {
  let column_1 = [
    5, 1, 6, 4, 8, 9, 6, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
    2, 3, 4, 5, 1,
  ];

  let column_2 = [
    4, 8, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
    7, 8, 2, 3, 4,
  ];
  let column_3 = [
    41, 55, 67, 78, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 41, 55, 67,
    78, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  ];
  let column_4 = [
    77, 96, 42, 63, 84, 95, 16, 27, 38, 49, 50, 61, 72, 83, 94, 15, 26, 37, 48,
    59, 60, 71, 82, 93, 14, 25, 36, 47, 58, 69,
  ];

  let sum_1 = 0;
  let sum_2 = 0;
  let sum_3 = 0;
  let sum_4 = 0;

  for (let i = 0; i < 30; i++) {
    sum_1 += column_1[i];
    sum_2 += column_2[i];
    sum_3 += column_3[i];
    sum_4 += column_4[i];
  }

  let sums = [sum_1, sum_2, sum_3, sum_4];

  let total_sum = 0;
  for (let i = 0; i < 4; i++) {
    total_sum += sums[i];
  }

  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_sum,
  };

  console.log(results);
}
compute();
