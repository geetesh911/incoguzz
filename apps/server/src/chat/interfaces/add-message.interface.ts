import { FileUpload } from "graphql-upload";
import { NewMessageInput } from "../inputs/new-message.input";

export interface IAddMessageParams {
  messageInput: NewMessageInput;
  media?: Promise<FileUpload>;
  userId: string;
}

export interface IAddMessageRepoParams {
  messageInput: NewMessageInput;
  userId: string;
  mediaUrl?: string;
  mediaThumbnailUrl?: string;
}
