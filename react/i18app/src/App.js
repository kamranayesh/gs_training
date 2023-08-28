import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  let { t } = useTranslation();
  let name = "Kamran";
  return (
    <div className="App">
      <LanguageSwitcher />=<h3>{t("good_morning")}</h3>
      <div>{t("welcome", { name: name })}</div>
    </div>
  );
}

export default App;
