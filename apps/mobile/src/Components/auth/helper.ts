import { LoginOutput } from "@incoguzz/graphql";
import EncryptedStorage from "react-native-encrypted-storage";

type IUserTokens = Pick<LoginOutput, "accessToken" | "refreshToken">;

export class AuthHelper {
  static async storeTokens({ accessToken, refreshToken }: IUserTokens) {
    try {
      await EncryptedStorage.setItem("accessToken", accessToken);
      await EncryptedStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      // There was an error on the native side
    }
  }
  static async getAccessToken() {
    try {
      const accessToken = await EncryptedStorage.getItem("accessToken");
      return accessToken;
    } catch (error) {
      return null;
    }
  }
  static async clearTokens() {
    try {
      await EncryptedStorage.removeItem("accessToken");
      await EncryptedStorage.removeItem("refreshToken");
    } catch (error) {}
  }
}
