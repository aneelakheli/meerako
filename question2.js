function loop(n, cur) {
  if (!cur) {
    cur = 0;
  }
  if (n < 2) {
    throw new Error("invalid input");
  }
  result = 0;
  for (i = n; i >= 2; i--) {
    if (i === 2) {
      const strings1 = "1/" + i + "+" + cur;
      return 1 / i + cur;
    }
    const strings = cur + "+1/(" + i + "*(" + i + "-1))";
    cur = cur + 1 / (i * (i - 1));
  }
}
