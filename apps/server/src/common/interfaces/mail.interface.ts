export interface MailOptions {
  to: string;
  text?: string;
  html?: { path?: string; raw?: string };
  locals?: object;
}

export interface MailConfig {
  username: string;
  password: string;
  sendInBlueApiKey: string;
}
