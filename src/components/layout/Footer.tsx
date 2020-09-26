import { Box, Text, Link as ChakraLink } from "@chakra-ui/core";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      width="full"
      textAlign="center"
      marginY={8}
    >
      <Text>
        2020 -{" "}
        <Link href="/about" passHref>
          <ChakraLink>About</ChakraLink>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
