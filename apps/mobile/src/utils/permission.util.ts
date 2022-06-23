import { Permission, PermissionsAndroid, Platform } from "react-native";

export class PermissionUtil {
  static async grantPermissions(
    permissionGrants: Permission[],
  ): Promise<boolean> {
    if (Platform.OS === "android") {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.CAMERA,
        ]);

        console.log("write external stroage", grants);

        return permissionGrants?.every(
          grant => grants[grant] === PermissionsAndroid.RESULTS.GRANTED,
        )
          ? true
          : false;
      } catch (err) {
        console.error(err);
        return false;
      }
    } else {
      return true;
    }
  }
}
