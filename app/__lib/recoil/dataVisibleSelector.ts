import { selector } from "recoil";
import dataSortedSelector from "./dataSortedSelector";
import pageAtom from "./pageAtom";
import perPageAtom from "./perPageAtom";

const dataVisibleSelector = selector<any[]>({
  key: "dataVisibleSelector",
  get: ({ get }) => {
    const perPage = get(perPageAtom);
    const page = get(pageAtom);
    const data = get(dataSortedSelector);

    return data.slice((page - 1) * perPage, page * perPage);
  },
});

export default dataVisibleSelector;
