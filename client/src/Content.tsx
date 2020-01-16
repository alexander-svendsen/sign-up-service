import React from 'react';
import {Box, Heading, Text, Button} from "@chakra-ui/core";


const Content = () => {
    return (
        <Box w="100%">
            <Box maxW="32rem" mx="auto">
                <Heading mb={4}>Modern online and offline payments for Africa</Heading>
                <Text fontSize="xl">
                    Paystack helps businesses in Africa get paid by anyone, anywhere in the
                    world
                </Text>
                <Button size="lg" variantColor="green" mt="24px">
                    Create a free account
                </Button>
            </Box>
        </Box>
    );

};

export default Content