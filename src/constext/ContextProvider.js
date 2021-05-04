import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = (props) => {
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  return (
    <context.Provider
      value={{
        name,
        setName,
        admin,
        setAdmin,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
export default ContextProvider;
