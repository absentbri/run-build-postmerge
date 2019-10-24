# run-build-postmerge
Allows you to specify folders to monitor for changes to be automatically built with a post-merge git hook.
Designed to work with husky in:
`"post-merge": "run-build-postmerge"`

## Usage
Add the following to your `package.json` if your usage differs from the shown defaults below:
```
"runbuildpostmerge": {
    "paths": [ "src/" ],
    "script": "build"
}
```
