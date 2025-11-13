import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";
import AddonsPage from "./pages/AddonsPage";
import SummaryPage from "./pages/SummaryPage";
import DataContextProvider from "./contexts/DataContextProvider";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <GlobalStyles />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="select-plan" element={<PlanPage />} />
            <Route path="add-ons" element={<AddonsPage />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />
          </Route>
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
