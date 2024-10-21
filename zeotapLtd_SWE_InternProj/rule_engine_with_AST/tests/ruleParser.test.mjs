

import { parseToAST } from '../src/rules/ruleParser';



test('should parse simple rule', () => {


    const ast = parseToAST("age > 30");
    expect(ast).toBeDefined();
    expect(ast.type).toBe("operand");


});


