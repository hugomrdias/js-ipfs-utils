'use strict'

/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')
const fromString = require('../../src/uint8arrays/from-string')
const TextEncoder = require('../../src/text-encoder')

describe('Uint8Array fromString', () => {
  it('creates a Uint8Array from a string', () => {
    const str = 'hello world'
    const arr = new TextEncoder('utf8').encode(str)

    expect(fromString(str)).to.deep.equal(arr)
  })

  it('creates a Uint8Array from a base16 string', () => {
    const str = '00010203aabbcc'
    const arr = Uint8Array.from([0, 1, 2, 3, 170, 187, 204])

    expect(fromString(str, 'base16')).to.deep.equal(arr)
  })

  it('creates a Uint8Array from a base64 string', () => {
    const str = 'AAECA6q7zA'
    const arr = Uint8Array.from([0, 1, 2, 3, 170, 187, 204])

    expect(fromString(str, 'base64')).to.deep.equal(arr)
  })
})
