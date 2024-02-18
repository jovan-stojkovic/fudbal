import { useState } from "react";

const Language = () => {

    const [language, setLanguage] = useState("SRB")

  return (
    <>
      <img src="./src/assets/flags/SRB.png" alt="SRB" className="language-flag" />
    </>
  );
};

export default Language;
