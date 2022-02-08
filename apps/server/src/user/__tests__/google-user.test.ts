// import JWTHelper from "@/common/helpers/jwt.helper";
// import PrismaService from "@/common/services/prisma.service";
// import { gCall } from "@/utils/test-utils/gcall.util";
// import Container from "typedi";
// import { IUserVerificationJwtPayload } from "@/auth/interfaces/auth.interface";
// import {
//   definedGoogleUserData,
//   googleUserData,
// } from "./helpers/generate-fake-user-data";

// const prisma = new PrismaService();
// const jwtHelper = Container.get(JWTHelper);

// afterAll(async () => {
//   await prisma.user.deleteMany({});
// });

// describe("Google Registration", () => {
//   const { username, googleAccessToken, email, nickname } = googleUserData;

//   let userId: string;

//   it("should register a new user", async () => {
//     const googleSignUpMutation = `
//         mutation GoogleAuth($googleAuthInput: GoogleAuthInput!) {
//             googleAuth(googleAuthInput: $googleAuthInput) {
//                 email
//                 accessToken
//                 refreshToken
//             }
//         }
//     `;

//     const response = await gCall({
//       source: googleSignUpMutation,
//       variableValues: {
//         googleAuthInput: {
//           googleAccessToken,
//           username,
//         },
//       },
//     });

//     console.log(response);

//     userId = response.data?.googleAuth?.id;

//     expect(response).toMatchObject({
//       data: {
//         googleAuth: {
//           id: userId,
//           email,
//           username,
//           isVerified: false,
//         },
//       },
//     });
//   });

//   it("should verify user", async () => {
//     const verificationMutation = `
//       mutation VerifyToken($verificationToken: String!) {
//         verifyUserEmail(verificationToken: $verificationToken) {
//           email
//           username
//           accessToken
//           refreshToken
//           profile {
//             nickname
//           }
//         }
//       }
//     `;
//     const verificationToken =
//       jwtHelper.generateJwtToken<IUserVerificationJwtPayload>(
//         { email, userId },
//         `4h`,
//       );

//     const response = await gCall({
//       source: verificationMutation,
//       variableValues: {
//         verificationToken,
//       },
//     });

//     expect(response).toMatchObject({
//       data: {
//         verifyUserEmail: {
//           email,
//           username,
//           accessToken: response.data.verifyUserEmail?.accessToken,
//           refreshToken: response.data.verifyUserEmail?.refreshToken,
//           profile: { nickname },
//         },
//       },
//     });
//   });
// });

// describe("Google Login", () => {
//   it("should login user", async () => {
//     const { googleAccessToken, email, username, nickname } = googleUserData;

//     const googleLoginMutation = `
//         mutation GoogleAuth($googleAuthInput: GoogleAuthInput!) {
//             googleAuth(googleAuthInput: $googleAuthInput) {
//                 email
//                 accessToken
//                 refreshToken
//             }
//         }
//     `;
//     const response = await gCall({
//       source: googleLoginMutation,
//       variableValues: {
//         googleAuthInput: {
//           googleAccessToken,
//         },
//       },
//     });

//     expect(response).toMatchObject({
//       data: {
//         googleAuth: {
//           email,
//           username,
//           accessToken: response.data.googleAuth?.accessToken,
//           refreshToken: response.data.googleAuth?.refreshToken,
//           profile: { nickname: nickname },
//         },
//       },
//     });
//   });

//   it("should login existing email user", async () => {
//     const { googleAccessToken, email, username, nickname } =
//       definedGoogleUserData;

//     const googleLoginMutation = `
//         mutation GoogleAuth($googleAuthInput: GoogleAuthInput!) {
//             googleAuth(googleAuthInput: $googleAuthInput) {
//                 email
//                 accessToken
//                 refreshToken
//             }
//         }
//     `;
//     const response = await gCall({
//       source: googleLoginMutation,
//       variableValues: {
//         googleAuthInput: {
//           googleAccessToken,
//         },
//       },
//     });

//     expect(response).toMatchObject({
//       data: {
//         googleAuth: {
//           email,
//           username,
//           accessToken: response.data.googleAuth?.accessToken,
//           refreshToken: response.data.googleAuth?.refreshToken,
//           profile: { nickname: nickname },
//         },
//       },
//     });
//   });
// });
