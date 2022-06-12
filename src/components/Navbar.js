import {
  Box,
  Flex,
  Link,
  Wrap,
  WrapItem,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent='right' alignItems="center" flexDirection={{base:'column', md:'row'}} >
        <Link href="#" isExternal mr="12" fontWeight="bold" color="#696969" mb={{base:'2', md:'0'}}>
          TRIPS
        </Link>
        <Link href="#" isExternal mr="12" fontWeight="bold" color="#696969" mb={{base:'2', md:'0'}}>
          RECENTLY VIEWED
        </Link>
        <Link href="#" isExternal mr="12" fontWeight="bold" color="#696969" mb={{base:'2', md:'0'}}>
          BOOKINGS
        </Link>
        <Wrap mr={{base:'12', md:'0'}}>
          <WrapItem>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </WrapItem>
        </Wrap>
      </Flex>
      <Divider mt="14" mb="8" />
    </Box>
  );
};

export default Navbar;
