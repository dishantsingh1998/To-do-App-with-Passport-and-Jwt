const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.hobbies = !isEmpty(data.hobbies) ? data.hobbies : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  //Country Check
  if (Validator.isEmpty(data.country)) {
    errors.country = "country field is required";
  }
  //Gender
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Name field is required";
  }

  //hobbies check
  if (Validator.isEmpty(data.hobbies)) {
    errors.hobbies = "Name field is required";
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};
