import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LocaleLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
  replace?: boolean;
}

export default function LocaleLink({ href, children, replace, ...rest }: LocaleLinkProps) {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  let resolved = href;
  if (isEn && resolved.startsWith("/") && !resolved.startsWith("/en")) {
    resolved = `/en${resolved === "/" ? "" : resolved}`;
  }
  return (
    <Link href={resolved} replace={replace} {...rest}>
      {children}
    </Link>
  );
}
