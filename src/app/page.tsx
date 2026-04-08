import HomePage from "@/components/HomePage";
import { buildPageMetadata, buildStructuredData } from "@/config/seo";
import { I18nProvider } from "@/lib/i18n";

export const generateMetadata = async () => buildPageMetadata("en");

const Home = () => {
  return (
    <I18nProvider initialLocale="en">
      <HomePage locale="en" structuredData={buildStructuredData("en")} />
    </I18nProvider>
  );
};

export default Home;
