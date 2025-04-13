/**
 * TypeScript Calculator
 * Uma simples biblioteca de calculadora para Node.js
 */
export declare class Calculator {
    /**
     * Soma dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns A soma de a e b
     */
    add(a: number, b: number): number;
    /**
     * Subtrai dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns A diferença entre a e b
     */
    subtract(a: number, b: number): number;
    /**
     * Multiplica dois números
     * @param a Primeiro número
     * @param b Segundo número
     * @returns O produto de a e b
     */
    multiply(a: number, b: number): number;
    /**
     * Divide dois números
     * @param a Numerador
     * @param b Denominador
     * @returns O quociente de a dividido por b
     * @throws Error se b for zero
     */
    divide(a: number, b: number): number;
    /**
     * Calcula a potência de um número
     * @param base O número base
     * @param exponent O expoente
     * @returns base elevado a exponent
     */
    power(base: number, exponent: number): number;
    /**
     * Calcula a raiz quadrada de um número
     * @param a O número a calcular a raiz quadrada
     * @returns A raiz quadrada de a
     * @throws Error se a for negativo
     */
    squareRoot(a: number): number;
    /**
     * Calcula o valor absoluto de um número
     * @param a O número a calcular o valor absoluto
     * @returns O valor absoluto de a
     */
    absolute(a: number): number;
    /**
     * Arredonda um número para um número específico de casas decimais
     * @param a O número a arredondar
     * @param decimals O número de casas decimais para arredondar
     * @returns O número arredondado
     */
    round(a: number, decimals?: number): number;
}
