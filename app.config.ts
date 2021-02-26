// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpoConfig, ConfigContext } from "@expo/config";

// eslint-disable-next-line import/extensions
import * as pkg from "./package.json";

export default ({ config }: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  version: pkg.version || "1.0.0",
  ios: {
    ...config.ios,
    buildNumber: pkg.version || "1.0.0",
  },
  android: {
    ...config.android,
    versionCode: Number(pkg.version.split(".").join("")) || 100,
  },
});
