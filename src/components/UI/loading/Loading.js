import React from 'react';
import Loader from 'react-loader-spinner';

export default function Loading () {
  return (
    <Loader
      type="Bars"
      color="#288B50"
      // height={0}
      // width={90}
      style={{
        // border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    />
  );
}