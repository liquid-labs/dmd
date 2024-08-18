const Tom = require('test-runner').Tom
const helpers = require('../helpers/helpers')
const a = require('assert').strict

const tom = module.exports = new Tom()

tom.test('_addGroup scope, cat', function () {
  const fixture = [
    { name: 'aaa', scope: 'global', cat: 'main' },
    { name: 'bbb', scope: 'global', cat: 'main' },
    { name: 'ccc', scope: 'global', cat: 'main' },
    { name: 'ddd', scope: 'global', cat: 'pain' },
    { name: 'eee', scope: 'waters', cat: 'pain' },
    { name: 'fff', scope: 'waters', cat: 'pain' },
    { name: 'ggg', scope: 'waters', cat: 'pain' },
    { name: 'hhh', cat: 'main' },
    { name: 'iii', cat: 'main' },
    { name: 'jjj', scope: 'global' }
  ]

  const expected = [
    { name: 'aaa', scope: 'global', cat: 'main', _group: ['global', 'main'] },
    { name: 'bbb', scope: 'global', cat: 'main', _group: ['global', 'main'] },
    { name: 'ccc', scope: 'global', cat: 'main', _group: ['global', 'main'] },
    { name: 'ddd', scope: 'global', cat: 'pain', _group: ['global', 'pain'] },
    { name: 'eee', scope: 'waters', cat: 'pain', _group: ['waters', 'pain'] },
    { name: 'fff', scope: 'waters', cat: 'pain', _group: ['waters', 'pain'] },
    { name: 'ggg', scope: 'waters', cat: 'pain', _group: ['waters', 'pain'] },
    { name: 'hhh', cat: 'main', _group: [null, 'main'] },
    { name: 'iii', cat: 'main', _group: [null, 'main'] },
    { name: 'jjj', scope: 'global', _group: ['global', null] }
  ]

  const result = helpers._addGroup(fixture, ['scope', 'cat'])
  a.deepEqual(result, expected)
})

tom.test('_groupBy scope, cat', function () {
  const fixture = [
    { name: 'aaa', scope: 'global', cat: 'main' },
    { name: 'bbb', scope: 'global', cat: 'main' },
    { name: 'ccc', scope: 'global', cat: 'main' },
    { name: 'ddd', scope: 'global', cat: 'pain' },
    { name: 'eee', scope: 'waters', cat: 'pain' },
    { name: 'fff', scope: 'waters', cat: 'pain' },
    { name: 'ggg', scope: 'waters', cat: 'pain' },
    { name: 'hhh', cat: 'main' },
    { name: 'iii', cat: 'main' },
    { name: 'jjj', scope: 'global' }
  ]

  const expected = [
    { _title: 'global', level: 0, scope: 'global', kind: undefined, category: undefined },
    { _title: 'main', level: 1, scope: 'global', kind: undefined, category: undefined },
    { name: 'aaa', scope: 'global', cat: 'main', level: 2 },
    { name: 'bbb', scope: 'global', cat: 'main', level: 2 },
    { name: 'ccc', scope: 'global', cat: 'main', level: 2 },
    { _title: 'pain', level: 1, scope: 'global', kind: undefined, category: undefined },
    { name: 'ddd', scope: 'global', cat: 'pain', level: 2 },
    { _title: 'waters', level: 0, scope: 'waters', kind: undefined, category: undefined },
    { _title: 'pain', level: 1, scope: 'waters', kind: undefined, category: undefined },
    { name: 'eee', scope: 'waters', cat: 'pain', level: 2 },
    { name: 'fff', scope: 'waters', cat: 'pain', level: 2 },
    { name: 'ggg', scope: 'waters', cat: 'pain', level: 2 },
    { _title: 'main', level: 0, scope: undefined, kind: undefined, category: undefined },
    { name: 'hhh', cat: 'main', level: 1 },
    { name: 'iii', cat: 'main', level: 1 },
    { _title: 'global', level: 0, scope: 'global', kind: undefined, category: undefined },
    { name: 'jjj', scope: 'global', level: 1 }
  ]

  const result = helpers._groupBy(fixture, ['scope', 'cat'])
  a.deepEqual(result, expected)
})

tom.test('_groupBy skips if only one group', function () {
  const fixture = [
    { name: 'aaa', scope: 'global' },
    { name: 'bbb', scope: 'global' },
    { name: 'ccc', scope: 'global' }
  ]

  const expected = [
    { name: 'aaa', scope: 'global', level: 0 },
    { name: 'bbb', scope: 'global', level: 0 },
    { name: 'ccc', scope: 'global', level: 0 }
  ]

  const result = helpers._groupBy(fixture, ['scope', 'cat'])
  a.deepEqual(result, expected)
})

tom.test('_groupBy skips if only one group, where there are subgroups', function () {
  const fixture = [
    { name: 'aaa', scope: 'global' },
    { name: 'bbb', scope: 'global', cat: 'yeah' },
    { name: 'ccc', scope: 'global', cat: 'yeah' }
  ]

  const expected = [
    { name: 'aaa', scope: 'global', level: 0 },
    { _title: 'yeah', level: 0, scope: 'global', kind: undefined, category: undefined },
    { name: 'bbb', scope: 'global', cat: 'yeah', level: 1 },
    { name: 'ccc', scope: 'global', cat: 'yeah', level: 1 }
  ]

  const result = helpers._groupBy(fixture, ['scope', 'cat'])
  a.deepEqual(result, expected)
})
