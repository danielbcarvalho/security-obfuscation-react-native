# Reverse Engineering Apk

## Requirements
- [React Native CLI](https://reactnative.dev/docs/environment-setup) </br>

- [Yarn](https://yarnpkg.com) </br>

## How to use this repo
- Clone this repo: `git@github.com:danielbcarvalho/security-obfuscation-rn.git`;
- Navigate to the downloaded folder and then run `yarn` on terminal to install dependencies;
- Generate APK: `yarn apk` install on the device;

### Reverse Engineering APK after install (from Google Play for example);
Connect the device via USB
- `adb devices` - list devices
- `adb shell pm list packages` - list all installed apps
- `adb shell pm list packages | grep -i security ` - list specific installed app
- `adb shell pm path com.security` - get app path (copy the path)
- `adb pull /path` - get APK (use path from previous step)

## Getting index.android.bundle
- Extract the APK (use RAR, unarchiver, etc)
- Go to folder assets/index.android.bundle

## Obfuscation
- [Javascript Obfuscator](https://www.npmjs.com/package/javascript-obfuscator)
- [Obfuscator.io Metro Plugin](https://www.npmjs.com/package/obfuscator-io-metro-plugin)

### metro.config.js (basic config)
```
const jsoMetroPlugin = require('obfuscator-io-metro-plugin')(
  {
    compact: true,
    // sourceMap: true,
    controlFlowFlattening: true,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    rotateStringArray: true,
    selfDefending: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArray: true,
    stringArrayThreshold: 0.75,
  },
  {
    runInDev: false /* optional */,
    logObfuscatedFiles: true /* optional generated files will be located at ./.jso */,
    // sourceMapLocation:
    //   './index.android.bundle.map' /* optional  only works if sourceMap: true in obfuscation option */,
  },
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  ...jsoMetroPlugin,
};


```
# Author

- 👨🏻‍💻 LinkedIn: [Daniel Carvalho](https://www.linkedin.com/in/danielcarvalho-dev)