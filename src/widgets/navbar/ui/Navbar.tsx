import React, { ComponentProps, FC } from "react";

import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/link/AppLink";

interface NavbarProps {}
export const Navbar: FC<NavbarProps & ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])} {...props}>
      <div className={styles.links}>
        <AppLink
          to={"/"}
          className={styles.link}
          theme={AppLinkTheme.SECONDARY}
        >
          main
        </AppLink>
        <AppLink
          to={"/about"}
          className={styles.link}
          theme={AppLinkTheme.SECONDARY}
        >
          about
        </AppLink>
      </div>
    </div>
  );
};
