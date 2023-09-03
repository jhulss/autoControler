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

    it('El conductor puede ingresar las dimensiones del área de juego en formato "X, Y": "1,3" -> [1,3]', () => {
        const control = new controlAuto();
        expect(control.matriz("1,3").toString("[1,3]"))
    })


})