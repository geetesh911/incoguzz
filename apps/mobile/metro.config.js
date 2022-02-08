/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const exclusionList = require("metro-config/src/defaults/exclusionList");
const getWorkspaces = require("get-yarn-workspaces");
const path = require("path");
const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

function getConfig(appDir, options = {}) {
  const workspaces = getWorkspaces(appDir);

  // Add additional Yarn workspace package roots to the module map
  // https://bit.ly/2LHHTP0
  const watchFolders = [
    path.resolve(appDir, "../..", "node_modules"),
    ...workspaces.filter(workspaceDir => workspaceDir !== appDir),
  ];

  return {
    watchFolders,
    resolver: {
      blacklistRE: exclusionList([
        // Ignore other act-natresolved reive installations outside of
        // mobile - this prevents a module naming collision when mapped.
        /^((?!mobile).)+[\/\\]node_modules[/\\]react-native[/\\].*/,

        // Ignore react-native-svg dependency in myapp-ui, mapped below.
        // react-native-svg must only be included once due to a side-effect. It
        // has not been hoisted as it requires native module linking here.
        // http://bit.ly/2LJ7V4b
        /@incoguzz\/ui[\/\\]node_modules[/\\]react-native-svg[/\\].*/,
      ]),
      extraNodeModules: {
        // Resolve all react-native module imports to the locally-installed version
        "react-native": path.resolve(appDir, "node_modules", "react-native"),

        // Resolve additional nohoist modules depended on by other packages
        "react-native-svg": path.resolve(
          appDir,
          "node_modules",
          "react-native-svg",
        ),

        // Resolve core-js imports to the locally installed version
        "core-js": path.resolve(appDir, "node_modules", "core-js"),
      },
      sourceExts: [...defaultResolver.sourceExts, "cjs"],
    },
  };
}

module.exports = getConfig(__dirname);
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
