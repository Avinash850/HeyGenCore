import React from "react";
import { Box } from "@chakra-ui/react";
import Head from "../components/content/Head";
import Create from "../components/content/Create";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box overflow={"hidden"}>
      <Head />
      <Create />
      <Footer/>
    </Box>
  );
};

export default Home;
