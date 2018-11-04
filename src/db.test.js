const dbFactory = require('./db')
const uuid = require('uuid/v4')
describe('the db', () => {
    test('that the module returns a db factory', () => {
        const dbFactory = require('./db')

        expect(typeof dbFactory).toBe('function')
    })

    test('that the factory functions returns an object', () => {
        // given
        const dbFactory = require('./db')

        // when
        const returned = dbFactory()

        // then
        expect(returned).toMatchObject({})
    })

    it('has store and get methods', () => {
        // given
        const desiredDb = {
            store: expect.any(Function),
            get: expect.any(Function)
        }

        // when
        const db = dbFactory()

        // then
        expect(db).toMatchObject(desiredDb)
    })

    it('can store value and retrieve a value', () => {
        // given
        const db = dbFactory()
        const value = {a: 'value'}
        const id = uuid()

        // when
        db.store(id, value)

        // then
        expect(db.get(id)).toEqual(value)
    })
    
    it('it returns undefined if key does not exists in db', () => {
        // given
        const db = dbFactory()
        const id = uuid()

        // when
        const noMatchResult = db.get(id)
        
        // then
        expect(noMatchResult).toBeUndefined()
    })

    it('can store and retrieve multiple values', () => {
        // given
        const db = dbFactory()
        const value1 = {a: 'value'}
        const value2 = 123
        const value3 = null
        const id1 = uuid()
        const id2 = uuid()
        const id3 = uuid()

        // when
        db.store(id1, value1)
        db.store(id2, value2)
        db.store(id3, value3)

        // then
        expect(db.get(id1)).toEqual(value1)
        expect(db.get(id2)).toEqual(value2)
        expect(db.get(id3)).toEqual(value3)
    })
})