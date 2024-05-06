import { atom } from "recoil";

type TFilterAtom = {
  level: string;
  nation: string;
  type: string;
};
const filterAtom = atom<TFilterAtom>({
  key: "filterAtom",
  default: {
    level: "",
    nation: "",
    type: "",
  },
});

export default filterAtom;
