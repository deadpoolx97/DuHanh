import { Box } from "@material-ui/core";
import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";

const ProductThumbnail = ({ product }) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
};

export default ProductThumbnail;
