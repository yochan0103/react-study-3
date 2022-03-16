import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";
import React from "react";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
