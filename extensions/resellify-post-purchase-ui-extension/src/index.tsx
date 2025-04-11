/**
 * Extend Shopify Checkout with a custom Post Purchase user experience.
 * This template provides two extension points:
 *
 *  1. ShouldRender - Called first, during the checkout process, when the
 *     payment page loads.
 *  2. Render - If requested by `ShouldRender`, will be rendered after checkout
 *     completes
 *
 *     https://shopify.dev/docs/apps/build/checkout/product-offers/build-a-post-purchase-offer
 *
 */
// import * as React from 'react';
import { useState } from 'react';

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
import { ResellifyPopup } from './popup/popup';

render("Checkout::PostPurchase::Render", ({storage, inputData}) => <App storage={storage} inputData={inputData}  />);
// render("Checkout::PostPurchase::Render", App);

// const [isPopupOpen, setIsPopupOpen] = useState(false)

const sendDataToResellify = () => {
    console.log("sendDataToResellify");
}

// Top-level React component
export function App({ storage, inputData }) {
    console.log("storage", storage, inputData)

const [isPopupOpen, setIsPopupOpen] = useState(false);

    setTimeout(() => {
        setIsPopupOpen(true)
        console.log('open popup')
    },2000)

    const order = {
        lineItems: inputData.initialPurchase.lineItems.map(item => ({
            id: item.product.id,
            title: item.product.id,
            quantity: item.quantity,
            price: item.totalPriceSet.presentmentMoney.amount
        })),
        totalPrice: inputData.initialPurchase.totalPriceSet.presentmentMoney.amount
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
                            <Heading>Your Items:</Heading>
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
                        {/*<Button onPress={() => setIsPopupOpen(true)}>*/}
                        <Button onPress={sendDataToResellify } >
                            Add to Resellify
                        </Button>
                        <ResellifyPopup isOpen={isPopupOpen} onConfirm={sendDataToResellify} onClose={() => {setIsPopupOpen(false)}} ></ResellifyPopup>
                        {/*<ResellifyPopup></ResellifyPopup>*/}
                    </BlockStack>
                </View>
            </Layout>
        </BlockStack>
    );


//     const exampleUser = {
//   userId: "user-123456789",
//   firstName: "John",
//   lastName: "Doe",
//   username: "johndoe",
//   dateOfBirth: "1990-05-15",
//   gender: "male",
//   interestedIn: "womenswear",
//   accountVerified: true,
//   createdAt: "2023-01-01T00:00:00Z",
//   email: "john.doe@example.com",
//   googleID: "",
//   appleID: "",
//   phoneNumber: "+1234567890",
//   currency: "EUR"
// };


    // const exampleItem = {
    //     itemId: "item-987654321",
    //     userId: "user-123456789",
    //     itemName: "Classic Black Blazer",
    //     itemImages: [
    //         {
    //             url: "https://example.com/images/blazer-front.jpg",
    //             isPrimary: true
    //         },
    //         {
    //             url: "https://example.com/images/blazer-back.jpg",
    //             isPrimary: false
    //         }
    //     ],
    //     itemListingImages: [
    //         {
    //             url: "https://example.com/images/blazer-listing.jpg",
    //             isPrimary: true
    //         }
    //     ],
    //     itemDescription: "A timeless black blazer perfect for formal occasions. Made from high-quality wool blend fabric.",
    //     itemCategory: "Outerwear",
    //     brand: "Zara",
    //     price: 89.99,
    //     compareAtPrice: 129.99,
    //     size: "M",
    //     colours: ["Black"],
    //     season: "All Season",
    //     occasion: ["Work", "Formal", "Evening"],
    //     materials: ["Wool", "Polyester"],
    //     fabric: "Wool blend",
    //     careDetails: ["Dry clean only", "Do not bleach", "Iron on low heat"],
    //     comments: ["Great condition, worn only twice"],
    //     status: "Available",
    //     availableForSell: true,
    //     addedOn: "2023-06-15T10:30:00Z",
    //     soldOn: null
    // };
}


