import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import Image from "next/image";
import profileImage from "../assets/images/profile.jpg";
const menuContact = () => {
  return (
    <AppLayout>
      <h1>Contact</h1>
      <Image src={profileImage} alt="soyoung-profile" width={250} />
      <p></p>
    </AppLayout>
  );
};

export default menuContact;
