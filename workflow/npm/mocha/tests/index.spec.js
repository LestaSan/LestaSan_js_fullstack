const expect = require('chai').expect
const { add } = require('../index')

describe('hello-npm-script', () => {
    // 方方面面都考虑进去
    describe('#add', () => {
        // 举个例子 it
        it('should return sum when params are number', () => {
            expect(add(0, 1)).to.equal(1);
        })
        it('当参数不合法时返回NaN', () => {
            expect(isNaN(add(1, '2'))).to.equal(true);
        })
    })
})