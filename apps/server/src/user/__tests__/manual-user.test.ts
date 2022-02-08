// import JWTHelper from "@/common/helpers/jwt.helper";
// import { gCall } from "@/utils/test-utils/gcall.util";
// import Container from "typedi";
// import { IUserVerificationJwtPayload } from "@/auth/interfaces/auth.interface";
// import {
//   definedUserData,
//   manualUserData,
// } from "./helpers/generate-fake-user-data";

// const jwtHelper = Container.get(JWTHelper);

// const manualRegistration = (user: any) => {
//   const { email, username } = user;
//   let userId: string;

//   it("should register a new user", async () => {
//     const signUpMutation = `
//       mutation SignUp($signUpInput: SignUpInput!) {
//         signUp(signUpInput: $signUpInput) {
//           id
//           email
//           username
//           isVerified
//         }
//       }
//         `;

//     const response = await gCall({
//       source: signUpMutation,
//       variableValues: {
//         signUpInput: user,
//       },
//     });

//     userId = response.data?.signUp?.id;

//     expect(response).toMatchObject({
//       data: {
//         signUp: {
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
//         mutation VerifyToken($verificationToken: String!) {
//           verifyUserEmail(verificationToken: $verificationToken)
//         }
//       `;
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
//         verifyUserEmail: true,
//       },
//     });
//   });
// };

// const manualLogin = (user: any) => {
//   const { email, username, nickname, password } = user;

//   it("should login user", async () => {
//     const loginMutation = `
//       mutation Login($loginInput: LoginInput!) {
//         login(loginInput: $loginInput) {
//           email
//             username
//             accessToken
//             refreshToken
//             profile {
//               nickname
//             }
//         }
//       }
//     `;
//     const response = await gCall({
//       source: loginMutation,
//       variableValues: {
//         loginInput: {
//           email,
//           password,
//         },
//       },
//     });

//     expect(response).toMatchObject({
//       data: {
//         login: {
//           email,
//           username,
//           accessToken: response.data.login?.accessToken,
//           refreshToken: response.data.login?.refreshToken,
//           profile: { nickname: nickname },
//         },
//       },
//     });
//   });
// };

// describe("Manual Registration", () => manualRegistration(manualUserData));

// describe("Manual Registration with defined user", () =>
//   manualRegistration(definedUserData));

// describe("Manual Login", () => manualLogin(manualUserData));
