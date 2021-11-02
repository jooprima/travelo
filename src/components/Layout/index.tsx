import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};
