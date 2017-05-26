/* eslint-disable max-nested-callbacks */
var chai = require('chai')

var expect = chai.expect,
  should = chai.should,
  assert = chai.assert

require('dotenv').config()

var init = require('../../../utils/init')

describe('Runes', function () {
  describe('get', function () {
    describe('object param', function () {
      it('should throw on empty', function () {
        assert.throws(() => init().Runes.get(), Error)
      })
    })

    describe('standard params', function () {
      describe('by', function () {
        describe('id', function () {
          it('should throw on empty', function () {
            assert.throws(() => init().Runes.by.id(), Error)
          })
        })

        describe('name', function () {
          it('should throw on empty', function () {
            assert.throws(() => init().Runes.by.name(), Error)
          })
        })

        describe('account', function () {
          it('should throw on empty', function () {
            assert.throws(() => init().Runes.by.account(), Error)
          })
        })
      })
    })
  })
})