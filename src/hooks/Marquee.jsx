import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { default as FastMarquee } from "react-fast-marquee";
const Marquee = ({ logo }) => {
  const logoMarque = [
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp",
    "https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp",
  ];
  return (
    <FastMarquee
      speed={17}
      gradient={true}
      gradientWidth={100}
      gradientColor={"#E6E0F4"}
    >
      {logoMarque?.map((logo, ind) => {
        return (
          <Box key={ind}>
            <Image src={logo} alt="logo" width={"80px"} />
          </Box>
        );
      })}
    </FastMarquee>
  );
};

export default Marquee;
