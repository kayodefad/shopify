import React from "react";
import Skeleton from "@yisheng90/react-loading";

const Loading = () => {
  return (
    <>
      <Skeleton height={300} />
      <Skeleton height={25} />
      <Skeleton height={25} />
      <Skeleton height={25} />
    </>
  );
};

export default Loading;
