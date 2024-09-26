import { Button } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const Btn = ({ btn, icn }) => {
  return (
    <Button
      _hover={{
        background: "linear-gradient( #9282e7b3, #7559ff)",
      }}
      backgroundColor={"#7559ff"}
      borderRadius={"12px"}
      height={"52px"}
      fontWeight={700}
      fontSize={"15px"}
      color={"#fff"}
    >
      {btn}{" "}
      {icn && (
        <ArrowRight
          size={"17px"}
          style={{
            marginLeft: "12px",
            marginTop: "2px",
          }}
        />
      )}
    </Button>
  );
};

export default Btn;
