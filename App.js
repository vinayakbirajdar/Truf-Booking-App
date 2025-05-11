import React from "react";
import MainRoute from "./src/routes/main_routes";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <MainRoute />
    </AuthProvider>
  )
};

export default App;