import { Box } from "@chakra-ui/core";

import HeroSection from "../components/HeroSection";
import GlobalData from "../components/GlobalData";
import IndonesiaData from "../components/IndonesiaData";
import CountryData from "../components/CountryData";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
      <GlobalData />
      <IndonesiaData />
      <CountryData />
    </Box>
  );
};

export default Home;
