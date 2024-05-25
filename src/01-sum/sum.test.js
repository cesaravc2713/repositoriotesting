const  sum = require("./sum")
describe ("test en la función sum", () => {
    test('adds 1 + 2 to equal 3', () => {
        const resultado = sum(1,2)
        expect(resultado).toBe(3);
    });
    
    test ("add 10 + 10 to equals 20 ", () =>{
        const resultado = sum (10, 10);
        expect (resultado).toBe(20);
    });
    
    test ("deberia retornar un error", () =>{
        const resultado = sum ();
        expect(resultado).toBe ("Hubo un error en los argumentos");
    });
});
