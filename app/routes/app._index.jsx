import { useEffect } from "react";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import Header from "../../components/header";
import HeroSection from "../../components/hero-section";
import FeaturesSection from "../../components/features-section";
import HowItWorksSection from "../../components/how-it-works-section";
import PricingSection from "../../components/pricing-section";
import WaitlistSection from "../../components/waitlist-section";
import Footer from "../../components/footer";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export default function Index() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";

  useEffect(() => {
    if (fetcher.data?.product?.id) {
      shopify.toast.show("Product created");
    }
  }, [fetcher.data?.product?.id, shopify]);
  const generateProduct = () => fetcher.submit({}, { method: "POST" });

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
