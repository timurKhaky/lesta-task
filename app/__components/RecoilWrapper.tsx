'use client';

import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

function RecoilWrapper({ children }: PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilWrapper;
