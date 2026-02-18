import { Text } from "@shopify/polaris";

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto text-center">
        <Text as="p" variant="bodySm" tone="subdued" className="text-neutral-500">
          © 2026 malicc. Built for modern D2C brands.
        </Text>
      </div>
    </footer>
  );
}
