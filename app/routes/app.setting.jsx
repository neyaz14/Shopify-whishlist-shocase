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
    useBreakpoints,
    Select, Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Form, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useState } from "react";
import CourierSetting from "./Settings-Component/CourierSettingsPathao";
import CourierSettingsSteadfast from "./Settings-Component/CourierSettingsSteadfast";
import CourierSettingsRedex from "./Settings-Component/CourierSettingsRedex";




// export async function loader({ request }) {
// const { session } = await authenticate.admin(request);
// // get data from database if it exists. If not return empty object
// let settings = await db.settings.findFirst({
//     where: {
//         shop: session.shop,
//     },
// });

// if (!settings) {
//     settings = {};
// }
// return json(settings);
// }




// Action function to handle form submission
// export const action = async ({ request }) => {
//     const formData = await request.formData();
//     const provider = formData.get("provider");
//     const senderId = formData.get("senderId");
//     const apiKey = formData.get("apiKey");

//     // এখানে ডাটা MongoDB বা অন্য কোনো API তে পাঠানো যেতে পারে
//     console.log("Received Data:", { provider, senderId, apiKey });

//     return json({ success: true, message: "Settings updated successfully!" });
// };




export default function Setting() {
    const { smUp } = useBreakpoints();
    const [formState, setFormState] = useState({});

    return (
        <Page>
            <TitleBar title="Deshi Shop | Setting" />
            <BlockStack gap={{ xs: "800", sm: "400" }}>
                <InlineGrid gap="400">
                    <Box as="section" paddingInlineStart={{ xs: 400, sm: 0 }} paddingInlineEnd={{ xs: 400, sm: 0 }}>
                    </Box>

                    <Card roundedAbove="sm">
                        <Text as="h1" variant="headingXl">
                            SMS Setting
                        </Text>

                        {/* Remix Form */}
                        <Form method="POST">
                            <BlockStack gap="400">
                                {/* <Text>Provider</Text> */}
                                <Select
                                    label="Provider"
                                    name="provider"
                                    options={[
                                        { label: "Mram Sms", value: "Twilio" },
                                        { label: "Mim Sms", value: "Nexmo" },
                                    ]}
                                />
                            </BlockStack>

                            <BlockStack gap="400">
                                <TextField label="Sender Id" name="senderId" value={formState?.name} onChange={(value) => setFormState({ ...formState, name: value })} />
                            </BlockStack>

                            <BlockStack gap="400">
                                <TextField label="API Key" name="apiKey" value={formState?.name} onChange={(value) => setFormState({ ...formState, name: value })} />
                            </BlockStack>

                            <Box display="flex" justifyContent="flex-end">
                                <Button primary submit>
                                    Submit
                                </Button>
                            </Box>
                        </Form>

                        {/* Success message */}
                        {/* {actionData?.success && (
                            <Text variant="bodyMd" tone="positive">
                                {actionData.message}
                            </Text>
                        )} */}
                    </Card>
                </InlineGrid>

                {/* courier settings  */}
                <InlineGrid>

                    <Card gap='400'>
                        <Text as="h1" variant="headingXl">Courier Setting</Text>
                        <CourierSetting></CourierSetting>
                        <CourierSettingsSteadfast></CourierSettingsSteadfast>
                        <CourierSettingsRedex></CourierSettingsRedex>
                    </Card>

                </InlineGrid>
            </BlockStack>

            {/* Courier setting  */}

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
