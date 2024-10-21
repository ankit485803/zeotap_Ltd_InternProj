



import { Router } from 'express';
import { parseToAST } from '../rules/ruleParser';
import { evaluateRule } from '../rules/ruleEvaluator';



const router = Router();



router.post('/create_rule', (req, res) => {
    const { ruleString } = req.body;
    const ast = parseToAST(ruleString);
    res.json({ ast });
});



router.post('/evaluate_rule', (req, res) => {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
});


// exporting
export default router;
