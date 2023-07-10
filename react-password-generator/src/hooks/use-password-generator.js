import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const generatePassword = (checkboxData, length) => {
    let charset = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
      }
    });
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
