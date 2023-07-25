import React, { useEffect, useState } from "react";
import { DetailDomainProps } from "../DetailDomain";
import { DomainFormPage } from "../../constants/detailDomain";
import "./index.css";

const DetailDomainCountdown: React.FC<DetailDomainProps> = ({
  domainName,
  setFormStep,
}) => {
  const initialMinute = 9,
    initialSeconds = 59;
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
      sessionStorage.setItem("formStep", DomainFormPage.PAGE_4);
      setFormStep(DomainFormPage.PAGE_4);
    }
  }, [minutes, seconds]);

  return (
    <div style={{ margin: "12px 0" }}>
      <div className="detail-domain-countdown">
        <span style={{ display: "block", fontSize: "20px", fontWeight: "600" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}s
        </span>
      </div>
      <div style={{ padding: "0 12px" }}>
        <div className="content-middle">
          <span className="detail-domain-title">Tên miền</span>
          <span style={{ fontSize: "13px", marginLeft: "22px" }}>
            {domainName}
          </span>
        </div>
        <div className="content-middle">
          <span className="detail-domain-title">IP hiện tại</span>
          <div className="content-countdown-connect">Hệ thống đang kết nối</div>
        </div>
        <div className="">
          <span className="detail-domain-ip">IP KiotVietWeb</span>
          <table className="detail-domain-table">
            <tr style={{ backgroundColor: "rgb(219 197 197)" }}>
              <td className="detail-domain-td">Host</td>
              <td className="detail-domain-td">Loại</td>
              <td className="detail-domain-td">Giá trị</td>
            </tr>
            <tr style={{ backgroundColor: "#fff" }}>
              <td className="detail-domain-td">@</td>
              <td className="detail-domain-td">A</td>
              <td className="detail-domain-td">
                <div>123.456.789</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="detail-domain-notice">
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
