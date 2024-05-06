import { atom } from "recoil";

const sortAtom = atom<"level" | "nation" | "type" | null>({
  key: "sortAtom",
  default: null,
});

export default sortAtom;
