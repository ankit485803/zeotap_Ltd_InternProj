


import Node from '../models/Node';

function parseToAST(ruleString) {


    // Basic parsing logic (to be enhanced for full support)


    if (ruleString.includes('AND')) {
        const [left, right] = ruleString.split(' AND ').map(parseToAST);
        return new Node('operator', 'AND', left, right);


    } else if (ruleString.includes('OR')) {
        const [left, right] = ruleString.split(' OR ').map(parseToAST);
        return new Node('operator', 'OR', left, right);



    } else {
        return new Node('operand', ruleString.trim());
    }
}



// exporting 
export default { parseToAST };
