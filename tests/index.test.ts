import { filtrarPorMarca, somarValorPorMarca, filtrarPorAno } from '../src/index';

describe('Testes de Filtragem e Soma de Veículos', () => {
  test('Filtrar veículos pela marca Chevrolet', () => {
    const resultado = filtrarPorMarca('carros', 'Chevrolet');
    expect(resultado.length).toBe(3); 
  });

  test('Somar o valor total dos carros da marca Volkswagen', () => {
    const resultado = somarValorPorMarca('carros', 'VolksWagen');
    expect(resultado).toBe(328000); 
  });

  test('Filtrar veículos mais novos que 2020', () => {
    const resultado = filtrarPorAno('motos', 2020);
    expect(resultado.length).toBe(3); 
  });
});
