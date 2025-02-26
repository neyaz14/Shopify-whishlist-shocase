import {
    Box,
    Card,
    Layout,
    Link,
    List,
    Page,
    Text,
    BlockStack,
    TextField,
    InlineGrid,
    Divider,
    useBreakpoints
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Sms() {
    const { smUp } = useBreakpoints();

    return (
        <Page>
            <TitleBar title="Sms" />
            <BlockStack gap={{ xs: "800", sm: "400" }}>
                <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 400, sm: 0 }}
                        paddingInlineEnd={{ xs: 400, sm: 0 }}
                    >
                        <BlockStack gap="400">
                            <Text as="h3" variant="headingMd">
                                sms
                            </Text>
                            <Text as="p" variant="bodyMd">
                                Sms are the rounded protruding bits of your puzzle piece.
                            </Text>
                        </BlockStack>
                    </Box>
                    <Card roundedAbove="sm">
                        <BlockStack gap="400">
                            <TextField label="Interjamb style" />
                            <TextField label="Interjamb ratio" />
                        </BlockStack>
                    </Card>
                </InlineGrid>
                {smUp ? <Divider /> : null}
                <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 400, sm: 0 }}
                        paddingInlineEnd={{ xs: 400, sm: 0 }}
                    >
                        <BlockStack gap="400">
                            <Text as="h3" variant="headingMd">
                                Dimensions
                            </Text>
                            <Text as="p" variant="bodyMd">
                                Adjust the dimensions of your puzzle piece.
                            </Text>
                        </BlockStack>
                    </Box>
                    <Card roundedAbove="sm">
                        <BlockStack gap="400">
                            <TextField label="Horizontal" />
                            <TextField label="Interjamb ratio" />
                        </BlockStack>
                    </Card>
                </InlineGrid>
            </BlockStack>
        </Page>
    );
}

function Code({ children }) {
    return (
        <Box
            as="span"
            padding="025"
            paddingInlineStart="100"
            paddingInlineEnd="100"
            background="bg-surface-active"
            borderWidth="025"
            borderColor="border"
            borderRadius="100"
        >
            <code>{children}</code>
        </Box>
    );
}
