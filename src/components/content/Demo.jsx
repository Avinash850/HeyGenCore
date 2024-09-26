import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import videoJosh from "../../assets/header_video_josh2.mp4";
import { ReactTyped } from "react-typed";
const Demo = () => {
  return (
    <Flex
      position={"relative"}
      justifyContent={"center"}
      padding={{
        base: "0px 15px 0px 15px",
        md: "0px 19px 0px 19px",
        lg: "0px",
      }}
      mt={{ base: "230px", md: "270px", lg: "35px" }}
      mb={{ base: "15px", md: "22px", lg: "190px", xl: "90px" }}
    >
      <Box
        width={{ base: "200px", md: "370px", lg: "370px" }}
        position={"absolute"}
        zIndex={9}
        height={{ base: "fit-content", md: "fit-content", lg: "365px" }}
        left={{ base: 3, md: 10, lg: 100, xl: 150 }}
        top={{ base: -60, md: -60, lg: 100, xl: 120 }}
        bg={"rgba(255, 255, 255, 0.5)"}
        boxShadow={"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"}
        backdropFilter={"blur(12.5px)"}
        borderRadius={"15px"}
        padding={{ base: "16px", md: "20px", lg: "35px" }}
      >
        <Avatar
          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
          name="A"
          size={{ base: "sm", md: "md", lg: "lg" }}
          background={"#7559ff"}
        />
        <Avatar
          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
          name="A"
          size={{ base: "sm", md: "md", lg: "lg" }}
        />
        <Avatar
          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
          name="A"
          size={{ base: "sm", md: "md", lg: "lg" }}
        />
        <Text
          mt={"12px"}
          fontFamily={"arial, sans-serif"}
          fontSize={{ base: "10px", md: "15px", lg: "17px", xl: "18px" }}
          color={"#7559ff"}
        >
          Script
        </Text>
        <ReactTyped
          strings={[
            " Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a fewclicks, you can generate custom videos for social media,presentations, educ",
          ]}
          typeSpeed={20}
          showCursor={false}
          width={200}
          loop
        />
      </Box>
      <Box
        position={"relative"}
        overflow={"hidden"}
        width={{ base: "auto", md: "85%", lg: "50%" }}
        borderRadius={{ base: "12px", md: "18px", lg: "27px" }}
      >
        <ReactPlayer
          url={videoJosh}
          playing
          muted
          loop
          controls={false}
          width="100%"
          height="100%"
        />
        <Button position={"absolute"} zIndex="1">
          Demo
        </Button>
      </Box>
    </Flex>
  );
};

export default Demo;
