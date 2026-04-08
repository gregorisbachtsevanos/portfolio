import HomePage from "@/components/HomePage";
import { buildPageMetadata, buildStructuredData } from "@/config/seo";
import { I18nProvider } from "@/lib/i18n";

export const generateMetadata = async () => buildPageMetadata("gr");

const GreekHome = () => {
  return (
    <I18nProvider initialLocale="gr">
      <HomePage locale="gr" structuredData={buildStructuredData("gr")} />
    </I18nProvider>
  );
};

export default GreekHome;
