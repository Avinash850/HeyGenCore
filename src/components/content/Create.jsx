import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Btn from "./Btn";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";

const Create = () => {
  const firstVideo = [
    {
      video: "https://resource.heygencdn.com/homepage/usecase_sales2.mp4",
      title: "Sales outreach",
      head: "that converts",
      detail: "Create personalized outreach videos at scale",
    },
    {
      video: "https://resource.heygencdn.com/homepage/usecase_mailchimp2.mp4",
      title: "Content marketing",
      head: "‍that engage",
      detail: "Supercharge your content calendar with videos",
    },
  ];
  const secondVideo = [
    {
      video:
        "https://resource.heygencdn.com/homepage/usecase_productmarketing2.mp4",
      title: "Product marketing",
      head: "that resonates",
      detail: "Produce engaging & concise product videos",
    },
    {
      video:
        "https://resource.heygencdn.com/website/vera_remove/usecase_lnd2_new_output.mp4",
      title: "Learning & development",
      head: "‍teaches",
      detail: "Create training videos your team will actually watch",
    },
  ];
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={
        "linear-gradient(163deg, rgba(187,173,255,1) 0%, rgba(187,173,255,1) 0%, rgba(53,52,175,1) 70%)"
      }
      padding={{
        base: "0px 10px 0px 10px",
        md: "0px 19px 0px 19px",
        lg: "0px",
      }}
    >
      <Text
        w={{ base: "auto", md: "650px", lg: "850px", xl: "76%" }}
        align={"left"}
        fontWeight={450}
        lineHeight={{ base: "50px", md: "75px", lg: "110px", xl: "122px" }}
        color={"#ffff"}
        fontSize={{ base: "52px", md: "90px", lg: "130px" }}
      >
        Create videos <br /> for every <br /> team
      </Text>
      <Text
        mt={"15px"}
        display={{ base: "block", md: "none", lg: "none" }}
        fontSize={{ base: "17px", md: "20px", lg: "22px", xl: "24px" }}
        color={"#ffffff"}
      >
        Engage, explain, entertain. AI-powered <br />
        video creation for any need.
      </Text>
      <Flex
        mt={"15px"}
        gap={{ base: "13px", md: "19px", lg: "24px", xl: "26px" }}
      >
        <Flex
          alignItems={{ base: "flex-start", md: "flex-end", lg: "flex-end" }}
          mt={{ base: "10px", md: "58px", lg: "85px", xl: "100px" }}
          flexDir={"column"}
          gap={{ base: "13px", md: "19px", lg: "24px", xl: "26px" }}
        >
          {firstVideo?.map((el, i) => {
            return (
              <Box
                w={{ base: "auto", md: "auto", lg: "75%" }}
                key={i}
                overflow={"hidden"}
                borderRadius={{
                  base: "12px",
                  md: "16px",
                  lg: "20px",
                  xl: "25px",
                }}
              >
                <Box>
                  <ReactPlayer
                    url={el.video}
                    playing
                    muted
                    loop
                    controls={false}
                    width="100%"
                    height="100%"
                  />
                </Box>

                <Flex
                  bg={"#0b071e"}
                  flexDir={"column"}
                  padding={{ base: "5px", md: "25px", lg: "20px", xl: "34px" }}
                >
                  <Heading
                    color={"#ffff"}
                    fontSize={{
                      base: "15px",
                      md: "19px",
                      lg: "26px",
                      xl: "30px",
                    }}
                  >
                    {el.title}
                  </Heading>
                  <Heading
                    color={"#bbadff"}
                    fontSize={{
                      base: "15px",
                      md: "19px",
                      lg: "26px",
                      xl: "30px",
                    }}
                  >
                    {el.head}
                  </Heading>
                  <Flex
                    alignItems={"center"}
                    gap={{ base: "15px", md: "18px", lg: "27px", xl: "26px" }}
                  >
                    <Text fontSize={"14px"} color={"#bcc1cc"}>
                      {el.detail}
                    </Text>
                    <Flex
                      display={{ base: "none", md: "none", lg: "flex" }}
                      gap={"10px"}
                    >
                      <Btn btn={"Get started"} icn={true} />
                      <Button
                        border={"1px solid rgba(255,255,255,.1)"}
                        backgroundColor={"rgba(117,89,255,.1)"}
                        variant="outline"
                        borderRadius={"10px"}
                        height={"52px"}
                        colorScheme="none"
                      >
                        {" "}
                        <Play color="#fff" size={"15px"} />
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Flex>
        <Flex
          mt={{ base: "15px", md: "-58px", lg: "-85px", xl: "-180px" }}
          flexDir={"column"}
          gap={{ base: "15px", md: "19px", lg: "24px", xl: "26px" }}
        >
          <Text
            display={{ base: "none", md: "none", lg: "block" }}
            fontSize={{ base: "17px", md: "20px", lg: "22px", xl: "24px" }}
            color={"#ffffff"}
          >
            Engage, explain, entertain. AI-powered <br />
            video creation for any need.
          </Text>
          {secondVideo?.map((el, i) => {
            return (
              <Box
                w={{ base: "auto", md: "auto", lg: "75%" }}
                key={i}
                overflow={"hidden"}
                borderRadius={{
                  base: "12px",
                  md: "16px",
                  lg: "20px",
                  xl: "25px",
                }}
              >
                <Box>
                  <ReactPlayer
                    url={el.video}
                    playing
                    muted
                    loop
                    controls={false}
                    width="100%"
                    height="100%"
                  />
                </Box>

                <Flex
                  bg={"#0b071e"}
                  flexDir={"column"}
                  padding={{ base: "5px", md: "25px", lg: "20px", xl: "34px" }}
                >
                  <Heading
                    color={"#ffff"}
                    fontSize={{
                      base: "15px",
                      md: "19px",
                      lg: "26px",
                      xl: "30px",
                    }}
                  >
                    {el.title}
                  </Heading>
                  <Heading
                    color={"#bbadff"}
                    fontSize={{
                      base: "15px",
                      md: "19px",
                      lg: "26px",
                      xl: "30px",
                    }}
                  >
                    {el.head}
                  </Heading>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    gap={{ base: "15px", md: "18px", lg: "20px", xl: "26px" }}
                  >
                    <Text fontSize={"14px"} color={"#bcc1cc"}>
                      {el.detail}
                    </Text>
                    <Flex
                      display={{ base: "none", md: "none", lg: "flex" }}
                      gap={"10px"}
                    >
                      <Btn btn={"Get started"} icn={true} />
                      <Button
                        border={"1px solid rgba(255,255,255,.1)"}
                        backgroundColor={"rgba(117,89,255,.1)"}
                        variant="outline"
                        borderRadius={"10px"}
                        height={"52px"}
                        colorScheme="none"
                      >
                        {" "}
                        <Play color="#fff" size={"15px"} />
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Create;
