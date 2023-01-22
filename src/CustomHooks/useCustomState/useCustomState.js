import React, { useState } from "react";

export default function useCustomState(value = "Data") {
  const [state, setState] = useState({
    value: value,
    isValide: false,
    isInvalide: false,
    errorMessage: "",
    successMessage: "",
  });
  return [state, setState];
}
