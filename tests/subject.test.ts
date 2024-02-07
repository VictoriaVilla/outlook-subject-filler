import { Subject } from "../src/subjects/subject";

describe('testing subject file',()=>{
    test('testing print for subject',()=>{
        var testSub = new Subject("Hello", "World");
        expect(testSub.print()).toBe("Hello - Subject line: World.");
    });
});