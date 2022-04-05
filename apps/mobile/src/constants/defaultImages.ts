import { PostType } from "@incoguzz/graphql";

export const defalutPostImages: Record<PostType, string> = {
  [PostType.Photo]: "",
  [PostType.Video]: "",
  [PostType.Audio]:
    "https://res.cloudinary.com/geeteshpp/image/upload/v1645083626/Frame_25_fkfw7a.png",
  [PostType.Textual]:
    "https://res.cloudinary.com/geeteshpp/image/upload/v1648109696/Frame_27_1_eyqdur.png",
  [PostType.Clip]: "",
  [PostType.Poll]: "",
};

export const defaultUserImage =
  "https://res.cloudinary.com/geeteshpp/image/upload/v1649143396/user-icon_ybc0uo.png";
