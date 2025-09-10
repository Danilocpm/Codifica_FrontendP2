import {describe, it, expect} from 'vitest'
import { sum } from './sum'

describe('sum', () => {
    it('Deve retornar a soma de dois numeros', () => {
        expect(sum(1, 2)).toBe(3)
    })
})