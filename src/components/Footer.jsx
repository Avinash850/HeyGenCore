import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaLinkedin, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import ReactPlayer from "react-player";

const Footer = () => {
  const companyDetails = [
    "About Us",
    "Careers",
    "Privacy Policy",
    "Terms of Service",
    "Security Portal",
    "Ethics",
    "Moderation Policy",
    "Cookie Preference",
    "Contact",
  ];
  const companyResources = [
    "FAQ",
    "Blog",
    "Tutorial",
    "Weekly Webinar",
    "Case Studies",
    "Help Center",
    "Alternative",
    "Ambassador Program",
    "Creator Fund",
    "Affiliate Program",
    "Status",
  ];
  const fetures = [
    "Instant Avatar",
    "Video Translate",
    "Voice Cloning",
    "Photo Avatar",
    "AI Voices",
    "Personalized Video",
    "Streaming Avatar",
    "AI Avatars",
    "HeyGen API",
    "Zapier",
  ];
  const uses = ["Explainer & How to", "Marketing", "Training & Onboarding"];
  return (
    <>
      <Box
        background={"#7559FF"}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        h={"auto"}
        paddingTop={"4rem"}
      >
        <Box
          width={{ base: "90%", md: "90%", lg: "80%" }}
          display={"grid"}
          gridTemplateColumns={{
            lg: "22% 76%",
            md: "repeat(1,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={{ lg: "15px", md: "10px", base: "10px" }}
          m={{ lg: "auto", md: "auto", base: "auto" }}
          gridTemplateRows={{ lg: "auto", md: "auto", base: "auto" }}
        >
          <Box
            overflow={"hidden"}
            borderRadius={{ base: "16px", md: "18px", lg: "25px", xl: "28px" }}
            width={"100%"}
            height={"100%"}
            boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px"
          >
            <ReactPlayer
              url="https://resource.heygencdn.com/website/vera_remove/footer_new2.mp4"
              playing
              muted
              loop
              controls={false}
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              lg: "repeat(4,1fr)",
              md: "repeat(4,1fr)",
              base: "repeat(1,1fr)",
            }}
            gap={{ lg: "30px", md: "25px", base: "55px" }}
            fontWeight={"500"}
            background={"#E6E0F4"}
            boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius={{ base: "16px", md: "18px", lg: "25px", xl: "28px" }}
            p={{ lg: "5rem", md: "4rem", base: "2.5rem" }}
          >
            <Box>
              <Text
                fontWeight={{ lg: "500", md: "500", base: "400" }}
                fontSize={{ lg: "16px", md: "15px", base: "15px" }}
                lineHeight={{ lg: "1.6", md: "1.4", base: "1.4" }}
                marginBottom={{ lg: "20px", md: "15px", base: "20px" }}
                color="#7559FF"
              >
                Use Cases
              </Text>
              {uses?.map((el, i) => {
                return (
                  <Text
                    key={i}
                    fontWeight={{ lg: "500", md: "500", base: "450" }}
                    fontSize={{ lg: "16px", md: "13px", base: "15px" }}
                    lineHeight={{ lg: "1.7", md: "1.8", base: "1.8" }}
                    color="#312e41f4"
                  >
                    {el}
                  </Text>
                );
              })}
            </Box>
            <Box>
              <Text
                fontWeight={{ lg: "500", md: "500", base: "400" }}
                fontSize={{ lg: "16px", md: "15px", base: "15px" }}
                lineHeight={{ lg: "1.6", md: "1.4", base: "1.4" }}
                marginBottom={{ lg: "20px", md: "15px", base: "20px" }}
                color="#7559FF"
              >
                Features
              </Text>
              {fetures?.map((el, i) => {
                return (
                  <Text
                    key={i}
                    fontWeight={{ lg: "500", md: "500", base: "450" }}
                    fontSize={{ lg: "16px", md: "13px", base: "15px" }}
                    lineHeight={{ lg: "1.7", md: "1.8", base: "1.8" }}
                    color="#312e41f4"
                  >
                    {el}
                  </Text>
                );
              })}
            </Box>
            <Box>
              <Text
                fontWeight={{ lg: "500", md: "500", base: "400" }}
                fontSize={{ lg: "16px", md: "15px", base: "15px" }}
                lineHeight={{ lg: "1.6", md: "1.4", base: "1.4" }}
                marginBottom={{ lg: "20px", md: "15px", base: "20px" }}
                color="#7559FF"
              >
                Resources
              </Text>
              {companyResources?.map((el, i) => {
                return (
                  <Text
                    key={i}
                    fontWeight={{ lg: "500", md: "500", base: "450" }}
                    fontSize={{ lg: "16px", md: "13px", base: "15px" }}
                    lineHeight={{ lg: "1.7", md: "1.8", base: "1.8" }}
                    color="#312e41f4"
                  >
                    {el}
                  </Text>
                );
              })}
            </Box>
            <Box>
              <Text
                fontWeight={{ lg: "500", md: "500", base: "400" }}
                fontSize={{ lg: "16px", md: "15px", base: "15px" }}
                lineHeight={{ lg: "1.6", md: "1.4", base: "1.4" }}
                marginBottom={{ lg: "20px", md: "15px", base: "20px" }}
                color="#7559FF"
              >
                Company
              </Text>
              {companyDetails?.map((el, i) => {
                return (
                  <Text
                    key={i}
                    fontWeight={{ lg: "500", md: "500", base: "450" }}
                    fontSize={{ lg: "16px", md: "13px", base: "15px" }}
                    lineHeight={{ lg: "1.7", md: "1.8", base: "1.8" }}
                    color="#312e41f4"
                  >
                    {el}
                  </Text>
                );
              })}
            </Box>
          </Box>
        </Box>
        {/* --------------------------------- */}
        <Box
          display={"flex"}
          flexDir={{ lg: "row", md: "row", base: "column" }}
          justifyContent={"space-between"}
          w={{ lg: "78%", md: "85%", base: "90%" }}
          margin={{
            lg: "5rem auto 0",
            md: "2rem auto 0",
            base: "2.5rem auto 0",
          }}
          paddingBottom={"1.5rem"}
          alignItems={"center"}
        >
          {/* ----------------- */}
          <Box>
            <Box
              color={"gray.300"}
              fontWeight={"500"}
              lineHeight={"1.3"}
              fontSize={{ lg: "14px", md: "10px", base: "13px" }}
              textAlign={{ lg: "left", md: "left", base: "center" }}
            >
              <Text>©Copyright 2023 HeyGen</Text>
              <Text>
                12130 Millennium Drive Suite 300, Los Angeles, CA 90094
              </Text>
            </Box>
            <Box
              display={"flex"}
              mt={"20px"}
              gap={{ lg: "40px", md: "30px", base: "20px" }}
              alignItems={"center"}
              w={{ lg: "100%", md: "100%", base: "45%" }}
              m={{ lg: "1.8rem auto", md: "1.8rem auto", base: "2rem auto" }}
            >
              <Image
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65647d34db6c7206296b9b5a_cai.svg"
                alt=""
              />
              <Image
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65647d339c017f844ae8fe20_c2pa.svg"
                alt=""
              />
            </Box>
          </Box>
          {/* ---------------------------------- */}
          <Box
            display={"flex"}
            alignItems={"center"}
            color={"gray.200"}
            w={{ base: "100%", md: "30%", lg: "30%" }}
            fontSize={{ lg: "20px", md: "17px", base: "21px" }}
            justifyContent={{ base: "space-between" }}
          >
            <FaLinkedin />
            <FaTiktok />
            <FaYoutube />
            <FaXTwitter />
            <FaFacebook />
            <FaDiscord />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
