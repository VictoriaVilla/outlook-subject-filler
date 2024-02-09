import { AddressSubject } from "../src/subjects/addressSubject";

describe('testing address subject file',()=>{
    test('testing print for address subject victoria',()=>{
        var testSub = new AddressSubject("building","0000","","building name - ","address","suburb","vic");
        expect(testSub.print()).toBe("building - Subject line: OC 0000 - building name - address, suburb.");
    });

    test('testing print for address subject queensland',()=>{
        var testSub = new AddressSubject("building","0000","1111","building name - ","address","suburb","qld");
        expect(testSub.print()).toBe("building - Subject line: CTS 1111 - building name - address, suburb.");
    });
});