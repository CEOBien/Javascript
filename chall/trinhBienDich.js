/**
 * The Lexer class is responsible for scanning the source file
 * which is a stream of characters and returning a stream of
 * tokens; each token object will contain the string (or access
 * to the string) that describes the token along with an
 * indication of its location in the source program to be used
 * for error reporting; we are tracking line numbers; white spaces
 * are space, tab, newlines
 */
class Lexer {
    constructor(sourceFile) {
      this.atEOF = false;
      this.ch = ''; // next character to process
      this.source = null;
      this.startPosition = 0; // positions in line of current token
      this.endPosition = 0;
  
      TokenType.initTokenTable(); // init token table
      this.source = new SourceReader(sourceFile);
      this.ch = this.source.read();
    }
  
    static main(args) {
      // Print each token with line number
      let tok;
      try {
        const lex = new Lexer(args[0]);
        while (true) {
          tok = lex.nextToken();
          let p = '';
          if (
            tok.getKind() === Tokens.Identifier ||
            tok.getKind() === Tokens.INTeger ||
            tok.getKind() === Tokens.Float
          ) {
            p = tok.toString();
          } else {
            p += TokenType.tokens.get(tok.getKind());
          }
          p += `\tleft: ${tok.getLeftPosition()} right: ${tok.getRightPosition()} `;
          console.log(p + `line: ${lex.source.getLineno()}`);
        }
      } catch (e) {}
  
      // Output the source program with line numbers
      let s = null;
      try {
        s = new SourceReader(args[0]);
        while (true) {
          const ch = s.read();
          process.stdout.write(ch);
        }
      } catch (e) {}
  
      if (s !== null) {
        s.close();
      }
    }
  
    /**
     * newIdTokens are either ids or reserved words; new id's will be inserted
     * in the symbol table with an indication that they are id's
     * @param {string} id - The String just scanned - it's either an id or reserved word
     * @param {number} startPosition - The column in the source file where the token begins
     * @param {number} endPosition - The column in the source file where the token ends
     * @return {Token} The Token; either an id or one for the reserved words
     */
    newIdToken(id, startPosition, endPosition) {
      return new Token(
        startPosition,
        endPosition,
        Symbol.symbol(id, Tokens.Identifier)
      );
    }
  
    /**
     * number tokens are inserted in the symbol table; we don't convert the
     * numeric strings to numbers until we load the bytecodes for interpreting;
     * this ensures that any machine numeric dependencies are deferred
     * until we actually run the program; i.e. the numeric constraints of the
     * hardware used to compile the source program are not used
     * @param {string} number - The int String just scanned
     * @param {number} startPosition - The column in the source file where the int begins
     * @param {number} endPosition - The column in the source file where the int ends
     * @return {Token} The int Token
     */
    newNumberToken(number, startPosition, endPosition) {
      return new Token(
        startPosition,
        endPosition,
        Symbol.symbol(number, Tokens.INTeger)
      );
    }
  
    /**
     * float tokens are inserted in the symbol table; we don't convert the
     * numeric strings to numbers until we load the bytecodes for interpreting;
     * this ensures that any machine numeric dependencies are deferred
     * until we actually run the program; i.e. the numeric constraints of the
     * hardware used to compile the source program are not used
     * @param {string} floatNumber - The float String just scanned
     * @param {number} startPosition - The column in the source file where the float begins
     * @param {number} endPosition - The column in the source file where the float ends
     * @return {Token} The float Token
     */
    newFloatToken(floatNumber, startPosition, endPosition) {
      return new Token(
        startPosition,
        endPosition,
        Symbol.symbol(floatNumber, Tokens.Float)
      );
    }
  
