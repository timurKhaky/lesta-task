import React from "react";
import Card from "./Card";
import { useRecoilValue } from "recoil";
import dataAtom from "@/app/__lib/recoil/dataAtom";
import dataVisibleSelector from "@/app/__lib/recoil/dataVisibleSelector";
import { Spinner } from "@nextui-org/react";

type TProps = { loading: boolean; error: any };

export default function List({ loading, error }: TProps) {
  const data = useRecoilValue(dataVisibleSelector);

  if (loading) {
    return (
      <div className="flex justify-center items-top gap-1 h-[30vh]">
        <span className="text-default-500 h-fit">Загрузка</span>
        <div>
          <Spinner />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-top gap-1 h-[30vh]">
        При загрузке данных произошла ошибка.
      </div>
    );
  }
  if (data.length === 0) {
    return <div>Список пуст</div>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {data?.map((item: any, i) => (
        <Card
          key={`${item.title}-${i}`} // у некоторых объектов нет title - уникального значения у объекта типа ID тоже нет.
          name={item.title}
          description={item.description}
          nation={item.nation.title}
          level={item.level}
          image={item.icons.large}
        />
      ))}
    </div>
  );
}
