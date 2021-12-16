import Link from "next/link";
import { PropsWithChildren } from "react";
import classes from "./Layout.module.scss";

const Layout = (_props: PropsWithChildren<any>) => {
  return (
    <>
      <nav className={classes.navContainer}>
        <Link href={"/"}>
          <a className={classes.navLink}>Home</a>
        </Link>
      </nav>
      <main>{_props.children}</main>
    </>
  );
};

export default Layout;
