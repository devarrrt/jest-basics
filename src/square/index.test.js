const square = require('./index')

describe(('Возведение в квадрат'), () => {
    let mockValue
    beforeEach(() => {
        mockValue = Math.random()
        //1 добавили вю БД пользователя
    })

    beforeAll(() => { })

    test('Корректное значение', () => {
        // expect(square(2)).toBe(4)
        // expect(square(2)).toBeLessThan(6)
        // expect(square(2)).toBeGreaterThan(3)
        // expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    //2 выполнили тест

    afterEach(() => {
        //3 удалили из БД
        jest.clearAllMocks()
    })
    afterAll(() => { })
    })

//beforeEach - операции, проводимые каждый раз перед тестами, которые вызываются каждый раз
//beforeAll - вызывается один раз перед запуском

//afterEach и afterAll - в конце тестов соответственно