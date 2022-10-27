import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      {/*eslint-disable-next-line @next/next/no-head-element*/}
      <head>
        <title>Reproduction</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
