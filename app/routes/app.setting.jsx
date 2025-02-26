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

export default function Setting() {
    const { smUp } = useBreakpoints();

    return (
        <Page>
            <TitleBar title="Deshi Shop | Setting" />
            <BlockStack gap={{ xs: "800", sm: "400" }}>
                <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
                    <Box
                        as="section"
                        paddingInlineStart={{ xs: 400, sm: 0 }}
                        paddingInlineEnd={{ xs: 400, sm: 0 }}>
                    </Box>
                    <Card roundedAbove="sm">
                    <Text as="h3" variant="headingMd">
                                SMS Setting
                            </Text>

                        <BlockStack gap="400">
                            <Text>
                                Provider 
                            </Text>
                            <TextField label="Sender Id" />
                            {/* <TextField label="Interjamb ratio" /> */}
                        </BlockStack>

                        <BlockStack gap="400">
                            <TextField label="API Key" />
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
