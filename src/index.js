module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < arr.length;) {
       if (arr[i] == '(' && arr[i+1] == ')') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '{' && arr[i+1] == '}') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '[' && arr[i+1] == ']') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '|' && arr[i+1] == '|') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '1' && arr[i+1] == '2') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '3' && arr[i+1] == '4') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '5' && arr[i+1] == '6') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '7' && arr[i+1] == '7') {
        arr.splice(i, 2);
        i = 0;
      } else if (arr[i] == '8' && arr[i+1] == '8') {
        arr.splice(i, 2);
        i = 0;
      } else {
          i++;
      }
  }

  if (arr.length == 0) {
      return true;
  } else {
      return false;
  }
}
