import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ConsultingPage from "@/pages/ConsultingPage";
import FutureproofPage from "@/pages/FutureproofPage";
import LivingWorkspacePage from "@/pages/LivingWorkspacePage";
import BonusExpiredPage from "@/pages/BonusExpiredPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NewsletterSkillPage from "@/pages/NewsletterSkillPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/consulting" component={ConsultingPage} />
      <Route path="/futureproof" component={FutureproofPage} />
      <Route path="/living-workspace" component={LivingWorkspacePage} />
      <Route path="/bonus-expired" component={BonusExpiredPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/newsletter-skill" component={NewsletterSkillPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
