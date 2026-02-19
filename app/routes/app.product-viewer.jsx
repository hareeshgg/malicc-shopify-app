import { useEffect, useState } from "react";
import {
  Page,
  Card,
  Text,
  Button,
  Badge,
  BlockStack,
  InlineStack,
} from "@shopify/polaris";

const ProductImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "#f1f2f3",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      style={{
        width: "100%",
        height: "200px",
        objectFit: "cover",
        marginBottom: "10px",
        borderRadius: "4px",
      }}
    />
  );
};

export default function ProductViewer() {
  const [products, setProducts] = useState([]);
  const [shopName, setShopName] = useState("");
  const [addedProducts, setAddedProducts] = useState(new Set());

  useEffect(() => {
    fetch("/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setShopName(data.shopName);
      });
  }, []);

  const handleAddToNetwork = (id) => {
    setAddedProducts((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const handleRemoveFromNetwork = (id) => {
    setAddedProducts((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <Page title={"Available Productss"}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((item) => {
          const image = item.node.images.edges[0]?.node;
          const price = item.node.priceRange.minVariantPrice;
          const amount = (parseFloat(price?.amount || 0) / 100).toFixed(2);
          const isAdded = addedProducts.has(item.node.id);

          return (
            <Card key={item.node.id}>
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "10px", flexGrow: 1 }}>
                  <ProductImage
                    src={image?.url}
                    alt={image?.altText || item.node.title}
                  />
                  <BlockStack gap="200">
                    <Text variant="bodyMd" as="h3" fontWeight="bold">
                      {item.node.title}
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text variant="bodySm" as="p">
                        {price
                          ? `${amount} ${price.currencyCode}`
                          : "Price not available"}
                      </Text>
                      <Text variant="bodySm" as="p">
                        {shopName}
                      </Text>
                    </div>
                  </BlockStack>
                </div>

                <div style={{ marginTop: "auto" }}>
                  {isAdded ? (
                    <InlineStack
                      gap="200"
                      align="start"
                      blockAlign="center"
                      display="flex"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Badge tone="success" size="large">
                        Added to Network
                      </Badge>
                      <Button
                        tone="critical"
                        onClick={() => handleRemoveFromNetwork(item.node.id)}
                      >
                        Remove
                      </Button>
                    </InlineStack>
                  ) : (
                    <Button
                      onClick={() => handleAddToNetwork(item.node.id)}
                      fullWidth
                    >
                      Add to Network
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
