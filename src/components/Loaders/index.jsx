import React from "react";
import {LoaderBox, PageLoaderBox} from "./loaders.styles";
import propTypes from 'prop-types';


const Loader = (props) => {
  return (
    <LoaderBox
      {...props}
    >
      <div className={"spinner"} />
    </LoaderBox>
  );
};

export const PageLoader = (props) => {

  return (
    <PageLoaderBox
      {...props}
    >
      <div className={"ripple"}>
        <div />
        <div />
      </div>
    </PageLoaderBox>
  )
};

Loader.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

PageLoader.propTypes = {
  color: propTypes.string,
};


export default Loader;


