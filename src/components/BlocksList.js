import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { BodyText } from "material-bread";

const BlocksList = ({ blocks, error }) => {
  if (blocks && blocks.length === 0) {
    return <BodyText type={2} text={"No blocks to show!"} />;
  }

  return (
    <>
      {blocks.map((block, index) => {
        return <Block block={block} key={index} />;
      })}
    </>
  );
};

BlocksList.propTypes = {
  // node: PropTypes.shape({
  //   url: PropTypes.string,
  //   online: PropTypes.bool,
  //   name: PropTypes.string,
  //   loading: PropTypes.bool
  // }).isRequired,
  // expanded: PropTypes.bool,
  // toggleNodeExpanded: PropTypes.func.isRequired
};

const styles = StyleSheet.create({});

export default BlocksList;
