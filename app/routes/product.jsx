import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(`
        query {
            products(first: 250) {
                edges {
                    node {
                        id
                        title
                        images(first: 1) {
                            edges {
                                node {
                                    url
                                    altText
                                }
                            }
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
            shop {
                name
            }
        }
    `);
  const data = await response.json();
  return {
    products: data.data.products.edges,
    shopName: data.data.shop.name,
  };
};
