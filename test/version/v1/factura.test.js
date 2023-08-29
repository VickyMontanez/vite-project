
import { producto } from "../../../version/v1/factura.js"

describe("a Objeto",()=>{
    test('El objeto esperado {...id, ...nombre}',()=>{
        let obj = {
            id:1,
            nombre: "Vicky"
        };
        let app = producto();
        expect(app).toStrictEqual(obj)
    })
})