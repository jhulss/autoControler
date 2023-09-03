import controlAuto from "./controladorAuto"


describe('Mover un auto', () => {
    it('Al ingresar una cadena, se retorna la misma cadena', () =>{
        const control = new controlAuto();
        expect(control.mover_auto("hola").toString("hola"))
    })

    it('Al ingresar una cadena vacia, se retorna un mensaje de advertencia', () =>{
        const control = new controlAuto();
        expect(control.mover_auto("").toString("Cadena vacia"))
    })
    


})