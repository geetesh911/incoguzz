export const getRequestBody = <Type>(body: object, input: Type) => ({
  ...body,
  ...input,
});
