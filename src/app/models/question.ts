export class QuestionValue {
    value: string;
    answer: string;

    constructor(value, answer) {
        this.value = value;
        this.answer = answer;
    }
}

export class Question {
    title: string;
    type: string;
    values: Array<any>;
    // values: Array<QuestionValue>;

    constructor(type, title, values) {
        this.type = type;
        this.title = title;
        this.values = values;
    }
}
