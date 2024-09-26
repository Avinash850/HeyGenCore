import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Btn from "./Btn";
import Marquee from "../../hooks/Marquee";
import Demo from "./Demo";

const Head = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const btnValue = isMobile ? "Try Demo" : "Get started for free";
  return (
    <Flex bg={"#E6E0F4"} flexDir={"column"} align={"center"}>
      <Heading
        w={{ base: "300px", md: "650px", lg: "750px" }}
        align={"center"}
        fontSize={{ base: "40px", md: "60px", lg: "78px" }}
        fontWeight={450}
        color={"#7559ff"}
        mt={{ base: "30px", md: "40px", lg: "50px" }}
        lineHeight={{ base: "40px", md: "65px", lg: "70px", xl: "72px" }}
      >
        AI-powered video
        {"  "}
        <Text as="span" color={"#222"}>
          creations at scale
        </Text>
      </Heading>
      <Text
        width={{ base: "auto", md: "390px", lg: "450px" }}
        textAlign={"center"}
        margin={"24px 0px 24px 0px"}
        color={"#0c062c"}
        fontSize={{ base: "16px", md: "20px", lg: "24px" }}
        lineHeight={{ base: "18px", md: "25px", lg: "30px" }}
      >
        Effortlessly produce studio quality videos with AI-generated avatars and
        voices.
      </Text>
      <Btn btn={btnValue} icn={true} />
      <Text color={"#4e5666"} fontSize={"12px"}>
        No credit card needed
      </Text>
      <Box
        width={{ base: "auto", md: "390px", lg: "550px" }}
        mt={{ base: "20px", md: "30px", lg: "40px" }}
      >
        <Marquee />
      </Box>
      <Box
        width={"100%"}
        style={{
          background:
            "linear-gradient(172deg, rgba(230,224,244,1) 0%, rgba(230,224,244,1) 5%, rgba(230,224,244,1) 12%, rgba(230,224,244,1) 34%, rgba(117,89,255,1) 95%)",
        }}
      >
        <Demo />
      </Box>
    </Flex>
  );
};

export default Head;
