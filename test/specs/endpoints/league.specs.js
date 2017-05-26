/* eslint-disable max-nested-callbacks */
var chai = require('chai')

var expect = chai.expect,
  should = chai.should,
  assert = chai.assert

require('dotenv').config()

var init = require('../../../utils/init')

const name = 'Chaser Cat'
const id = 32932398
const accId = 47776491

describe('League', function () {
  this.timeout(0)

  describe('get all leagues', function () {
    it('should throw on empty', function () {
      assert.throws(() => init().League.get(), Error)
    })

    describe('object params', function () {
      describe('by id', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init().League.get({ id }, function (err, data) {
              expect(err).to.be.null
              expect(data).to.not.be.undefined
              done()
            })
          })
        })

        describe('by promise', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .get({ id })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('by name', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init().League.get({ name }, function (err, data) {
              expect(err).to.be.null
              expect(data).to.not.be.undefined
              done()
            })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .get({ name })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('through account id', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init().League.get({ accId }, function (err, data) {
              expect(err).to.be.null
              expect(data).to.not.be.undefined
              done()
            })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init().League
              .get({ accId })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })
    })
  })

  describe('get league positions', function () {
    describe('object params', function () {
      it('should throw on empty', function () {
        assert.throws(() => init().League.positions(), Error)
      })

      describe('by id', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ id }, function (err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ id })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('by name', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ name }, function (err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ name })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('by account id', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ accId }, function (err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .League
              .positions({ accId })
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })
    })
  })

  describe('get master leagues', function () {
    describe('standard params', function () {
      it('should not throw with no args', function () {
        assert.doesNotThrow(() => init().Master.list(), Error)
      })

      it('should throw with invalid queue type', function () {
        assert.throws(() => init().Master.list(420), Error)
      })

      it('should not throw with queue', function () {
        assert.doesNotThrow(() => init().Master.list('RANKED_SOLO_5x5'), Error)
      })

      it('should not throw with queue & region (2 args)', function () {
        assert.doesNotThrow(() => init().Master.list('RANKED_SOLO_5x5', 'na'), Error)
      })

      it('should not throw with region & cb (2 args)', function () {
        assert.doesNotThrow(() => init().Master.list('na', function () { }), Error)
      })

      it('should not throw with queue & cb (2 args)', function () {
        assert.doesNotThrow(() => init().Master.list('RANKED_SOLO_5x5', function () { }), Error)
      })

      it('should not throw with queue & region & cb (3 args)', function () {
        assert.doesNotThrow(() => init().Master.list('RANKED_SOLO_5x5', 'na', function () { }), Error)
      })

      it('should not throw with cb (1 args)', function () {
        assert.doesNotThrow(() => init().Master.list(function () { }), Error)
      })

      it('should be a successful call with no args', function (done) {
        init().Master.list()
          .then(data => {
            expect(data).to.not.be.undefined
            done()
          })
      })
    })
  })

  describe('get challenger leagues', function () {
    describe('standard params', function () {
      it('should not throw with no args', function () {
        assert.doesNotThrow(() => init().Challenger.list(), Error)
      })

      it('should throw with invalid queue type', function () {
        assert.throws(() => init().Challenger.list(420), Error)
      })

      it('should not throw with queue', function () {
        assert.doesNotThrow(() => init().Challenger.list('RANKED_SOLO_5x5'), Error)
      })

      it('should not throw with queue & region (2 args)', function () {
        assert.doesNotThrow(() => init().Challenger.list('RANKED_SOLO_5x5', 'na'), Error)
      })

      it('should not throw with region & cb (2 args)', function () {
        assert.doesNotThrow(() => init().Challenger.list('na', function () { }), Error)
      })

      it('should not throw with queue & cb (2 args)', function () {
        assert.doesNotThrow(() => init().Challenger.list('RANKED_SOLO_5x5', function () { }), Error)
      })

      it('should not throw with queue & region & cb (3 args)', function () {
        assert.doesNotThrow(() => init().Challenger.list('RANKED_SOLO_5x5', 'na', function () { }), Error)
      })

      it('should not throw with cb (1 args)', function () {
        assert.doesNotThrow(() => init().Challenger.list(function () { }), Error)
      })

      it('should be a successful call with no args', function (done) {
        init().Challenger.list()
          .then(data => {
            expect(data).to.not.be.undefined
            done()
          })
      })
    })
  })
})