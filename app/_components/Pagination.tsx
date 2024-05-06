import { Pagination as PaginationUI } from "@nextui-org/react";
import React, { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import dataAtom from "../__lib/recoil/dataAtom";
import pageAtom from "../__lib/recoil/pageAtom";
import perPageAtom from "../__lib/recoil/perPageAtom";
import dataSortedSelector from "../__lib/recoil/dataSortedSelector";

export default function Pagination() {
  const perPage = useRecoilValue(perPageAtom);
  const data = useRecoilValue(dataSortedSelector);
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / perPage);
  }, [data, perPage]);
  const [page, setPage] = useRecoilState(pageAtom);
  if (totalPages <= 1) {
    return <div />;
  }
  return (
    <PaginationUI
      total={totalPages}
      initialPage={1}
      page={page}
      onChange={setPage}
    />
  );
}
