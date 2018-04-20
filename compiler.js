
const someCode = `

  add(1);

`

const tokenizer = (inputCode) => {

  const tokens = []; // an array of tokens.
  let cursor = 0; // our cursor

  while(cursor < inputCode.length) {
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
        value += ch;
        ch = inputCode[++cursor];
      }

      tokens.push({
        type: 'number',
        value,
      });


      continue;

    }

    // supporting strings now

    if (ch === '"') {

      let value = '';

      ch = inputCode[++cursor];

      while(ch !== '"') {
        value += ch;
        ch = inputCode[++cursor];
      }

      // ignoring the last "

      ch = inputCode[++cursor];

      tokens.push({
        type: 'string',
        value,
      });

      continue;
    }


    let LETTERS = /[A-z]/;
    
    if (LETTERS.test(ch)) {

      let value = '';

      // loop through charachters that are together
      while (LETTERS.test(ch)) {
        value += ch;
        ch = inputCode[++cursor];
      }

      // now we push the value of the identifier

      tokens.push({ type: 'name', value });

      continue;
    }

    if (ch === ';') {
      tokens.push({
        type: 'endStatement',
        value: ';',
      });

      cursor++;
      
      continue;
    }

    
    throw new TypeError(`You sure about this? I dont really understand it at: ${ch}, ${cursor}`);

  }


  return tokens;

}


console.log(tokenizer(someCode));
