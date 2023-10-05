"use client";

import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export function Counter() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    api.api.count.get().then((response) => {
      if (response.error) {
        setData(`Error: ${response.error}`);
        return;
      }

      setData(response.data.message);
    });
  }, []);

  return <span>{data}</span>;
}
