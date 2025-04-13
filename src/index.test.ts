/**
 * Testes para a classe Calculator
 */

import { Calculator } from './index';
import { describe, it, expect } from '@jest/globals';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('deve somar dois números positivos corretamente', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('deve somar números negativos corretamente', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    it('deve somar números positivos e negativos corretamente', () => {
      expect(calculator.add(-2, 5)).toBe(3);
    });
  });

  describe('subtract', () => {
    it('deve subtrair dois números positivos corretamente', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('deve subtrair números negativos corretamente', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    it('deve subtrair números positivos e negativos corretamente', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    it('deve multiplicar dois números positivos corretamente', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('deve multiplicar números negativos corretamente', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    it('deve multiplicar números positivos e negativos corretamente', () => {
      expect(calculator.multiply(-2, 5)).toBe(-10);
    });
  });

  describe('divide', () => {
    it('deve dividir dois números positivos corretamente', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    it('deve dividir números negativos corretamente', () => {
      expect(calculator.divide(-6, -3)).toBe(2);
    });

    it('deve dividir números positivos e negativos corretamente', () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    it('deve lançar erro ao dividir por zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Divisão por zero não é permitida');
    });
  });

  describe('power', () => {
    it('deve calcular potências corretamente', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it('deve calcular potências com expoente zero corretamente', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    it('deve calcular potências com expoente negativo corretamente', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });
  });

  describe('squareRoot', () => {
    it('deve calcular a raiz quadrada corretamente', () => {
      expect(calculator.squareRoot(9)).toBe(3);
    });

    it('deve lançar erro ao calcular raiz quadrada de número negativo', () => {
      expect(() => calculator.squareRoot(-4)).toThrow(
        'Não é possível calcular a raiz quadrada de um número negativo em números reais'
      );
    });
  });

  describe('absolute', () => {
    it('deve calcular o valor absoluto de número positivo', () => {
      expect(calculator.absolute(5)).toBe(5);
    });

    it('deve calcular o valor absoluto de número negativo', () => {
      expect(calculator.absolute(-5)).toBe(5);
    });
  });

  describe('round', () => {
    it('deve arredondar para o inteiro mais próximo por padrão', () => {
      expect(calculator.round(5.4)).toBe(5);
      expect(calculator.round(5.5)).toBe(6);
    });

    it('deve arredondar para casas decimais específicas', () => {
      expect(calculator.round(5.678, 2)).toBe(5.68);
      expect(calculator.round(5.675, 2)).toBe(5.68);
    });
  });
});