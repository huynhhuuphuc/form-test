import React, { useState } from "react";
import Button from "@mui/material/Button";
import DetailDomain from "../DetailDomain";
import { DomainFormPage } from "../../constants/detailDomain";
import DetailDomainCountdown from "../DetailDomainCountdown";
import CurrentDomain from "../CurrentDomain";
import Popover from "@mui/material/Popover";
import InputDomain from "../InputDomain";
import "./index.css";

const DomainForm: React.FC = () => {
  const [domainName, setDomainName] = useState<string>("");
  const [errorName, setErrorName] = useState<any>();
  const [formStep, setFormStep] = useState(DomainFormPage.PAGE_1);
  const validDomainRegex = /^(?!:\/\/)(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleOpenDisconnect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setDomainName(valueInput);
    sessionStorage.setItem("domainName", valueInput);
    setErrorName(valueInput.replace(validDomainRegex, ""));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDetailDomain = () => {
    setFormStep(DomainFormPage.PAGE_2);
  };

  const handleDetailDomainCountdown = () => {
    setFormStep(DomainFormPage.PAGE_3);
  };

  const isEmptyNameDomain = domainName?.length <= 0;

  return (
    <div className="container">
      <div className="content">
        <div className="content-header">
          <h2 className="content-header-heading">Tên miền</h2>
          <div style={{ marginBottom: "8px" }}>
            <span className="content-header-text">
              Tăng khả năng hiển thị trang website của bạn
            </span>
            <span className="content-header-text">
              Bạn có thể{" "}
              <span className="content-header-text-link">
                xem hướng dẫn tại đây
              </span>
            </span>
          </div>
        </div>
        <div className="content-bottom" style={{ margin: "12px 0" }}>
          <h4 className="content-bottom-heading">Tên miền mặc định</h4>
          <div style={{ padding: "0 12px" }}>
            <div className="content-middle">
              <span className="content-name-title">Tên miền</span>
              <span className="content-name-domain">
                cuahangxxx.kiotvietweb.com
              </span>
            </div>
            <div className="content-middle">
              <span className="content-name-title">Trạng thái</span>
              <div className="content-middle-connect">Đã kết nối</div>
            </div>
            <div className="content-middle">
              <span className="content-name-title">Ngày thêm</span>
              <span className="content-name-time">
                16 giờ 52 phút, ngày 27/03/2023
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="content-bottom">
            {formStep === DomainFormPage.PAGE_1 ? (
              <h4 className="content-bottom-heading content-dash">
                Tên miền tùy chỉnh
              </h4>
            ) : formStep === DomainFormPage.PAGE_2 ||
              formStep === DomainFormPage.PAGE_3 ? (
              <div className="content-dash domain-flex">
                <h4 className="content-bottom-heading">Tên miền tùy chỉnh</h4>
                <Button
                  style={{
                    fontSize: "12px",
                    backgroundColor: "#ddddf5",
                    textTransform: "none",
                    fontWeight: "600",
                    marginRight: "12px",
                  }}
                  onClick={() => setFormStep(1)}
                  size="medium"
                >
                  Thay đổi tên miền
                </Button>
              </div>
            ) : (
              <div className="content-dash domain-flex">
                <h4 className="content-bottom-heading">Tên miền tùy chỉnh</h4>
                <Button
                  style={{
                    fontSize: "12px",
                    backgroundColor: "#ddddf5",
                    textTransform: "none",
                    fontWeight: "600",
                    marginRight: "12px",
                  }}
                  aria-describedby={id}
                  onClick={handleOpenDisconnect}
                  size="medium"
                >
                  ...
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Button
                    onClick={(e) => {
                      setFormStep(1);
                    }}
                    style={{ padding: "10px", cursor: "pointer" }}
                  >
                    Hủy kết nối
                  </Button>
                </Popover>
              </div>
            )}
            {formStep === DomainFormPage.PAGE_1 && (
              <InputDomain
                errorName={errorName}
                domainName={domainName}
                handleChange={handleChange}
                isEmptyNameDomain={isEmptyNameDomain}
              />
            )}
            {formStep === DomainFormPage.PAGE_2 && (
              <DetailDomain domainName={domainName} formStep={formStep} />
            )}
            {formStep === DomainFormPage.PAGE_3 && (
              <DetailDomainCountdown
                domainName={domainName}
                setFormStep={setFormStep}
              />
            )}
            {formStep === DomainFormPage.PAGE_4 && (
              <CurrentDomain domainName={domainName} />
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0 14px 14px 0",
              }}
            >
              {formStep === DomainFormPage.PAGE_1 ? (
                <Button
                  onClick={handleDetailDomain}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isEmptyNameDomain || errorName}
                >
                  Tiếp tục
                </Button>
              ) : formStep === DomainFormPage.PAGE_2 ? (
                <Button
                  onClick={handleDetailDomainCountdown}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Kết nối
                </Button>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DomainForm;
