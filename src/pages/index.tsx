import { useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import ConnectButton from "../components/ConnectButton";
import AccountModal from "../components/AccountModal";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ConnectButton handleOpenModal={onOpen} />{" "}
      <AccountModal isOpen={isOpen} onClose={onClose}></AccountModal>
    </>
  );
};

export default Home;
