import { useTranslation } from "react-i18next";

export function useLocalePath() {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");
  return (path: string) => {
    if (isEn && path.startsWith("/") && !path.startsWith("/en")) {
      return `/en${path === "/" ? "" : path}`;
    }
    return path;
  };
}
