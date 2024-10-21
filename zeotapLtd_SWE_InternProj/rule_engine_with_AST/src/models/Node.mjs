


class Node {
    constructor(type, value = null, left = null, right = null) {
        this.type = type; // "operator" or "operand"
        this.value = value; // Value for operand nodes
        this.left = left; // Left child
        this.right = right; // Right child
    }

    evaluate(data) {
        if (this.type === "operand") {
            const [field, operator, value] = this.value.split(" ");
            const fieldValue = data[field];
            return eval(`fieldValue ${operator} ${value}`);
        } else if (this.type === "operator") {
            const leftResult = this.left.evaluate(data);
            const rightResult = this.right.evaluate(data);
            return this.value === "AND" ? leftResult && rightResult : leftResult || rightResult;
        }
        return false;
    }
}

export default Node;


