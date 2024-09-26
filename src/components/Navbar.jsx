import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDown, Menu } from "lucide-react";
import React from "react";
import Btn from "./content/Btn";

const Navbar = () => {
  const menuItems = ["Use Cases", "Features", "Resources"];
  return (
    <Flex
      position={"sticky"}
      top={0}
      zIndex={9999}
      justifyContent={{ base: "space-around", lg: "center" }}
      alignItems={"center"}
      alignContent={"center"}
      columnGap={{ base: "20px", md: "30px", lg: "86px", xl: "186" }}
      bg={"#E6E0F4"}
      padding={{
        base: "5px 0px 5px 0px",
        md: "12px 0px 12px 0px",
        lg: "13px 0px 13px 0px",
      }}
    >
      <Image
        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
        alt="logo"
        width={{ base: "86px", md: "100px", lg: "110px" }}
      />
      <Flex display={{ base: "none", md: "none", lg: "block" }}>
        {menuItems?.map((el, ind) => {
          return (
            <Button
              key={ind}
              color={"#222"}
              borderRadius={"50px"}
              _hover={{
                background: "#d6cfe6c0",
                color: "#7559ff",
                "& svg": {
                  transform: "rotate(180deg)", // Rotate the icon 180 degrees when hovered
                },
              }}
              background={"transparent"}
            >
              {el}{" "}
              <ChevronDown
                size={18}
                color="#7559ff"
                style={{
                  marginLeft: "12px",
                  marginTop: "2px",
                  transition: "transform 0.3s ease",
                }}
              />{" "}
            </Button>
          );
        })}
        <Button
          _hover={{
            background: "#d6cfe6c0",
            color: "#7559ff",
          }}
          background={"transparent"}
          color={"#222"}
          borderRadius={"50px"}
        >
          Pricing
        </Button>
      </Flex>
      <Flex
        alignItems={"center"}
        columnGap={{ base: "5px", lg: "10px", lg: "16px" }}
      >
        <Text
          display={{ base: "none", md: "none", lg: "block" }}
          color={"#222"}
          fontSize={"16px"}
          fontWeight={500}
          cursor={"pointer"}
        >
          Contact Sales
        </Text>
        <Btn btn={"Get Started"} />
        <Button
          height={"47px"}
          background={"rgba(117,89,255,.1)"}
          display={{ base: "block", md: "block", lg: "none" }}
        >
          <Menu color="#222" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
