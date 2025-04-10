import * as React from 'react';

import {
    BlockStack,
    Button,
    CalloutBanner,
    Heading,
    TextBlock,
    TextContainer,
    View,
} from "@shopify/post-purchase-ui-extensions-react";

export function ResellifyPopup(){
    return (
        <View>
            <BlockStack spacing="loose">
                <CalloutBanner title="Add to Resellify">
                    Review the following steps before adding your order to Resellify
                </CalloutBanner>
            </BlockStack>
        </View>
    )
}

interface ResellifyPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    orderDetails: {
        lineItems: Array<{
            id: string;
            title: string;
            quantity: number;
            price: number;
        }>;
        totalPrice: number;
    };
}

export function ResellifyPopupN({ isOpen, onClose, onConfirm, orderDetails }: ResellifyPopupProps) {
    if (!isOpen) return null;

    return (
        <View>
            <BlockStack spacing="loose">
                <CalloutBanner title="Add to Resellify">
                    Review the following steps before adding your order to Resellify
                </CalloutBanner>

                <BlockStack spacing="loose">
                    <TextContainer>
                        <Heading>Important Steps</Heading>
                        <BlockStack spacing="tight">
                            <TextBlock>1. Your order will be processed for resale</TextBlock>
                            <TextBlock>2. We'll analyze market prices and trends</TextBlock>
                            <TextBlock>3. You'll receive recommendations for listing</TextBlock>
                        </BlockStack>
                    </TextContainer>
                </BlockStack>

                <BlockStack spacing="tight">
                    <TextContainer>
                        <Heading>Order Summary</Heading>
                        {orderDetails.lineItems.map((item) => (
                            <TextBlock key={item.id}>
                                {item.title} x {item.quantity} - ${item.price}
                            </TextBlock>
                        ))}
                        <TextBlock emphasized>
                            Total: ${orderDetails.totalPrice}
                        </TextBlock>
                    </TextContainer>
                </BlockStack>

                <BlockStack spacing="tight">
                    <Button
                        onPress={onConfirm}
                    >
                        Add to Resellify
                    </Button>
                    <Button
                        onPress={onClose}
                    >
                        Cancel
                    </Button>
                </BlockStack>
            </BlockStack>
        </View>
    );
}
