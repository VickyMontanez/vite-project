import { saludar } from "../../../version/v1/user"

describe("Test saludar",()=>{
    test("test del archivo user devuelve 'Hola Mundo'", ()=>{
        expect(saludar()).toBe("Hola Mundo")
    });

    test("test del archivo user devuelve 'string'", ()=>{
        expect(typeof saludar()).toBe('string')
    })
})