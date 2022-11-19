import React, { createContext, ReactNode } from "react";

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
};

export const AuthContext = createContext({});

export default function AuthProvider({ children }: AuthContextProviderProps) {

  return (
    <AuthContext.Provider value={() => {}}>{children}</AuthContext.Provider>
  );
}
