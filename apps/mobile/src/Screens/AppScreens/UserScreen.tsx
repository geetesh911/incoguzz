import React, { FC } from "react";
import { UserBody, UserHeader } from "../../Components/user";

export const UserScreen: FC = () => {
  return (
    <>
      <UserHeader
        name={"Leo"}
        dpUrl="https://res.cloudinary.com/geeteshpp/image/upload/v1647415142/mountain-climber_jjis3c.jpg"
      />
      <UserBody />
    </>
  );
};
