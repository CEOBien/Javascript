function lex(sourceCode) {
    const tokenTypes = new Map([
        [/^[A-Za-z]\w*/, 'identifier'],
        [/^\d+(\.\d+)?([eE][+-]?\d+)?/, 'num'],
        [/\+\+|--|\+|-|\*|\/|<=?|>=?|==|!=|&&|\|\||!/, 'operator'],
        [/[(){}[\];,]/, 'delimiter']
    ]);

    let tokens = [];
    let source = sourceCode;

    while (source.length > 0) {
        let matched = false;

        for (let [pattern, classToken] of tokenTypes) {
            let result = source.match(pattern);
            if (result) {
                tokens.push({ classToken, lexeme: result[0] });
                source = source.slice(result[0].length);
                matched = true;
                break;
            }
        }

        if (!matched) {
            throw new Error(`Unexpected character: ${source[0]}`);
        }

        source = source.trim();
    }

    return tokens;
}

const code = `
void main ()
{
int sum = 0;
for(int j=0; j < 10; j=j+1)
{
sum = sum + j + 10.43 + 34E4 + 45.34E-4 + E43 + .34;
}
}
`;

const tokens = lex(code);
console.table(tokens);
