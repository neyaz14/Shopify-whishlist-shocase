// import {
//     Box,
//     Card,
//     Layout,
//     Link,
//     List,
//     Page,
//     // Text,
//     BlockStack,
//   } from "@shopify/polaris";
//   import { TitleBar } from "@shopify/app-bridge-react";



import { useState } from "react";
import { Form } from "@remix-run/react";
import { Box, Button, TextField, Select, Card, Text, BlockStack } from "@shopify/polaris";

export default function CourierSettingsPathao({ settings }) {
    const [formState, setFormState] = useState(settings || {});

    return (
        <Card roundedAbove="sm">
            {/* <Text as="h3" variant="headingMd">Courier Setting</Text> */}
            <Text as="h3" variant="headingLg">Pathao </Text>

            <Form method="POST">
                <BlockStack gap="400">
                    
                    <TextField
                        label="Store Name"
                        name="storeName"
                        value={formState?.storeName}
                        onChange={(value) => setFormState({ ...formState, storeName: value })}
                    />

                    <TextField
                        label="API Key"
                        name="apiKey"
                        value={formState?.apiKey}
                        onChange={(value) => setFormState({ ...formState, apiKey: value })}
                    />

                    <TextField
                        label="API Secret"
                        name="apiSecret"
                        value={formState?.apiSecret}
                        onChange={(value) => setFormState({ ...formState, apiSecret: value })}
                    />
                </BlockStack>

                <Box display="flex" justifyContent="flex-start" marginTop="400">
                    <Button primary submit>Submit</Button>
                </Box>
            </Form>
        </Card>
    );
}
