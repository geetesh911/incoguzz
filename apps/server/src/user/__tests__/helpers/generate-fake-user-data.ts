import faker from "@faker-js/faker";

export const manualUserData = {
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: "hello",
  nickname: faker.name.findName(),
};

export const definedUserData = {
  username: faker.internet.userName(),
  password: "hello",
  email: "geetesh.pillarplus@gmail.com",
  nickname: "Geetesh Laddha",
};

export const definedGoogleUserData = {
  username: definedUserData.username,
  email: "geetesh.pillarplus@gmail.com",
  nickname: "Geetesh Laddha",
  googleAccessToken:
    "ya29.a0ARrdaM-RcPpVZ01sfDmp3Mz_xvtFiazefIUfpWecKIHc1SE8pgJqptDVC0DSCnwjTeMSEQznWz_6_l2r7DvvSD6wCYMwQJi-y7hFoSGFovXIGeSUU75127fBfmpwEgpdqB2XzPOAsPOBfAWQhUiSIiiHwKKEcw",
};

export const googleUserData = {
  username: faker.internet.userName(),
  email: "geetesh.911@gmail.com",
  nickname: "Geetesh Laddha",
  googleAccessToken:
    "ya29.a0ARrdaM-1VbW8S0mcC-Ahm3fQhBBlYzK3L4995fv4vAsid1gTjIKUwyM0HG6Z_HYgdlPdUqGHPWIhv25BM6onemJJPl555eEOd9ppyhW8k7vdwwxJxaGnOtdELVmufJGB09Fc5C-HynY8WKqIeWzJuYCTazwS5w",
};

export const generateManualUserData = () => manualUserData;
