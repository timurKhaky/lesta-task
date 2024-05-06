import { sortBy } from "lodash-es";
import dataAtom from "./dataAtom";
import filterAtom from "./filterAtom";
import sortAtom from "./sortAtom";
import { selector } from "recoil";

type TFilters = {
  nation: string;
  level: string;
  type: string;
};
const filterData = (data: any[], filter: TFilters) => {
  let res = data;
  if (filter.nation) {
    res = res.filter((el) => el.nation.name === filter.nation);
  }
  if (filter.level) {
    res = res.filter((el) => Number(el.level) === Number(filter.level));
  }
  if (filter.type) {
    res = res.filter((el) => el.type?.name === filter.type);
  }
  return res;
};

const sortData = (
  data: any[],
  sortOrder: "level" | "type" | "nation" | null
) => {
  switch (sortOrder) {
    case "level":
      return sortBy(data, "level");
    case "type":
      return sortBy(data, (el: any) => el.type.name || "");
    case "nation":
      return sortBy(data, (el: any) => el.nation.name || "");
    default:
      return data;
  }
};

const dataSortedSelector = selector<any[]>({
  key: "dataSortedSelector",
  get: ({ get }) => {
    const sortOrder = get(sortAtom);
    const filter = get(filterAtom);
    const data = get(dataAtom);

    const dataFiltered = filterData(data ?? [], filter);
    const dataSorted = sortData(dataFiltered ?? [], sortOrder);

    return dataSorted;
  },
});

export default dataSortedSelector;
