import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

const QuantityField = (props) => {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { setValue } = form;

  return (
    <FormControl fullWidth margin="normal" variant="outlined" size="small">
      <Typography>{label}</Typography>

      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <Box className={classes.box}>
            <IconButton
              style={{
                borderRadius: "4px",
                background: "var(--primary-color)",
                marginRight: "10px",
                height: "40px",
              }}
              onClick={() => setValue(name, Number.parseInt(value) - 1)}
            >
              <i style={{ color: "#fff" }} className="fa fa-minus" />
            </IconButton>

            <OutlinedInput
              id={name}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />

            <IconButton
              style={{
                borderRadius: "4px",
                background: "var(--primary-color)",
                marginLeft: "10px",
                height: "40px",
              }}
              onClick={() =>
                setValue(name, Number.parseInt(Number.parseInt(value) + 1))
              }
            >
              <i style={{ color: "#fff" }} className="fa fa-plus" />
            </IconButton>
          </Box>
        )}
      />
    </FormControl>
  );
};
QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {},

  box: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    maxWidth: "200px",
  },
}));
export default QuantityField;
