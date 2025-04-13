"use strict";
/**
 * TypeScript Calculator
 * Uma simples biblioteca de calculadora para Node.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    /**
     * Soma dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns A soma de a e b
     */
    add(a, b) {
        return a + b;
    }
    /**
     * Subtrai dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns A diferença entre a e b
     */
    subtract(a, b) {
        return a - b;
    }
    /**
     * Multiplica dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns O produto de a e b
     */
    multiply(a, b) {
        return a * b;
    }
    /**
     * Divide dois números
     * @param a Numerador
     * @param b Denominador
     * @returns O quociente de a dividido por b
     * @throws Error se b for zero
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida');
        }
        return a / b;
    }
    /**
     * Calcula a potência de um número
     * @param base O número base
     * @param exponent O expoente
     * @returns base elevado a exponent
     */
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
    /**
     * Calcula a raiz quadrada de um número
     * @param a O número a calcular a raiz quadrada
     * @returns A raiz quadrada de a
     * @throws Error se a for negativo
     */
    squareRoot(a) {
        if (a < 0) {
            throw new Error('Não é possível calcular a raiz quadrada de um número negativo em números reais');
        }
        return Math.sqrt(a);
    }
    /**
     * Calcula o valor absoluto de um número
     * @param a O número a calcular o valor absoluto
     * @returns O valor absoluto de a
     */
    absolute(a) {
        return Math.abs(a);
    }
    /**
     * Arredonda um número para um número específico de casas decimais
     * @param a O número a arredondar
     * @param decimals O número de casas decimais para arredondar
     * @returns O número arredondado
     */
    round(a, decimals = 0) {
        const factor = Math.pow(10, decimals);
        return Math.round(a * factor) / factor;
    }
}
exports.Calculator = Calculator;
