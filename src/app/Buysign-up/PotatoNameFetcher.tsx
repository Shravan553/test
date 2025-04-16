"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PotatoNameFetcher = ({ setPotatoName }: { setPotatoName: (name: string | null) => void }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("potatoName");
    setPotatoName(name);
  }, [searchParams, setPotatoName]);

  return null;
};

export default PotatoNameFetcher;
