'use strict'

/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')
const equals = require('../../src/uint8arrays/equals')

describe('Uint8Array equals', () => {
  it('finds two Uint8Arrays equal', () => {
    const a = Uint8Array.from([0, 1, 2, 3])
    const b = Uint8Array.from([0, 1, 2, 3])

    expect(equals(a, b)).to.be.true()
  })

  it('finds two Uint8Arrays not equal', () => {
    const a = Uint8Array.from([0, 1, 2, 3])
    const b = Uint8Array.from([0, 1, 2, 4])

    expect(equals(a, b)).to.be.false()
  })

  it('finds two Uint8Arrays with different lengths not equal', () => {
    const a = Uint8Array.from([0, 1, 2, 3])
    const b = Uint8Array.from([0, 1, 2, 3, 4])

    expect(equals(a, b)).to.be.false()
  })
})
