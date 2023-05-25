import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./AppLink.module.scss";
import { classNames } from "shared/lib/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps {
  theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps & LinkProps> = ({
  to,
  theme = AppLinkTheme.PRIMARY,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={classNames(styles.link, {}, [styles[theme], className])}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
