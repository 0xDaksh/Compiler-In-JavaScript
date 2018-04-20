
const someCode = `

  add(1, 2);

`

const tokenizer = (inputCode) => {

  const tokens = []; // an array of tokens.
  let cursor = 0; // our cursor

  while(cursor < input.length) {
    let ch = inputCode[cursor]; // current charachter in the input.

    
    // check whitespaces

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(ch)) {
      cursor++;
      continue;
    }


    // opening parenthesis
    if (ch === '(') {
      
      // push the token for parenthesis
      tokens.push({
        type: 'paren',
        value: ch,
      });

      // increase the value of cursor
      cursor++;

      // push the loop

      continue;
    }

    // closing parenthesis

    if (ch === ')') {
      
      tokens.push({
        type: 'paren',
        value: ch,
      });

      cursor++;
      
      continue;
    }


    // moving on to checking numbers

    const NUMBERS = /[0-9]/;

    if (NUMBERS.test(ch)) {

      let value = '';

      // we loop through all the other numbers attached together.
      while(NUMBERS.test(ch)) {
        value += char;
        char = inputCode[++cursor];
      }

      tokens.push({
        type: 'number',
        value,
      });


    }

    

  }


}
