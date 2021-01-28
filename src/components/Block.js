import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Status from "./Status";
import { Card, Overline, BodyText } from "material-bread";

const Block = ({ block, index }) => {
  return (
    <Card style={styles.container}>
      <Overline
        text={String(block.attributes.index).padStart(3, "0")}
        color={colors.blockPrimary}
        style={styles.label}
      />

      <BodyText
        type={2}
        text={block.attributes.data}
        style={styles.description}
      />
    </Card>
  );
};

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    attributes: PropTypes.shape({
      index: PropTypes.number,
      timestamp: PropTypes.number,
      data: PropTypes.string
    })
  }).isRequired,
  index: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blockItemBackground,
    elevation: 0,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginBottom: 5
  },

  label: {
    fontWeight: "700",
    marginTop: 2,
    marginBottom: 7
  },

  description: {
    color: colors.blockDescription,
    fontSize: 14
  }
});

export default Block;
