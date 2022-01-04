import React, { useState } from "react";
import { regexEmail, regexPassword } from "../regex";

function FormValidate(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordCf, setPassWordCf] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordErrorCf, setPasswordErrorCf] = useState("");

  const submituserRegistrationForm = (e) => {
    e.preventDefault();
    validate();
    alert(`name : ${name}, email: ${email}, mobile: ${mobile}`);
  };

  const validate = () => {
    /// validate Name
    if (!name) {
      setNameError("Vui lòng nhập trường này");
    }
    if (!name.match(/^[a-zA-Z ]*$/)) {
      setNameError("Tên không được chứ số và kí tự đặc biệt");
    } else if (name && name.match(/^[a-zA-Z ]*$/)) {
      setNameError("");
    }

    /// validate Email

    if (!email.match(regexEmail)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }

    /// validate Mobile

    if (!mobile.match(/^[0-9]{10}$/)) {
      setMobileError("Số điện thoại không hợp lệ");
    } else {
      setMobileError("");
    }

    /// validate password
    if (!password.match(regexPassword)) {
      setPasswordError(
        "Mật khẩu phải chứa ít nhất 8 ký tự và có ít nhất 1 ký tự đặc biệt"
      );
    } else {
      setPasswordError("");
    }
    if (password !== passwordCf) {
      setPasswordErrorCf("Mật khẩu không trùng khớp");
    } else {
      setPasswordErrorCf("");
    }
  };
  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Registration page</h3>
        <form
          method="post"
          name="userRegistrationForm"
          onSubmit={submituserRegistrationForm}
        >
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {<div className="errorMsg">{nameError}</div>}

          <label>Email ID:</label>
          <input
            type="text"
            name="emailid"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="errorMsg">{emailError}</div>
          <label>Mobile No:</label>
          <input
            type="text"
            name="mobileno"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="errorMsg">{mobileError}</div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <div className="errorMsg">{passwordError}</div>
          <label>ConfirmPassword</label>
          <input
            type="password"
            name="passwordcf"
            value={passwordCf}
            onChange={(e) => setPassWordCf(e.target.value)}
          />
          <div className="errorMsg">{passwordErrorCf}</div>
          <input type="submit" className="button" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default FormValidate;
