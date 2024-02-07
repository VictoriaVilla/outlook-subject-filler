export class Subject {
    constructor(private name: string, private subLine: string) {
        this.name = name;
        this.subLine = subLine;
    }
    print(): string {
        return `${this.name} - Subject line: ${this.subLine}.`;
    }
}