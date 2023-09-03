import controlAuto from "./controladorAuto"


describe('Controlar el auto', () => {
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
        expect(control.obtener_matriz("1,3").toString("[1,3]"))
    })

    it('Se ingresa la posición inicial del auto en formato "matriz/X, Y, D", donde "D" es la orientación', () => {
        const control = new controlAuto();
        expect(control.mover_auto("5,5/1,2N").toString("{5,5}, {1,2 N}"));
      });

})