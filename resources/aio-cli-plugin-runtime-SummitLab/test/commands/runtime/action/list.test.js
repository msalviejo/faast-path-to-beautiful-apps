/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { stdout } = require('stdout-stderr')
const TheCommand = require('../../../../src/commands/runtime/action/list.js')
const RuntimeBaseCommand = require('../../../../src/RuntimeBaseCommand.js')
const ow = require('openwhisk').mock
const owAction = 'actions.list'

test('exports', async () => {
  expect(typeof TheCommand).toEqual('function')
  expect(TheCommand.prototype instanceof RuntimeBaseCommand).toBeTruthy()
})

test('description', async () => {
  expect(TheCommand.description).toBeDefined()
})

test('aliases', async () => {
  expect(TheCommand.aliases).toEqual([])
})

test('flags', async () => {
  expect(TheCommand.flags).toMatchObject({ 'limit': { 'char': 'l', 'description': 'only return LIMIT number of actions from the collection (default 30)', 'hidden': false, 'multiple': false, 'required': false }, 'skip': { 'char': 's', 'description': 'exclude the first SKIP number of actions from the result', 'multiple': false, 'required': false } })
})

test('args', async () => {
  expect(TheCommand.args).toBeUndefined()
})

describe('instance methods', () => {
  let command

  beforeEach(() => {
    command = new TheCommand([])
  })

  describe('run', () => {
    test('exists', async () => {
      expect(command.run).toBeInstanceOf(Function)
    })

    test('return list of actions with limits', () => {
      let cmd = ow.mockResolvedFixture(owAction, 'action/list.json')
      command.argv = ['--limit', '1']
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalledWith({ 'limit': 1 })
          expect(stdout.output).toMatchFixture('action/list-output.txt')
        })
    })

    test('return list of actions', () => {
      let cmd = ow.mockResolvedFixture(owAction, 'action/list.json')
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalled()
          expect(stdout.output).toMatchFixture('action/list-output.txt')
        })
    })

    test('return list of actions - coverage (public/private)', () => {
      const json = fixtureJson('action/list.json')
      json[0].publish = true

      let cmd = ow.mockResolved(owAction, json)
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalled()
          expect(stdout.output).toMatchFixture('action/list-output-2.txt')
        })
    })

    test('return list of actions, --json flag', () => {
      let cmd = ow.mockResolvedFixture(owAction, 'action/list.json')
      command.argv = [ '--json' ]
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalled()
          expect(JSON.parse(stdout.output)).toMatchFixtureJson('action/list.json')
        })
    })

    test('return list of actions with skip (no actions)', () => {
      let cmd = ow.mockResolved(owAction, [])
      command.argv = ['--skip', '3']
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalledWith({ 'skip': 3 })
          expect(stdout.output).toMatch('actions                                           ')
        })
    })

    test('errors out on api error', (done) => {
      ow.mockRejected(owAction, new Error('an error'))
      return command.run()
        .then(() => done.fail('does not throw error'))
        .catch((err) => {
          expect(err).toMatchObject(new Error('failed to list the actions: an error'))
          done()
        })
    })
  })
})
