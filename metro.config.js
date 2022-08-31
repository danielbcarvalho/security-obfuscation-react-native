/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
