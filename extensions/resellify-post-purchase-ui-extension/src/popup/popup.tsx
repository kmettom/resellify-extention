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

interface ResellifyPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function ResellifyPopup({ isOpen, onClose, onConfirm }: ResellifyPopupProps) {
    if (!isOpen) return null;
    return (
        <View>
            <BlockStack spacing="loose">
                <CalloutBanner title="Add to Resellify">
                    Review the following steps before adding your order to Resellify
                </CalloutBanner>

                <BlockStack spacing="loose">
                    <TextContainer>
                        <Heading>Add Your Purchase to Resellify</Heading>
                        <BlockStack spacing="tight">
                            <TextBlock><TextBlock>1.</TextBlock> After checkout, add your Artknit pieces to Resellify’s digital wardrobe.</TextBlock>
                            <TextBlock><TextBlock>2.</TextBlock> Sign up later using the same email you shop with—your items will
                                be waiting.</TextBlock>
                            <TextBlock><TextBlock>3.</TextBlock> Manage your wardrobe, style your looks, and resell pre-loved
                                pieces with one click when you’re ready.</TextBlock>
                        </BlockStack>
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
