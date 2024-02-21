import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarComp from "./scenes/global/SidebarComp";
import { Box } from "@mui/material";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

// import "./index.css";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComp />
          <main className="content">
            <Topbar />
            <div className="containment">
              <div className="dash">
                <Routes>
                  <Route path="/react-admin-temp/" element={<Dashboard />} />
                  <Route path="/react-admin-temp/team" element={<Team />} />
                  <Route
                    path="/react-admin-temp/contacts"
                    element={<Contacts />}
                  />
                  <Route
                    path="/react-admin-temp/invoices"
                    element={<Invoices />}
                  />
                  <Route path="/react-admin-temp/form" element={<Form />} />
                  <Route path="/react-admin-temp/bar" element={<Bar />} />
                  <Route path="/react-admin-temp/line" element={<Line />} />
                  <Route path="/react-admin-temp/pie" element={<Pie />} />
                  <Route path="/react-admin-temp/faq" element={<FAQ />} />
                  <Route
                    path="/react-admin-temp/geography"
                    element={<Geography />}
                  />
                  <Route
                    path="/react-admin-temp/calendar"
                    element={<Calendar />}
                  />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
