import React from "react";
import { DetailDomainProps } from "../DetailDomain";
import "./index.css";

const CurrentDomain: React.FC<DetailDomainProps> = ({ domainName }) => {
  return (
    <div className="content-bottom current-domain-wrapper">
      <div className="content-bottom current-domain-wrapper">
        <h4 className="content-bottom-heading">Tên miền mặc định</h4>
        <div style={{ padding: "0 12px" }}>
          <div className="content-middle">
            <span className="current-domain-title">Tên miền</span>
            <span className="current-domain-name">{domainName}</span>
          </div>
          <div className="content-middle">
            <span className="current-domain-title">Trạng thái</span>
            <div className="content-middle-connect">Đã kết nối</div>
          </div>
          <div className="content-middle">
            <span className="current-domain-title">Ngày thêm</span>
            <span style={{ fontSize: "13px", marginLeft: "20px" }}>
              21 giờ 52 phút, ngày 30/03/2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDomain;
