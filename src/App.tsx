import { Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import PlanPage from "./pages/PlanPage/PlanPage";
import AddonsPage from "./pages/AddonsPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import ThankYouPage from "./pages/ThankyouPage/ThankYouPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="select-plan" element={<PlanPage />} />
        <Route path="add-ons" element={<AddonsPage />} />
        <Route path="summary" element={<SummaryPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
      </Route>
    </Routes>
  );
}

export default App;
