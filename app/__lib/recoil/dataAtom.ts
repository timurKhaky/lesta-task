import { atom } from "recoil";

const dataAtom = atom<any[]>({
  key: "dataAtom",
  default: [],
});

export default dataAtom;
