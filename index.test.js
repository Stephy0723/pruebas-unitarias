
//index.test.js 

const holaMundo = require('./index.js');

test('Comprrobacion del mensaje', () => {
  expect(holaMundo()).toBe("¡Hola, mundo!");
});