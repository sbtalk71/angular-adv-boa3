import { add } from "./calculator";

describe(
    "Testing Calculator",
    ()=>{
        it("testing add with 2 arguments",()=>{
            let addResult=add(3,5);
            expect(addResult).toBe(8);
        })
    }
);