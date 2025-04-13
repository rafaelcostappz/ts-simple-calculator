# TS Simple Calculator

Uma biblioteca de calculadora simples em TypeScript para Node.js.

## Instalação

```bash
npm install ts-simple-calculator
```

## Uso

```typescript
import { Calculator } from 'ts-simple-calculator';

const calc = new Calculator();

// Operações básicas
console.log(calc.add(5, 3));        // 8
console.log(calc.subtract(5, 3));   // 2
console.log(calc.multiply(5, 3));   // 15
console.log(calc.divide(6, 3));     // 2

// Operações avançadas
console.log(calc.power(2, 3));      // 8
console.log(calc.squareRoot(9));    // 3
console.log(calc.absolute(-5));     // 5
console.log(calc.round(5.678, 2));  // 5.68
```

## API

### `add(a: number, b: number): number`

Soma dois números.

### `subtract(a: number, b: number): number`

Subtrai o segundo número do primeiro.

### `multiply(a: number, b: number): number`

Multiplica dois números.

### `divide(a: number, b: number): number`

Divide o primeiro número pelo segundo. Lança um erro se o divisor for zero.

### `power(base: number, exponent: number): number`

Calcula a potência de um número.

### `squareRoot(a: number): number`

Calcula a raiz quadrada de um número. Lança um erro se o número for negativo.

### `absolute(a: number): number`

Retorna o valor absoluto de um número.

### `round(a: number, decimals: number = 0): number`

Arredonda um número para um número específico de casas decimais.

## Licença

MIT