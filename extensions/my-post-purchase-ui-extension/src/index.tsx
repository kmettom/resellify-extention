/**
 * Extend Shopify Checkout with a custom Post Purchase user experience.
 * This template provides two extension points:
 *
 *  1. ShouldRender - Called first, during the checkout process, when the
 *     payment page loads.
 *  2. Render - If requested by `ShouldRender`, will be rendered after checkout
 *     completes
 */
import * as React from 'react';

import {
  extend,
  render,
  BlockStack,
  Button,
  CalloutBanner,
  Heading,
  Image,
  Layout,
  TextBlock,
  TextContainer,
  View,
} from "@shopify/post-purchase-ui-extensions-react";

interface ResellifyPopupProps {
  onClose: () => void;
  onConfirm: (items: any[]) => void;
  items: any[];
}

function ResellifyPopup({ onClose, onConfirm, items }: ResellifyPopupProps) {
  return (
    <View>
      <BlockStack spacing="loose">
        <CalloutBanner title="Add to Resellify">
          <BlockStack spacing="loose">
            <Button
              plain
              onPress={onClose}
            >
              ✕ Close
            </Button>

            <BlockStack spacing="tight">
              <TextBlock emphasized>1. List Your Items</TextBlock>
              <TextBlock>Your purchased items will be automatically listed on Resellify's marketplace.</TextBlock>
            </BlockStack>

            <BlockStack spacing="tight">
              <TextBlock emphasized>2. Set Your Prices</TextBlock>
              <TextBlock>Choose your resale prices and manage your listings through your Resellify dashboard.</TextBlock>
            </BlockStack>

            <BlockStack spacing="tight">
              <TextBlock emphasized>3. Start Selling</TextBlock>
              <TextBlock>Once confirmed, your items will be available to potential buyers on the Resellify platform.</TextBlock>
            </BlockStack>

            <Button
              onPress={() => {
                onConfirm(items);
              }}
            >
              Confirm and Add to Resellify
            </Button>
          </BlockStack>
        </CalloutBanner>
      </BlockStack>
    </View>
  );
}

render("Checkout::PostPurchase::Render", App);

export function App({ storage, inputData }) {
  const [showResellifyPopup, setShowResellifyPopup] = React.useState(false);

  console.log("inputData", inputData);

  const order = {
    lineItems: inputData.initialPurchase.lineItems.map(item => ({
      id: item.product.id,
      title: item.product.id,
      quantity: item.quantity,
      price: item.totalPriceSet.presentmentMoney.amount
    })),
    totalPrice: inputData.initialPurchase.totalPriceSet.presentmentMoney.amount
  };

  const handleResellifyConfirm = (items: any[]) => {
    // Add your Resellify integration logic here
    console.log("Adding items to Resellify:", items);
    setShowResellifyPopup(false);
  };

  if (!order || !order.lineItems) {
    return (
      <BlockStack spacing="loose">
        <CalloutBanner title="Error">
          Unable to load order information.
        </CalloutBanner>
      </BlockStack>
    );
  }

  return (
    <BlockStack spacing="loose">
      <CalloutBanner title="Order Summary">
        Thank you for your purchase! Here's what you ordered:
      </CalloutBanner>
      <Layout
        maxInlineSize={0.95}
        media={[
          { viewportSize: "small", sizes: [1, 30, 1] },
          { viewportSize: "medium", sizes: [300, 30, 0.5] },
          { viewportSize: "large", sizes: [400, 30, 0.33] },
        ]}
      >
        <View>
          <BlockStack spacing="loose">
            <TextContainer>
              <Heading>Your Purchased Items</Heading>
              <BlockStack spacing="tight">
                {order.lineItems.map((item) => (
                  <BlockStack key={item.id} spacing="tight">
                    <TextBlock>{item.title}</TextBlock>
                    <TextBlock subdued>Quantity: {item.quantity}</TextBlock>
                    <TextBlock emphasized>${item.price}</TextBlock>
                  </BlockStack>
                ))}
              </BlockStack>
              <TextBlock emphasized>
                Total: ${order.totalPrice}
              </TextBlock>
            </TextContainer>
            <Button onPress={() => setShowResellifyPopup(true)}>
              Add to Resellify
            </Button>
          </BlockStack>
        </View>
      </Layout>

      {showResellifyPopup && (
        <ResellifyPopup
          onClose={() => setShowResellifyPopup(false)}
          onConfirm={handleResellifyConfirm}
          items={order.lineItems}
        />
      )}
    </BlockStack>
  );
}
