import { ReactionType } from "@incoguzz/graphql";
import * as React from "react";
import { IIconInterface } from "../../icons";

export interface IReaction {
  name: ReactionType;
  Component: React.FC<IIconInterface>;
}

export type IReactions = IReaction[];
