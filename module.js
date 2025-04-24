function hello1() {
  return "Module Hello1";
}

function hello2() {
  return "Module Hello2";
}

export { hello1 as hello_1, hello2 as hello_2 };
