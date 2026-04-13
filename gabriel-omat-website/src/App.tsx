import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ConsultingPage from "@/pages/ConsultingPage";
import FutureproofPage from "@/pages/FutureproofPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/consulting" component={ConsultingPage} />
      <Route path="/futureproof" component={FutureproofPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
