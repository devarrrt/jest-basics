const validateValue = require('./index')

describe('Валидация значения', () => {

    test('Корректное значение ', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Меньше корректного значения', () => {
        expect(validateValue(-3)).toBe(false)
    })

    test('Больше корректного значения', () => {
        expect(validateValue(121)).toBe(false)
    })

    test('Наименьшее пограничное значение', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Наибольшее пограничное значение', () => {
        expect(validateValue(100)).toBe(true)
    })
})