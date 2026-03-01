import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | SS Hexa` : "SS Hexa";
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
