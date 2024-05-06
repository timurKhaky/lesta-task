"use client";

import { gql, useQuery } from "@apollo/client";
import Sorter from "./Sorter";
import List from "./List";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import dataAtom from "../__lib/recoil/dataAtom";
import Filter from "./Filter";
import Pagination from "./Pagination";

const query = gql(`
  query Vehicles($languageCode: String = "ru") {
    vehicles(lang: $languageCode) {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
    }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`);
export default function MainPage() {
  const { data, loading, error } = useQuery(query);
  const setData = useSetRecoilState(dataAtom);
  useEffect(() => {
    setData(data?.vehicles || []);
  });
  return (
    <div className="flex flex-col items-center">
      <Sorter isDisabled={loading || !!error || !data} />
      <Filter isDisabled={loading || !!error || !data} />
      <div className="px-2">
      <List loading={loading} error={error} />
      </div>
      <div className="mt-2">
        <Pagination />
      </div>
    </div>
  );
}
