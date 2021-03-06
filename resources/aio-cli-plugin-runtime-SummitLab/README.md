[![Build Status](https://aiocli.ci.corp.adobe.com:12001/buildStatus/icon?job=adobe-io-plugin-runtime/master)](https://aiocli.ci.corp.adobe.com:12001/job/adobe-io-plugin-runtime/job/master/)

# aio-cli-plugin-runtime

Adobe I/O Runtime plugin for the Adobe I/O CLI

---


<!-- toc -->
* [aio-cli-plugin-runtime](#aio-cli-plugin-runtime)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @adobe/aio-cli-plugin-runtime
$ ./bin/run COMMAND
running command...
$ ./bin/run (-v|--version|version)
@adobe/aio-cli-plugin-runtime/0.0.1 darwin-x64 node-v8.15.0
$ ./bin/run --help [COMMAND]
USAGE
  $ ./bin/run COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`./bin/run runtime`](#bin-run-runtime)
* [`./bin/run runtime:action`](#bin-run-runtimeaction)
* [`./bin/run runtime:action:create ACTIONNAME ACTIONPATH`](#bin-run-runtimeactioncreate-actionname-actionpath)
* [`./bin/run runtime:action:delete ACTIONNAME`](#bin-run-runtimeactiondelete-actionname)
* [`./bin/run runtime:action:get ACTIONNAME`](#bin-run-runtimeactionget-actionname)
* [`./bin/run runtime:action:invoke ACTIONNAME`](#bin-run-runtimeactioninvoke-actionname)
* [`./bin/run runtime:action:list`](#bin-run-runtimeactionlist)
* [`./bin/run runtime:action:update ACTIONNAME ACTIONPATH`](#bin-run-runtimeactionupdate-actionname-actionpath)
* [`./bin/run runtime:activation`](#bin-run-runtimeactivation)
* [`./bin/run runtime:activation:get ACTIVATIONID`](#bin-run-runtimeactivationget-activationid)
* [`./bin/run runtime:activation:list [ACTIVATIONID]`](#bin-run-runtimeactivationlist-activationid)
* [`./bin/run runtime:activation:logs ACTIVATIONID`](#bin-run-runtimeactivationlogs-activationid)
* [`./bin/run runtime:activation:result ACTIVATIONID`](#bin-run-runtimeactivationresult-activationid)
* [`./bin/run runtime:deploy`](#bin-run-runtimedeploy)
* [`./bin/run runtime:namespace`](#bin-run-runtimenamespace)
* [`./bin/run runtime:namespace:get`](#bin-run-runtimenamespaceget)
* [`./bin/run runtime:namespace:list`](#bin-run-runtimenamespacelist)
* [`./bin/run runtime:package`](#bin-run-runtimepackage)
* [`./bin/run runtime:package:bind PACKAGENAME BINDPACKAGENAME`](#bin-run-runtimepackagebind-packagename-bindpackagename)
* [`./bin/run runtime:package:create PACKAGENAME`](#bin-run-runtimepackagecreate-packagename)
* [`./bin/run runtime:package:delete PACKAGENAME`](#bin-run-runtimepackagedelete-packagename)
* [`./bin/run runtime:package:get PACKAGENAME`](#bin-run-runtimepackageget-packagename)
* [`./bin/run runtime:package:list [NAMESPACE]`](#bin-run-runtimepackagelist-namespace)
* [`./bin/run runtime:package:update PACKAGENAME`](#bin-run-runtimepackageupdate-packagename)
* [`./bin/run runtime:property`](#bin-run-runtimeproperty)
* [`./bin/run runtime:property:get`](#bin-run-runtimepropertyget)
* [`./bin/run runtime:property:set`](#bin-run-runtimepropertyset)
* [`./bin/run runtime:property:unset`](#bin-run-runtimepropertyunset)
* [`./bin/run runtime:route`](#bin-run-runtimeroute)
* [`./bin/run runtime:route:create BASEPATH RELPATH APIVERB ACTION`](#bin-run-runtimeroutecreate-basepath-relpath-apiverb-action)
* [`./bin/run runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`](#bin-run-runtimeroutedelete-basepathorapiname-relpath-apiverb)
* [`./bin/run runtime:route:get BASEPATHORAPINAME`](#bin-run-runtimerouteget-basepathorapiname)
* [`./bin/run runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`](#bin-run-runtimeroutelist-basepath-relpath-apiverb)
* [`./bin/run runtime:rule`](#bin-run-runtimerule)
* [`./bin/run runtime:rule:create NAME TRIGGER ACTION`](#bin-run-runtimerulecreate-name-trigger-action)
* [`./bin/run runtime:rule:delete NAME`](#bin-run-runtimeruledelete-name)
* [`./bin/run runtime:rule:disable NAME`](#bin-run-runtimeruledisable-name)
* [`./bin/run runtime:rule:enable NAME`](#bin-run-runtimeruleenable-name)
* [`./bin/run runtime:rule:get NAME`](#bin-run-runtimeruleget-name)
* [`./bin/run runtime:rule:list`](#bin-run-runtimerulelist)
* [`./bin/run runtime:rule:status NAME`](#bin-run-runtimerulestatus-name)
* [`./bin/run runtime:rule:update NAME TRIGGER ACTION`](#bin-run-runtimeruleupdate-name-trigger-action)
* [`./bin/run runtime:trigger`](#bin-run-runtimetrigger)
* [`./bin/run runtime:trigger:create TRIGGERNAME`](#bin-run-runtimetriggercreate-triggername)
* [`./bin/run runtime:trigger:delete TRIGGERPATH`](#bin-run-runtimetriggerdelete-triggerpath)
* [`./bin/run runtime:trigger:fire TRIGGERNAME`](#bin-run-runtimetriggerfire-triggername)
* [`./bin/run runtime:trigger:get TRIGGERPATH`](#bin-run-runtimetriggerget-triggerpath)
* [`./bin/run runtime:trigger:list`](#bin-run-runtimetriggerlist)
* [`./bin/run runtime:trigger:update TRIGGERNAME`](#bin-run-runtimetriggerupdate-triggername)

## `./bin/run runtime`

Execute runtime commands

```
USAGE
  $ ./bin/run runtime

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/index.js)_

## `./bin/run runtime:action`

Manage your actions

```
USAGE
  $ ./bin/run runtime:action

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/action/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/index.js)_

## `./bin/run runtime:action:create ACTIONNAME ACTIONPATH`

Creates an Action

```
USAGE
  $ ./bin/run runtime:action:create ACTIONNAME ACTIONPATH

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter values in KEY VALUE format

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        authorization KEY

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API HOST

  --help                                 Show help

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action
```

_See code: [src/commands/runtime/action/create.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/create.js)_

## `./bin/run runtime:action:delete ACTIONNAME`

Deletes an Action

```
USAGE
  $ ./bin/run runtime:action:delete ACTIONNAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/action/delete.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/delete.js)_

## `./bin/run runtime:action:get ACTIONNAME`

Retrieves an Action

```
USAGE
  $ ./bin/run runtime:action:get ACTIONNAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/action/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/get.js)_

## `./bin/run runtime:action:invoke ACTIONNAME`

Invokes an Action

```
USAGE
  $ ./bin/run runtime:action:invoke ACTIONNAME

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -b, --blocking               blocking invoke
  -d, --debug=debug            Debug level output
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -r, --result                 blocking invoke; show only activation result (unless there is a failure)
  -u, --auth=auth              authorization KEY
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API HOST
  --help                       Show help
  --version                    Show version
```

_See code: [src/commands/runtime/action/invoke.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/invoke.js)_

## `./bin/run runtime:action:list`

Lists all the Actions

```
USAGE
  $ ./bin/run runtime:action:list

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -l, --limit=limit  only return LIMIT number of actions from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of actions from the result
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --json             output raw json
  --version          Show version
```

_See code: [src/commands/runtime/action/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/list.js)_

## `./bin/run runtime:action:update ACTIONNAME ACTIONPATH`

Updates an Action

```
USAGE
  $ ./bin/run runtime:action:update ACTIONNAME ACTIONPATH

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the action for json params
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -l, --logsize=logsize                  the maximum log size LIMIT in MB for the action (default 10)
  -m, --memory=memory                    the maximum memory LIMIT in MB for the action (default 256)
  -p, --param=param                      parameter to be passed to the action

  -t, --timeout=timeout                  the timeout LIMIT in milliseconds after which the action is terminated (default
                                         60000)

  -u, --auth=auth                        authorization KEY

  -v, --verbose                          Verbose output

  --apihost=apihost                      whisk API HOST

  --help                                 Show help

  --kind=kind                            the KIND of the action runtime (example: swift:default, nodejs:default)

  --version                              Show version

  --web=true|yes|false|no|raw            treat ACTION as a web action or as a raw HTTP web action. web = true/yes|raw or
                                         web = false/no
```

_See code: [src/commands/runtime/action/update.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/action/update.js)_

## `./bin/run runtime:activation`

Manage your activations

```
USAGE
  $ ./bin/run runtime:activation

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/activation/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/activation/index.js)_

## `./bin/run runtime:activation:get ACTIVATIONID`

Retrieves an Activation

```
USAGE
  $ ./bin/run runtime:activation:get ACTIVATIONID

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/activation/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/activation/get.js)_

## `./bin/run runtime:activation:list [ACTIVATIONID]`

Retrieves the Logs for an Activation

```
USAGE
  $ ./bin/run runtime:activation:list [ACTIVATIONID]

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check

  -l, --limit=limit  only return LIMIT number of activations from the collection with a maximum LIMIT of 200 activations
                     (default 30)

  -s, --skip=skip    exclude the first SKIP number of activations from the result

  -u, --auth=auth    authorization KEY

  -v, --verbose      Verbose output

  --apihost=apihost  whisk API HOST

  --help             Show help

  --json             output raw json

  --since=since      return activations with timestamps later than SINCE; measured in milliseconds since Th, 01, Jan
                     1970

  --upto=upto        return activations with timestamps earlier than UPTO; measured in milliseconds since Th, 01, Jan
                     1970

  --version          Show version
```

_See code: [src/commands/runtime/activation/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/activation/list.js)_

## `./bin/run runtime:activation:logs ACTIVATIONID`

Retrieves the Logs for an Activation

```
USAGE
  $ ./bin/run runtime:activation:logs ACTIVATIONID

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/activation/logs.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/activation/logs.js)_

## `./bin/run runtime:activation:result ACTIVATIONID`

Retrieves the Results for an Activation

```
USAGE
  $ ./bin/run runtime:activation:result ACTIVATIONID

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/activation/result.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/activation/result.js)_

## `./bin/run runtime:deploy`

The Runtime Deployment Tool

```
USAGE
  $ ./bin/run runtime:deploy

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -d, --debug=debug            Debug level output
  -i, --insecure               bypass certificate check
  -m, --manifest=manifest      the manifest file location
  -u, --auth=auth              authorization KEY
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API HOST
  --help                       Show help
  --param=param                parameter values in KEY VALUE format
  --version                    Show version
```

_See code: [src/commands/runtime/deploy/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/deploy/index.js)_

## `./bin/run runtime:namespace`

Manage your namespaces

```
USAGE
  $ ./bin/run runtime:namespace

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/namespace/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/namespace/index.js)_

## `./bin/run runtime:namespace:get`

Get triggers, actions, and rules in the registry for namespace

```
USAGE
  $ ./bin/run runtime:namespace:get

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --json             output raw json
  --version          Show version

ALIASES
  $ ./bin/run runtime:list
```

_See code: [src/commands/runtime/namespace/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/namespace/get.js)_

## `./bin/run runtime:namespace:list`

Lists all of your namespaces for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:namespace:list

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --json             output raw json
  --version          Show version
```

_See code: [src/commands/runtime/namespace/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/namespace/list.js)_

## `./bin/run runtime:package`

Manage your packages

```
USAGE
  $ ./bin/run runtime:package

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/package/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/index.js)_

## `./bin/run runtime:package:bind PACKAGENAME BINDPACKAGENAME`

Bind parameters to a package

```
USAGE
  $ ./bin/run runtime:package:bind PACKAGENAME BINDPACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        authorization KEY
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API HOST
  --help                                 Show help
  --version                              Show version
```

_See code: [src/commands/runtime/package/bind.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/bind.js)_

## `./bin/run runtime:package:create PACKAGENAME`

Creates a Package

```
USAGE
  $ ./bin/run runtime:package:create PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            parameter to be passed to the package for json file
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameters in key value pairs to be passed to the package
  -u, --auth=auth                        authorization KEY
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API HOST
  --help                                 Show help
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version
```

_See code: [src/commands/runtime/package/create.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/create.js)_

## `./bin/run runtime:package:delete PACKAGENAME`

Deletes a Package

```
USAGE
  $ ./bin/run runtime:package:delete PACKAGENAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/package/delete.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/delete.js)_

## `./bin/run runtime:package:get PACKAGENAME`

Retrieves a Package

```
USAGE
  $ ./bin/run runtime:package:get PACKAGENAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/package/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/get.js)_

## `./bin/run runtime:package:list [NAMESPACE]`

Lists all the Packages

```
USAGE
  $ ./bin/run runtime:package:list [NAMESPACE]

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -l, --limit=limit  only return LIMIT number of packages from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of packages from the result
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/package/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/list.js)_

## `./bin/run runtime:package:update PACKAGENAME`

Updates a Package

```
USAGE
  $ ./bin/run runtime:package:update PACKAGENAME

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth=auth                        authorization KEY
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API HOST
  --help                                 Show help
  --shared=true|yes|false|no             parameter to be passed to indicate whether package is shared or private
  --version                              Show version
```

_See code: [src/commands/runtime/package/update.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/package/update.js)_

## `./bin/run runtime:property`

Execute property commands

```
USAGE
  $ ./bin/run runtime:property

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/property/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/property/index.js)_

## `./bin/run runtime:property:get`

get property

```
USAGE
  $ ./bin/run runtime:property:get

OPTIONS
  -d, --debug=debug  Debug level output
  -v, --verbose      Verbose output
  --all              all properties
  --apibuild         whisk API build version
  --apibuildno       whisk API build number
  --apihost          whisk API host
  --apiversion       whisk API version
  --auth             whisk auth
  --cliversion       whisk CLI version
  --help             Show help
  --namespace        whisk namespace
  --version          Show version
```

_See code: [src/commands/runtime/property/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/property/get.js)_

## `./bin/run runtime:property:set`

set property

```
USAGE
  $ ./bin/run runtime:property:set

OPTIONS
  -d, --debug=debug        Debug level output
  -v, --verbose            Verbose output
  --apihost=apihost        whisk API host
  --apiversion=apiversion  whisk API version
  --auth=auth              whisk auth
  --help                   Show help
  --namespace=namespace    whisk namespace
  --version                Show version
```

_See code: [src/commands/runtime/property/set.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/property/set.js)_

## `./bin/run runtime:property:unset`

unset property

```
USAGE
  $ ./bin/run runtime:property:unset

OPTIONS
  -d, --debug=debug  Debug level output
  -v, --verbose      Verbose output
  --apihost          whisk API host
  --apiversion       whisk API version
  --auth             whisk auth
  --help             Show help
  --namespace        whisk namespace
  --version          Show version
```

_See code: [src/commands/runtime/property/unset.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/property/unset.js)_

## `./bin/run runtime:route`

Manage your routes

```
USAGE
  $ ./bin/run runtime:route

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/route/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/route/index.js)_

## `./bin/run runtime:route:create BASEPATH RELPATH APIVERB ACTION`

create a new api route

```
USAGE
  $ ./bin/run runtime:route:create BASEPATH RELPATH APIVERB ACTION

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb
  ACTION    The action to call

OPTIONS
  -d, --debug=debug                                 Debug level output
  -i, --insecure                                    bypass certificate check

  -n, --apiname=apiname                             Friendly name of the API; ignored when CFG_FILE is specified
                                                    (default BASE_PATH)

  -r, --response-type=html|http|json|text|svg|json  [default: json] Set the web action response TYPE.

  -u, --auth=auth                                   authorization KEY

  -v, --verbose                                     Verbose output

  --apihost=apihost                                 whisk API HOST

  --help                                            Show help

  --version                                         Show version
```

_See code: [src/commands/runtime/route/create.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/route/create.js)_

## `./bin/run runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]`

delete an API

```
USAGE
  $ ./bin/run runtime:route:delete BASEPATHORAPINAME [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name
  RELPATH            The path of the api relative to the base path
  APIVERB            (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/route/delete.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/route/delete.js)_

## `./bin/run runtime:route:get BASEPATHORAPINAME`

get API details

```
USAGE
  $ ./bin/run runtime:route:get BASEPATHORAPINAME

ARGUMENTS
  BASEPATHORAPINAME  The base path or api name

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/route/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/route/get.js)_

## `./bin/run runtime:route:list [BASEPATH] [RELPATH] [APIVERB]`

list route/apis for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:route:list [BASEPATH] [RELPATH] [APIVERB]

ARGUMENTS
  BASEPATH  The base path of the api
  RELPATH   The path of the api relative to the base path
  APIVERB   (get|post|put|patch|delete|head|options) The http verb

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --json             output raw json
  --version          Show version
```

_See code: [src/commands/runtime/route/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/route/list.js)_

## `./bin/run runtime:rule`

Manage your rules

```
USAGE
  $ ./bin/run runtime:rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/index.js)_

## `./bin/run runtime:rule:create NAME TRIGGER ACTION`

Create a Rule

```
USAGE
  $ ./bin/run runtime:rule:create NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/create.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/create.js)_

## `./bin/run runtime:rule:delete NAME`

Delete a Rule

```
USAGE
  $ ./bin/run runtime:rule:delete NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/delete.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/delete.js)_

## `./bin/run runtime:rule:disable NAME`

Disable a Rule

```
USAGE
  $ ./bin/run runtime:rule:disable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/disable.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/disable.js)_

## `./bin/run runtime:rule:enable NAME`

Enable a Rule

```
USAGE
  $ ./bin/run runtime:rule:enable NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/enable.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/enable.js)_

## `./bin/run runtime:rule:get NAME`

Retrieves a Rule

```
USAGE
  $ ./bin/run runtime:rule:get NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/get.js)_

## `./bin/run runtime:rule:list`

Retrieves a list of Rules

```
USAGE
  $ ./bin/run runtime:rule:list

OPTIONS
  -c, --count        Count number of rules returned
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] Limit number of rules returned. Default 30
  -s, --skip=skip    Skip number of rules returned
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/list.js)_

## `./bin/run runtime:rule:status NAME`

Gets the status of a rule

```
USAGE
  $ ./bin/run runtime:rule:status NAME

ARGUMENTS
  NAME  Name of the rule

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/status.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/status.js)_

## `./bin/run runtime:rule:update NAME TRIGGER ACTION`

Update a Rule

```
USAGE
  $ ./bin/run runtime:rule:update NAME TRIGGER ACTION

ARGUMENTS
  NAME     Name of the rule
  TRIGGER  Name of the trigger
  ACTION   Name of the action

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/rule/update.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/rule/update.js)_

## `./bin/run runtime:trigger`

Manage your triggers

```
USAGE
  $ ./bin/run runtime:trigger

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/trigger/index.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/index.js)_

## `./bin/run runtime:trigger:create TRIGGERNAME`

Create a trigger for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:create TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth=auth                        authorization KEY
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API HOST
  --help                                 Show help
  --version                              Show version
```

_See code: [src/commands/runtime/trigger/create.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/create.js)_

## `./bin/run runtime:trigger:delete TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:delete TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/trigger/delete.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/delete.js)_

## `./bin/run runtime:trigger:fire TRIGGERNAME`

Fire a trigger for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:fire TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -P, --param-file=param-file  FILE containing parameter values in JSON format
  -d, --debug=debug            Debug level output
  -i, --insecure               bypass certificate check
  -p, --param=param            parameter values in KEY VALUE format
  -u, --auth=auth              authorization KEY
  -v, --verbose                Verbose output
  --apihost=apihost            whisk API HOST
  --help                       Show help
  --version                    Show version
```

_See code: [src/commands/runtime/trigger/fire.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/fire.js)_

## `./bin/run runtime:trigger:get TRIGGERPATH`

Get a trigger for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:get TRIGGERPATH

ARGUMENTS
  TRIGGERPATH  The name/path of the trigger, in the format /NAMESPACE/NAME

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --version          Show version
```

_See code: [src/commands/runtime/trigger/get.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/get.js)_

## `./bin/run runtime:trigger:list`

Lists all of your triggers for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:list

OPTIONS
  -d, --debug=debug  Debug level output
  -i, --insecure     bypass certificate check
  -l, --limit=limit  [default: 30] only return LIMIT number of triggers from the collection (default 30)
  -s, --skip=skip    exclude the first SKIP number of triggers from the result
  -u, --auth=auth    authorization KEY
  -v, --verbose      Verbose output
  --apihost=apihost  whisk API HOST
  --help             Show help
  --json             output raw json
  --version          Show version
```

_See code: [src/commands/runtime/trigger/list.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/list.js)_

## `./bin/run runtime:trigger:update TRIGGERNAME`

Update or create a trigger for Adobe I/O Runtime

```
USAGE
  $ ./bin/run runtime:trigger:update TRIGGERNAME

ARGUMENTS
  TRIGGERNAME  The name of the trigger

OPTIONS
  -A, --annotation-file=annotation-file  FILE containing annotation values in JSON format
  -P, --param-file=param-file            FILE containing parameter values in JSON format
  -a, --annotation=annotation            annotation values in KEY VALUE format
  -d, --debug=debug                      Debug level output
  -i, --insecure                         bypass certificate check
  -p, --param=param                      parameter values in KEY VALUE format
  -u, --auth=auth                        authorization KEY
  -v, --verbose                          Verbose output
  --apihost=apihost                      whisk API HOST
  --help                                 Show help
  --version                              Show version
```

_See code: [src/commands/runtime/trigger/update.js](https://github.com/adobe/aio-cli-plugin-runtime/blob/v0.0.1/src/commands/runtime/trigger/update.js)_
<!-- commandsstop -->
