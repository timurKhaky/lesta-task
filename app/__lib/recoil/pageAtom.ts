import { atom } from "recoil";

const paginationAtom = atom<number>({
  key: "paginationAtom",
  default: 1,
});

export default paginationAtom;
