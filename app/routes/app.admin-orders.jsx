import { useLoaderData } from "react-router";
import {
  Page,
  LegacyCard,
  Tabs,
  Badge,
  Text,
  BlockStack,
  InlineGrid,
  Box,
  Divider,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import ordersData from "../data/orders.json";

export const loader = async () => {
  return { orders: ordersData };
};

export default function AdminOrders() {
  const { orders } = useLoaderData();
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: "all-orders",
      content: "All",
      accessibilityLabel: "All orders",
      panelID: "all-orders-content",
    },
    {
      id: "in-progress-orders",
      content: "In Progress",
      panelID: "in-progress-orders-content",
    },
    {
      id: "delivered-orders",
      content: "Delivered",
      panelID: "delivered-orders-content",
    },
    {
      id: "cancelled-orders",
      content: "Cancelled",
      panelID: "cancelled-orders-content",
    },
  ];

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );

  const filterOrders = () => {
    switch (selectedTab) {
      case 1:
        return orders.filter((order) => order.OrderStatus === "In Progress");
      case 2:
        return orders.filter((order) => order.OrderStatus === "Delivered");
      case 3:
        return orders.filter((order) => order.OrderStatus === "Cancelled");
      default:
        return orders;
    }
  };

  const filteredOrders = filterOrders();

  const getStatusTone = (status) => {
    switch (status) {
      case "In Progress":
        return "attention"; // Yellow-ish
      case "Delivered":
        return "success"; // Green
      case "Cancelled":
        return "critical"; // Red
      default:
        return "info";
    }
  };

  const getFulfillmentTone = (status) => {
    switch (status) {
      case "Processing":
      case "Ready for Pickup":
      case "Shipped":
        return "attention";
      case "Completed":
        return "success";
      case "Cancelled":
      case "Refunded":
        return "critical";
      default:
        return "new";
    }
  };

  return (
    <Page title="Orders overview">
      <LegacyCard>
        <Tabs
          tabs={tabs}
          selected={selectedTab}
          onSelect={handleTabChange}
          fitted
        >
          <Box padding="400">
            <BlockStack gap="400">
              <Text as="p" variant="bodyMd" tone="subdued">
                {filteredOrders.length} total
              </Text>
              {filteredOrders.map((order) => (
                <LegacyCard key={order.id} sectioned>
                  <BlockStack gap="400">
                    <InlineGrid columns={["oneThird", "twoThirds"]} gap="400">
                      <Box>
                        <BlockStack gap="200">
                          <InlineGrid
                            columns="auto auto"
                            gap="200"
                            alignItems="center"
                          >
                            <Badge tone={getStatusTone(order.OrderStatus)}>
                              {order.OrderStatus}
                            </Badge>
                            <Text as="span" variant="bodySm" tone="subdued">
                              {new Date(order.date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </Text>
                          </InlineGrid>

                          <Text variant="headingSm" as="h3">
                            Order ID: {order.id}
                          </Text>

                          <InlineGrid columns={2} gap="400">
                            <BlockStack gap="100">
                              <Text variant="bodySm" tone="subdued">
                                Store ID
                              </Text>
                              <Text variant="bodyMd" fontWeight="bold">
                                {order.storeId}
                              </Text>
                            </BlockStack>
                            <BlockStack gap="100">
                              <Text variant="bodySm" tone="subdued">
                                User ID
                              </Text>
                              <Text variant="bodyMd" fontWeight="bold">
                                {order.userId}
                              </Text>
                            </BlockStack>
                          </InlineGrid>

                          <InlineGrid columns={2} gap="400">
                            <BlockStack gap="100">
                              <Text variant="bodySm" tone="subdued">
                                Fulfillment status
                              </Text>
                              <Text variant="bodyMd" fontWeight="bold">
                                {order.FulfillmentStatus}
                              </Text>
                            </BlockStack>
                            <BlockStack gap="100">
                              <Text variant="bodySm" tone="subdued">
                                Payment method
                              </Text>
                              <Text variant="bodyMd" fontWeight="bold">
                                {order.paymentMethod}
                              </Text>
                            </BlockStack>
                          </InlineGrid>
                        </BlockStack>
                      </Box>

                      <Box>
                        <BlockStack gap="400">
                          <BlockStack gap="100">
                            <Text
                              variant="bodySm"
                              tone="subdued"
                              alignment="end"
                            >
                              Shipping address
                            </Text>
                            <Text
                              variant="bodyMd"
                              fontWeight="bold"
                              alignment="end"
                            >
                              {order.shippingAddress}
                            </Text>
                          </BlockStack>

                          <InlineGrid columns={2} gap="400">
                            <BlockStack gap="100" align="end">
                              <Text
                                variant="bodySm"
                                tone="subdued"
                                alignment="end"
                              >
                                Shipping fee
                              </Text>
                              <Text
                                variant="bodyMd"
                                fontWeight="bold"
                                alignment="end"
                              >
                                ₹ {order.shippingFee}
                              </Text>
                            </BlockStack>
                            <BlockStack gap="100" align="end">
                              <Text
                                variant="bodySm"
                                tone="subdued"
                                alignment="end"
                              >
                                Total amount
                              </Text>
                              <Text
                                variant="bodyMd"
                                fontWeight="bold"
                                alignment="end"
                              >
                                ₹ {order.totalAmount.toLocaleString()}
                              </Text>
                            </BlockStack>
                          </InlineGrid>

                          <InlineGrid columns={2} gap="400">
                            <BlockStack gap="100" align="end">
                              <Text
                                variant="bodySm"
                                tone="subdued"
                                alignment="end"
                              >
                                Delivery partner
                              </Text>
                              <Text
                                variant="bodyMd"
                                fontWeight="bold"
                                alignment="end"
                              >
                                {order.DeliveryPatner}
                              </Text>
                            </BlockStack>
                            <BlockStack gap="100" align="end">
                              <Text
                                variant="bodySm"
                                tone="subdued"
                                alignment="end"
                              >
                                Currency
                              </Text>
                              <Text
                                variant="bodyMd"
                                fontWeight="bold"
                                alignment="end"
                              >
                                {order.currency}
                              </Text>
                            </BlockStack>
                          </InlineGrid>
                        </BlockStack>
                      </Box>
                    </InlineGrid>
                  </BlockStack>
                </LegacyCard>
              ))}
            </BlockStack>
          </Box>
        </Tabs>
      </LegacyCard>
    </Page>
  );
}
