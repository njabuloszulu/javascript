const difference = (n) => {
  if (n < 20) {
    return (20 - n) / 2
  } else {
    return n - 20
  }

}
console.log(difference(10))