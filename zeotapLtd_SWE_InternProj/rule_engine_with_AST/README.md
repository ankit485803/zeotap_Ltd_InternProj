




# Rule Engine Application


This is a simple rule engine application that determines user eligibility based on various attributes like age, department, income, and experience. The system uses an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.

## Features

- Define and evaluate rules based on user attributes.
- Dynamic creation and modification of rules.
- Supports combination of multiple rules.
- Uses Nodemon for auto-reloading during development.

## Directory Structure


- rule_engine/
  - README.md
  - package.json
  - server.js
  - src/
    - models/
      - Node.js
    - rules/
      - ruleParser.js
      - ruleEvaluator.js
    - api/
      - index.js
    - utils/
      - helpers.js
    - config.js
  - tests/
    - ruleParser.test.js
    - ruleEvaluator.test.js


<!--  tree diag of folder and files 

rule_engine/
├── src/
│   ├── models/
│   │   └── Node.js
│   ├── rules/
│   │   ├── ruleParser.js
│   │   └── ruleEvaluator.js
│   ├── api/
│   │   └── index.js
│   ├── utils/
│   │   └── helpers.js
│   └── config.js
├── tests/
│   ├── ruleParser.test.js
│   └── ruleEvaluator.test.js
├── package.json
├── README.md
└── server.js

-->






## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rule_engine
   ```




## API Endpoints
You can define and evaluate rules using the following API endpoints:

* Create Rule: POST /api/rules

* Evaluate Rule: POST /api/evaluate



## Usage

To run the application in development mode, use:
```
npm run dev
```

