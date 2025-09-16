import type { Comment } from "../../comment/model/types";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  comment?: Comment[];
};
