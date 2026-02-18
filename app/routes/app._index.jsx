import { useEffect } from "react";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        product: {
          title: `${color} Snowboard`,
        },
      },
    },
  );
  const responseJson = await response.json();
  const product = responseJson.data.productCreate.product;
  const variantId = product.variants.edges[0].node.id;
  const variantResponse = await admin.graphql(
    `#graphql
    mutation shopifyReactRouterTemplateUpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          price
          barcode
          createdAt
        }
      }
    }`,
    {
      variables: {
        productId: product.id,
        variants: [{ id: variantId, price: "100.00" }],
      },
    },
  );
  const variantResponseJson = await variantResponse.json();

  return {
    product: responseJson.data.productCreate.product,
    variant: variantResponseJson.data.productVariantsBulkUpdate.productVariants,
  };
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
    <div className="p-8 max-w-6xl mx-auto space-y-8 min-h-screen bg-black text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Shopify app template</h1>
        <Button onClick={generateProduct} disabled={isLoading}>
          Generate a product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Congrats on creating a new Shopify app 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-300">
            This embedded app template uses{" "}
            <a
              href="https://shopify.dev/docs/apps/tools/app-bridge"
              target="_blank"
              rel="noreferrer"
              className="text-white underline hover:no-underline"
            >
              App Bridge
            </a>{" "}
            interface examples like an{" "}
            <a
              href="/app/additional"
              className="text-white underline hover:no-underline"
            >
              additional page in the app nav
            </a>
            , as well as an{" "}
            <a
              href="https://shopify.dev/docs/api/admin-graphql"
              target="_blank"
              rel="noreferrer"
              className="text-white underline hover:no-underline"
            >
              Admin GraphQL
            </a>{" "}
            mutation demo, to provide a starting point for app development.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Get started with products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-neutral-300">
            Generate a product with GraphQL and get the JSON output for that
            product. Learn more about the{" "}
            <a
              href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/productCreate"
              target="_blank"
              rel="noreferrer"
              className="text-white underline hover:no-underline"
            >
              productCreate
            </a>{" "}
            mutation in our API references.
          </p>
          <div className="flex gap-4">
            <Button onClick={generateProduct} disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate a product"}
            </Button>
            {fetcher.data?.product && (
              <Button
                onClick={() => {
                  shopify.intents.invoke?.("edit:shopify/Product", {
                    value: fetcher.data?.product?.id,
                  });
                }}
                variant="secondary"
              >
                Edit product
              </Button>
            )}
          </div>

          {fetcher.data?.product && (
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div>
                <h4 className="text-md font-semibold text-white mb-2">
                  productCreate mutation
                </h4>
                <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 overflow-x-auto">
                  <pre className="text-xs text-neutral-300 font-mono">
                    <code>{JSON.stringify(fetcher.data.product, null, 2)}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-md font-semibold text-white mb-2">
                  productVariantsBulkUpdate mutation
                </h4>
                <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 overflow-x-auto">
                  <pre className="text-xs text-neutral-300 font-mono">
                    <code>{JSON.stringify(fetcher.data.variant, null, 2)}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>App template specs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-neutral-300">
              <span className="font-semibold text-white">Framework: </span>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:no-underline"
              >
                React Router
              </a>
            </p>
            <p className="text-neutral-300">
              <span className="font-semibold text-white">Interface: </span>
              <a
                href="https://shopify.dev/docs/api/app-home/using-polaris-components"
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:no-underline"
              >
                Polaris web components
              </a>
            </p>
            <p className="text-neutral-300">
              <span className="font-semibold text-white">API: </span>
              <a
                href="https://shopify.dev/docs/api/admin-graphql"
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:no-underline"
              >
                GraphQL
              </a>
            </p>
            <p className="text-neutral-300">
              <span className="font-semibold text-white">Database: </span>
              <a
                href="https://www.prisma.io/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:no-underline"
              >
                Prisma
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>
                Build an{" "}
                <a
                  href="https://shopify.dev/docs/apps/getting-started/build-app-example"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline hover:no-underline"
                >
                  example app
                </a>
              </li>
              <li>
                Explore Shopify&apos;s API with{" "}
                <a
                  href="https://shopify.dev/docs/apps/tools/graphiql-admin-api"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline hover:no-underline"
                >
                  GraphiQL
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
