export class QuestionValue {
    value: string;
    answer: string;
    
    constructor(value, answer){
        this.value = value;
        this.answer = answer;
    }
}

export class Question {
    title: string;
    type: string;
    values: Array<QuestionValue>
    
    constructor(title, values){
        this.title = title;
        this.values = values;
    }
}