import { createContext, useContext, useState } from "react";

export const avatarContext = createContext();

export const useAvatar = () => {
  const context = useContext(avatarContext);
  if (!context) {
    console.error("Error creating avatar context");
  }
  return context;
};

export function AvatarProvider({ children }) {
  const [avatar, setAvatar] = useState({
    ref: null,
    body: null,
  });

  return (
    <avatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </avatarContext.Provider>
  );
}
