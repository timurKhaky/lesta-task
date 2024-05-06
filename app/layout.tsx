import { ReactNode } from "react";
import ApolloWrapper from "./__components/ApolloWrapper";
import { NextUIProvider } from "@nextui-org/react";
import RecoilWrapper from "./__components/RecoilWrapper";
import "./__styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ApolloWrapper>
          <RecoilWrapper>
            <NextUIProvider>{children}</NextUIProvider>
          </RecoilWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
