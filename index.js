const pol = () => {
  const arr = [1, 5, 11];
  arr[30] = "yura";
  arr[100] = 10;
  console.log(arr.length);

  let str = "";

  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
};

pol();
