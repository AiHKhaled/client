import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

// const ProtectedRoute = () => {
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

function App() {
  //const handleLogin = () => setUser({ password: "1", name: "robin" });
  //const handleLogout = () => setUser(null);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mdTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute user={user}>
              <Dashboard />
              // </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
