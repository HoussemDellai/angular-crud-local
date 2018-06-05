export class Todo {
    constructor(
        public id: number, 
        public title: string, 
        public isDone: boolean, 
        public updatedAt: Date) { }
}
