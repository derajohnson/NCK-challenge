import React from "react";
import { Box, Flex, Text, Image, FormLabel, Input, Radio, Button, Divider, GridItem, Grid } from "@chakra-ui/react";

import visa from "../assets/visa.webp";
import mastercard from "../assets/mastercard-logo.svg";
import paypal from "../assets/paypal-logo.png";
import chip from "../assets/chip.png";

const Form = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Text fontWeight="bold" fontSize="2xl">
            Payment Information
          </Text>
          <Text fontSize="14px" mt="2" color="#C0C0C0">
            Choose your method of payment.
          </Text>
        </Box>
        <Box mt={{ base: "5", md: "0" }}>
          <Flex>
            <Box cursor="pointer">
              <Image boxSize="40px" h="45px" src={visa} alt="visa" />
            </Box>
            <Box cursor="pointer">
              <Image
                boxSize="70px"
                h="45px"
                src={mastercard}
                alt="mastercard"
              />
            </Box>
            <Box cursor="pointer">
              <Image boxSize="70px" h="45px" src={paypal} alt="paypal" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex mt="8" justifyContent="space-between" flexDirection={{base:'column', lg:'row'}}>
        <Box w={{base:'100%', lg:'35%'}} mb='10'>
          <Box
            bgColor="#FF3CAC"
            bgGradient="linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);"
            pl="8"
            py="8"
            borderRadius="base"
            color="white"
            fontSize="14px"
          >
            <Text mb="2" letterSpacing="widest" fontSize="12px">
              CARD NUMBER
            </Text>
            <Text mb="2" letterSpacing="6px">
              4324 5433 9382 1030
            </Text>
            <Image src={chip} alt="chip" mb="3" />
            <Text mb="2" letterSpacing="widest" fontSize="12px">
              EXPIRATION DATE
            </Text>
            <Text mb="2" letterSpacing="6px">
              03/24
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Text letterSpacing="wider">John Doe</Text>
              <Image
                src={mastercard}
                boxSize="120px"
                h="45px"
                alt="mastercard"
              />
            </Flex>
          </Box>
        </Box>

        <Box w={{base: '100%', lg:'50%'}}>
          <form>
            <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}} gap={6}>
              <GridItem>
                <Box mb='5'>
                  <FormLabel htmlFor="credit card number" color="#696969">
                    Credit card number
                  </FormLabel>
                  <Input id="credit-card" type="number" bgColor='blackAlpha.50'/>
                </Box>
                <Box mb='5'>
                  <FormLabel htmlFor="security code" color="#696969">Security code</FormLabel>
                  <Input id="security-code" type="number" bgColor='blackAlpha.50' />
                </Box>
              </GridItem>
              <GridItem>
                <Box mb='5'>
                  <FormLabel htmlFor="expiration date" color="#696969">
                    Expiration date
                  </FormLabel>
                  <Input id="expiration" type="number" bgColor='blackAlpha.50'/>
                </Box>
                <Box>
                  <FormLabel htmlFor="postal code" color="#696969">Postal code</FormLabel>
                  <Input id="postal-code" type="number" bgColor='blackAlpha.50'/>
                </Box>
              </GridItem>
            </Grid>
          </form>
      <Radio value='purchase' mt='8' color="#696969">Use this card for next time purchase</Radio>
      <Box>
      <Button bgColor='blue.500' color='white' variant='solid' mt='6' py='6' w='100%' _hover={{background:'blue.300'}}>
    Add card
  </Button>
      </Box>
        </Box>
      </Flex>
 
      <Divider my='10'/>
      <Flex fontWeight='bold' justifyContent='space-between' fontSize={{base:'14px', md:'18px'}} mb='5'>
          <Box>
              <Text>Subtotal</Text>
          </Box>
          <Box>
              <Text><i class="fa-solid fa-naira-sign"></i>2,497.00</Text>
          </Box>

      </Flex>
      <Flex fontWeight='bold' justifyContent='space-between' fontSize={{base:'14px', md:'18px'}} mb='5'>
          <Box>
              <Text>Estimated TAX</Text>
          </Box>
          <Box>
              <Text><i class="fa-solid fa-naira-sign"></i>119.64</Text>
          </Box>

      </Flex>

      <Flex fontWeight='bold' justifyContent='space-between' fontSize={{base:'14px', md:'18px'}} mb='5'>
          <Box>
              <Text>Promotional Code: <Text as='span' color="#C0C0C0">Z4KXLM9A</Text></Text>
          </Box>
          <Box>
              <Text><i class="fa-solid fa-naira-sign"></i>-60.00</Text>
          </Box>

      </Flex>

      <Divider my='10'/>
      <Flex fontWeight='bold' flexDirection={{base:'column', lg:'row'}} justifyContent='space-between' fontSize='18px' mb='10' alignItems='center'>
          <Box order={{base:'1', lg:'0'}}>
              <Button _hover={{background:'blue.300'}} bgColor='blue.500' color='white' variant='solid' mt='6' py='7'>Complete payment</Button>
          </Box>
          <Box>
              <Text fontSize='2xl' fontWeight='bold' mt='5'>TOTAL: <i class="fa-solid fa-naira-sign"></i>2556.64</Text>
          </Box>

      </Flex>
    </Box>
  );
};

export default Form;
