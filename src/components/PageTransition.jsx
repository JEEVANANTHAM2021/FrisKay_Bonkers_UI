import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return loading ? <PageLoader /> : children;
}
