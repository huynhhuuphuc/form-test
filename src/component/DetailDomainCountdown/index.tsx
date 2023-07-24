import React, { useEffect, useState } from "react";
import { DetailDomainProps } from "../DetailDomain";
import "./index.css";
import { DomainFormPage } from "../../constants/detailDomain";

const DetailDomainCountdown: React.FC<DetailDomainProps> = ({
  domainName,
  setFormStep,
}) => {
  const initialMinute = 0,
    initialSeconds = 5;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setFormStep(DomainFormPage.PAGE_4);
    }
  }, [minutes, seconds]);

  return (
    <div className="" style={{ margin: "12px 0" }}>
      <div
        style={{
          padding: "5px 10px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "6px",
          width: "fit-content",
          marginLeft: "12px",
        }}
      >
        <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}s
        </span>
      </div>
      <div style={{ padding: "0 12px" }}>
        <div className="content-middle">
          <span style={{ fontSize: "13px", fontWeight: "600" }}>Tên miền</span>
          <span style={{ fontSize: "13px", marginLeft: "22px" }}>
            {domainName}
          </span>
        </div>
        <div className="content-middle">
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            IP hiện tại
          </span>
          <div className="content-countdown-connect">Hệ thống đang kết nối</div>
        </div>
        <div className="">
          <span
            style={{ display: "block", fontSize: "13px", fontWeight: "600" }}
          >
            IP KiotVietWeb
          </span>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "4px",
            }}
          >
            <tr style={{ backgroundColor: "rgb(219 197 197)" }}>
              <td style={{ padding: "8px", border: "1px solid #000" }}>Host</td>
              <td style={{ padding: "8px", border: "1px solid #000" }}>Loại</td>
              <td style={{ padding: "8px", border: "1px solid #000" }}>
                Giá trị
              </td>
            </tr>
            <tr style={{ backgroundColor: "#fff" }}>
              <td style={{ padding: "8px", border: "1px solid #000" }}>@</td>
              <td style={{ padding: "8px", border: "1px solid #000" }}>A</td>
              <td style={{ padding: "8px", border: "1px solid #000" }}>
                <div>123.456.789</div>
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            marginTop: "12px",
            padding: "8px",
            backgroundColor: "#fafab3",
            border: "2px solid #ed9999",
            borderRadius: "8px",
            fontSize: "13px",
          }}
        >
          <div>
            Hệ thống đang thiết lập tên miền. Bạn có thể truy cập tên miền sau{" "}
            <span style={{ fontWeight: "700" }}>10phút</span>, nếu không được
            vui lòng liên hệ hotline{" "}
            <span style={{ fontWeight: "700" }}>1900 6522</span> để được hỗ trợ
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailDomainCountdown;