    /**
     * build the token for operators (+ -) or separators (parens, braces)
     * filter out comments which begin with two slashes
     * @param {string} s - The String representing the token
     * @param {number} startPosition - The column in the source file where the token begins
     * @param {number} endPosition - The column in the source file where the tokenends
     * @return {Token} The Token for the operator or separator
     */
    newOperatorOrSeparatorToken(s, startPosition, endPosition) {
      if (s === "//") {
        // filter comment
        while (this.ch !== '\n') {
          this.ch = this.source.read();
        }
        return this.nextToken();
      } else {
        const symbol = Symbol.symbol(s, Tokens.fromSpecialString(s));
        return new Token(startPosition, endPosition, symbol);
      }
    }
  
    /**
     * scan the source file to get the next token
     * @return {Token} The next Token
     */
    nextToken() {
      // skip white spaces
      while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n') {
        if (this.ch === '\n') {
          this.source.setLineno(this.source.getLineno() + 1);
        }
        this.ch = this.source.read();
      }
      // check for end of file
      if (this.ch === SourceReader.EOF) {
        if (!this.atEOF) {
          this.atEOF = true;
          return new Token(this.source.getLineno(), this.source.getLineno(),
            Symbol.symbol("EOF", Tokens.EOF));
        } else {
          throw new Error('Already at end of file');
        }
      }
      // mark starting position of token
      this.startPosition = this.source.getPosition();
      if (Character.isLetter(this.ch)) {
        // identifier or reserved word
        let id = '';
        do {
          id += this.ch;
          this.ch = this.source.read();
        } while (Character.isLetterOrDigit(this.ch));
        this.endPosition = this.source.getPosition() - 1;
        return this.newIdToken(id, this.startPosition, this.endPosition);
      } else if (Character.isDigit(this.ch)) {
        // int or float literal
        let number = '';
        let isFloat = false;
        do {
          number += this.ch;
          this.ch = this.source.read();
          if (this.ch === '.') {
            isFloat = true;
          }
        } while (Character.isDigit(this.ch) || this.ch === '.');
        this.endPosition = this.source.getPosition() - 1;
        if (isFloat) {
          return this.newFloatToken(number, this.startPosition, this.endPosition);
        } else {
          return this.newNumberToken(number, this.startPosition, this.endPosition);
        }
      } else if (this.ch === '/' && this.source.peek() === '/') {
        // comment
        this.source.read(); // read the second '/'
        while (this.ch !== '\n') {
          this.ch = this.source.read();
        }
        return this.nextToken();
      } else {
        // operator or separator
        let s = this.ch.toString();
        this.endPosition = this.source.getPosition();
        this.ch = this.source.read();
        return this.newOperatorOrSeparatorToken(s, this.startPosition, this.endPosition);
      }
    }
  }
  
  /**
   * The Token class represents a token in the source program.
   */
  class Token {
    constructor(left, right, symbol) {
      this.leftPosition = left;
      this.rightPosition = right;
      this.symbol = symbol;
    }
  
    /**
     * Get the left position of the token in the source file.
     * @return {number} The left position of the token.
     */
    getLeftPosition() {
      return this.leftPosition;
    }
  
    /**
     * Get the right position of the token in the source file.
     * @return {number} The right position of the token.
     */
    getRightPosition() {
      return this.rightPosition;
    }
  
    /**
     * Get the symbol associated with the token.
     * @return {Symbol} The symbol associated with the token.
     */
    getSymbol() {
      return this.symbol;
    }
  
    /**
     * Get the kind of the token.
     * @return {number} The kind of the token.
     */
    getKind() {
      return this.symbol.getKind();
    }
  
    /**
     * Convert the token to its string representation.
     * @return {string} The string representation of the token.
     */
    toString() {
      return this.symbol.toString();
    }
  }
  
  /**
   * The Symbol class represents a symbol in the source program.
   */
  class Symbol {
    constructor(token, kind) {
      this.token = token;
      this.kind = kind;
    }
  
    /**
     * Get the token associated with the symbol.
     * @return {string} The token associated with the symbol.
     */
    getToken() {
      return this.token;
    }
  
    /**
     * Get the kind of the symbol.
     * @return {number} The kind of the symbol.
     */
    getKind() {
      return this.kind;
    }
  }