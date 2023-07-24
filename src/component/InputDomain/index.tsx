import { TextField } from "@mui/material";
import React from "react";
import "./index.css";

const InputDomain: React.FC<any> = ({
  errorName,
  domainName,
  handleChange,
  isEmptyNameDomain,
}) => {
  return (
    <div style={{ padding: "0 12px" }}>
      <div className="input-domain-wrapper">
        <TextField
          error={errorName}
          label="Nhập tên miền của bạn"
          variant="outlined"
          value={domainName}
          onChange={handleChange}
          fullWidth
          style={{ margin: "16px 0 6px" }}
        />
        {errorName ? (
          <span className="input-domain-error">x</span>
        ) : !errorName && !isEmptyNameDomain ? (
          <span className="input-domain-oke">v</span>
        ) : (
          ""
        )}
      </div>
      {errorName ? (
        <span className="content-error-text">
          Tên miền không đúng định dạng
        </span>
      ) : !errorName && !isEmptyNameDomain ? (
        <span className="content-header-text">Tên miền hợp lệ</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputDomain;
