import { atom } from "recoil";

const perPageAtom = atom<number>({
  key: "perPageAtom",
  default: 10,
});

export default perPageAtom;
