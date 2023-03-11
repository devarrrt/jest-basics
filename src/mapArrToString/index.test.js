const mapArrToString = require('./index')

describe(('Конвертирование массива чисел в массив строк'), () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 4, 5])).toEqual(["1", "2", "4", "5"])
    })

    test('Разные значения', () => {
        expect(mapArrToString([1, 2, 4, 5, null, undefined])).toEqual(["1", "2", "4", "5"])
    })

    test('Пустое значение', () => {
        expect(mapArrToString([])).toEqual([])
    })

    test('Отрицание', () => {
        expect(mapArrToString([1, 2, 4, 5])).not.toEqual([1, 2, 4, 5])
    })
})

//toBe - проверяет равенство объектов, а так как в JS обекты не равны, то
//toEqual - проверяет, что объекты одинаковы