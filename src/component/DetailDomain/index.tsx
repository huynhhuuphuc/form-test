import React from "react";
import "./index.css";

export type DetailDomainProps = {
  domainName: string;
  formStep?: any;
  setFormStep?: any;
};

const DetailDomain: React.FC<DetailDomainProps> = ({ domainName }) => {
  return (
    <div className="content-bottom" style={{ margin: "12px 0" }}>
      <div style={{ padding: "0 12px" }}>
        <div className="content-middle">
          <span className="detail-domain-title">Tên miền</span>
          <span className="detail-domain-name">{domainName}</span>
        </div>
        <div className="content-middle">
          <span className="detail-domain-title">IP hiện tại</span>
          <div className="detail-domain-name">
            123.456.789 <span className="detail-domain-oke">v</span>
          </div>
        </div>
        <div className="">
          <span className="detail-domain-ipkiot">IP KiotVietWeb</span>
          <table className="detail-domain-table">
            <tr style={{ backgroundColor: "rgb(219 197 197)" }}>
              <td className="detail-domain-td">Host</td>
              <td className="detail-domain-td">Loại</td>
              <td className="detail-domain-td">Giá trị</td>
            </tr>
            <tr style={{ backgroundColor: "#fff" }}>
              <td className="detail-domain-td">@</td>
              <td className="detail-domain-td">A</td>
              <td className="detail-domain-td-sec">
                <div>123.456.789</div>
                <div
                  style={{
                    color: "blue",
                    fontSize: "13px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Sao chép
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="detail-domain-notice">
          <div>
            <span>Lưu ý: </span> Nhập đúng địa chỉ IP KVWEB sang nhà cung cấp.
            Thời gian kết nối IP sẽ tùy thuộc vào nhà cung cấp (Khoảng 2-5
            tiếng)
          </div>
          <div>
            <ul style={{ padding: "0", marginBottom: "4px" }}>
              Hướng dẫn chi tiết từ nhà cung cấp
            </ul>
            <li>
              matbao.vn{" "}
              <span className="detail-domain-seemore">xem chi tiết</span>
            </li>
            <li>
              cloudflare{" "}
              <span className="detail-domain-seemore">xem chi tiết </span>
            </li>
            <li>
              pavietnam{" "}
              <span className="detail-domain-seemore">xem chi tiết</span>
            </li>
            <li>
              Nhà cung cấp khác{" "}
              <span className="detail-domain-seemore">xem chi tiết</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDomain;
