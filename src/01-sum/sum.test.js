const sum= require ("./sum")

test("suma dos digito igual a 3",()=> {
    const resultado = sum(1,2)
    expect (resultado).toBe (3);
});
test ("10 y 10 igual a 20", ()=> {
    const resultado =sum(10,10)
    expect(resultado).toBe (20);
});
test ("errorvariable indefinida", ()=> {
    const resultado =sum()
    expect(resultado).toBe ("hubo un error");
});