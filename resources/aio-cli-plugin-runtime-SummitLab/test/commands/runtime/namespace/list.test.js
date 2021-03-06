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

const TheCommand = require('../../../../src/commands/runtime/namespace/list.js')
const RuntimeBaseCommand = require('../../../../src/RuntimeBaseCommand.js')
const ow = require('openwhisk').mock
const { stdout } = require('stdout-stderr')
const owAction = 'namespaces.list'

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

test('args', async () => {
  expect(TheCommand.args).not.toBeDefined()
})

test('base flags included in command flags',
  createTestBaseFlagsFunction(TheCommand, RuntimeBaseCommand)
)

describe('instance methods', () => {
  let command

  beforeEach(() => {
    command = new TheCommand([])
  })

  describe('run', () => {
    test('exists', async () => {
      expect(command.run).toBeInstanceOf(Function)
    })

    test('simple namespace list', (done) => {
      let cmd = ow.mockResolved(owAction, fixtureFile('namespace/list.json'))

      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalled()
          expect(stdout.output).toMatchFixture('namespace/list.txt')
          done()
        })
    })

    test('simple namespace list, --json flag', (done) => {
      let cmd = ow.mockResolved(owAction, fixtureFile('namespace/list.json'))

      command.argv = [ '--json' ]
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalled()
          expect(JSON.parse(stdout.output)).toMatchFixtureJson('namespace/list.json')
          done()
        })
    })

    test('namespace list, error', (done) => {
      const namespaceError = 'namespace error'

      ow.mockRejected(owAction, namespaceError)
      return command.run()
        .then(() => done.fail('does not throw error'))
        .catch((err) => {
          expect(err).toMatchObject(new Error(`failed to list namespaces: "namespace error"`))
          done()
        })
    })
  })
})
