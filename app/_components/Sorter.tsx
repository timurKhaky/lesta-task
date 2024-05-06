import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import sortAtom from "../__lib/recoil/sortAtom";
import pageAtom from "../__lib/recoil/pageAtom";

type TProps = { isDisabled: boolean };
const sorterOptions: { title: string; key: "level" | "nation" | "type" }[] = [
  {
    title: "По уровню",
    key: "level",
  },
  {
    title: "По нации",
    key: "nation",
  },
  {
    title: "По типу",
    key: "type",
  },
];

export default function Sorter({ isDisabled }: TProps) {
  const [sorter, setSorter] = useRecoilState(sortAtom);
  const resetSorter = useResetRecoilState(sortAtom);
  const resetPage = useResetRecoilState(pageAtom);
  const onClick = (value: "level" | "nation" | "type") => {
    resetPage();
    setSorter(value);
  };
const onReset = () => {
  resetPage();
  resetSorter();
}

  return (
    <div className="p-2 gap-2 w-full">
      <span className="mr-2">Сортировка:</span>
      {sorterOptions.map((item) => (
        <Button
          color="primary"
          variant={sorter === item.key ? "solid" : "light"}
          key={item.key}
          onClick={() => onClick(item.key)}
          disabled={isDisabled}
        >
          {item.title}
        </Button>
      ))}
      <Button
        color="primary"
        variant="light"
        onClick={onReset}
        disabled={isDisabled}
      >
        Сбросить
      </Button>
    </div>
  );
}
