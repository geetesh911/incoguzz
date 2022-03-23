import * as React from "react";
import { IIconInterface } from "../../icons";

export interface IReaction {
  name: string;
  Component: React.FC<IIconInterface>;
}

export type IReactions = IReaction[];
