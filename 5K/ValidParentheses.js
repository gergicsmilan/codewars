/* Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */

const parentheses = {
  '(': ')',
  '[': ']',
  '{': '}',
};

validParentheses = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (parentheses[element]) {
      stack.push(parentheses[element]);
    } else {
      if (element !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validParentheses('())'));
console.log(validParentheses('(())((()())())'));
