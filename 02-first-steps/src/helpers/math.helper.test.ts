import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';


describe('add', () => {
    test('should add two positives numbers', () => {
    
        // ! Arrange preparacion
        const a = 1;
        const b = 5;
        
        // ! 2. Act
        const result = add(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a + b);
    
    });
});


describe('subtract', () => {
    test('should subtract two positives numbers', () => {
    
        // ! Arrange preparacion
        const a = 1;
        const b = 5;
        
        // ! 2. Act
        const result = subtract(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a - b);
    
    });
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
    
        // ! Arrange preparacion
        const a = 1;
        const b = 5;
        
        // ! 2. Act
        const result = multiply(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a * b);
    
    });
});

describe('divide', () => {
    test('should divide two positives numbers', () => {
    
        // ! Arrange preparacion
        const a = 2;
        const b = 4;
        
        // ! 2. Act
        const result = divide(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a / b);
    
    });
});


