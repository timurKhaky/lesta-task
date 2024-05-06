import React, { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { groupBy, keys, map, uniqBy } from "lodash-es";
import { Button, Select, SelectItem } from "@nextui-org/react";
import filterAtom from "../__lib/recoil/filterAtom";
import dataAtom from "../__lib/recoil/dataAtom";
import pageAtom from "../__lib/recoil/pageAtom";

type TProps = { isDisabled: boolean };

export default function Filter({ isDisabled }: TProps) {
  const data = useRecoilValue(dataAtom);
  const resetPage = useResetRecoilState(pageAtom);
  const resetFilter = useResetRecoilState(filterAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

  const filters = useMemo(() => {
    if (!data.length) return null;
    const level = keys(groupBy(data, "level"));
    const nation = map(
      uniqBy(data, (item) => item.nation.name),
      "nation"
    );
    const type = map(
      uniqBy(data, (item) => item.type.name),
      "type"
    );
    return { level, nation, type };
  }, [data]);

  const onSelect = ({ key, value }: { key: string; value: string }) => {
    resetPage();
    setFilter((prev) => ({ ...prev, [key]: value }));
  };
  const onReset = () => {
    resetPage();
    resetFilter();
  };
  return (
    <div className="p-2 gap-2 flex w-full flex-wrap">
      <span>Фильтр:</span>
      <Select
        items={filter.level ?? []}
        size="sm"
        className="w-32"
        disabled={isDisabled}
        label="Уровень"
        selectedKeys={[filter?.level || ""]}
        onChange={(e) => onSelect({ key: "level", value: e.target.value })}
      >
        {(filters?.level ?? []).map((level) => (
          <SelectItem key={level} value={level}>
            {level}
          </SelectItem>
        ))}
      </Select>
      <Select
        selectedKeys={[filter?.type || ""]}
        size="sm"
        className="w-40"
        disabled={isDisabled}
        label="Тип"
        onChange={(e) => onSelect({ key: "type", value: e.target.value })}
      >
        {(filters?.type ?? []).map((type) => (
          <SelectItem key={type.name} value={type.name}>
            {type.title}
          </SelectItem>
        ))}
      </Select>
      <Select
        selectedKeys={[filter?.nation || ""]}
        size="sm"
        className="w-40"
        disabled={isDisabled}
        label="Нация"
        onChange={(e) => onSelect({ key: "nation", value: e.target.value })}
      >
        {(filters?.nation ?? []).map((nation) => (
          <SelectItem key={nation.name} value={nation.name}>
            {nation.title}
          </SelectItem>
        ))}
      </Select>
      <Button variant="light" size="lg" onClick={onReset}>
        Сбросить
      </Button>
    </div>
  );
}
