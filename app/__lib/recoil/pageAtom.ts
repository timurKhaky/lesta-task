import { atom } from "recoil";

const pageAtom = atom<number>({
  key: "pageAtom",
  default: 1,
});

export default pageAtom;
