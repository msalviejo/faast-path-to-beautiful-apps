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

const TheCommand = require('../../../../src/commands/runtime/rule/update.js')
const RuntimeBaseCommand = require('../../../../src/RuntimeBaseCommand.js')
const dedent = require('dedent-js')
const owAction = 'rules.update'
const { stdout } = require('stdout-stderr')
const ow = require('openwhisk').mock

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
  const args = TheCommand.args
  expect(args).toBeDefined()
  expect(args.length).toEqual(3)

  expect(args[0].name).toEqual('name')
  expect(args[0].required).toBeTruthy()
  expect(args[0].description).toBeDefined()

  expect(args[1].name).toEqual('trigger')
  expect(args[1].required).toBeTruthy()
  expect(args[1].description).toBeDefined()

  expect(args[2].name).toEqual('action')
  expect(args[2].required).toBeTruthy()
  expect(args[2].description).toBeDefined()
})

test('base flags included in command flags',
  createTestBaseFlagsFunction(TheCommand, RuntimeBaseCommand)
)

test('flags', async () => {
  const flags = TheCommand.flags
  expect(flags).toBeDefined()
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

    test('no required args - throws exception', (done) => {
      return command.run()
        .then(() => done.fail('does not throw error'))
        .catch((err) => {
          expect(err).toMatchObject(new Error(dedent`
          Missing 3 required args:
          name     Name of the rule
          trigger  Name of the trigger
          action   Name of the action
          See more help with --help`))
          done()
        })
    })

    test('update simple rule', () => {
      let cmd = ow.mockResolved(owAction, '')
      command.argv = ['nameFoo', 'triggerFoo', 'actionFoo']
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalledWith({
            name: 'nameFoo',
            action: 'actionFoo',
            trigger: 'triggerFoo'
          })
          expect(stdout.output).toMatch('')
        })
    })

    test('update simple rule --json', () => {
      let cmd = ow.mockResolved(owAction, '')
      command.argv = ['nameFoo', 'triggerFoo', 'actionFoo', '--json']
      return command.run()
        .then(() => {
          expect(cmd).toHaveBeenCalledWith({
            name: 'nameFoo',
            action: 'actionFoo',
            trigger: 'triggerFoo'
          })
          expect(stdout.output).toMatch('')
        })
    })

    test('errors out on api error', (done) => {
      ow.mockRejected('rules.update', new Error('an error'))
      command.argv = ['nameFoo', 'triggerFoo', 'actionFoo']
      return command.run()
        .then(() => done.fail('does not throw error'))
        .catch((err) => {
          expect(err).toMatchObject(new Error('failed to update rule: an error'))
          done()
        })
    })
  })
})
