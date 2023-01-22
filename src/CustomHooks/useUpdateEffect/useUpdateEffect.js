import React, { useEffect, useRef } from "react";

export default function useUpdateEffect(cb, dop) {
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    } else {
      cb();
    }
  }, dep);
}
