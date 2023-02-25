import "styles/globals.css";
import { ReactNode } from "react";
import AppBar from "./AppBar";
import Provider from "./Provider";

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AppBar />
          <div className={"  min-h-screen "}>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
