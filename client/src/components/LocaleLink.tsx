import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LocaleLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
  replace?: boolean;
}

const LOCALE_PREFIXES = ["/en", "/es"];

export function getLangPrefix(lang: string | undefined): string {
  if (lang?.startsWith("en")) return "/en";
  if (lang?.startsWith("es")) return "/es";
  return "";
}

export default function LocaleLink({ href, children, replace, ...rest }: LocaleLinkProps) {
  const { i18n } = useTranslation();
  const prefix = getLangPrefix(i18n.language);
  let resolved = href;
  if (prefix && resolved.startsWith("/") && !LOCALE_PREFIXES.some((p) => resolved.startsWith(p))) {
    resolved = `${prefix}${resolved === "/" ? "" : resolved}`;
  }
  return (
    <Link href={resolved} replace={replace} {...rest}>
      {children}
    </Link>
  );
}
