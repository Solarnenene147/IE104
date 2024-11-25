import React, { useState } from "react";
import "../../styles/Stats.css";
import data from "../../data/data.json";

function Stats() {
  // Số mục hiển thị mỗi trang
  const ITEMS_PER_PAGE_ORG = 10; // Số tổ chức trên mỗi trang
  const ITEMS_PER_PAGE_USER = 7; // Số user trên mỗi trang

  // State cho trang hiện tại của tổ chức và người dùng
  const [currentOrgPage, setCurrentOrgPage] = useState(1);
  const [currentUserPage, setCurrentUserPage] = useState(1);

  // Hàm để tính tổng số tiền quyên góp cho mỗi tổ chức
  const calculateRaisedAmount = (orgName) => {
    const relevantCharities = data.charities.filter(
      (charity) => charity.organization === orgName
    );
    const totalRaised = relevantCharities.reduce((total, charity) => {
      const amount = parseFloat(charity.raisedAmount.replace(/[^\d.-]/g, ""));
      return total + amount;
    }, 0);
    return totalRaised;
  };

  const countCompletedProjects = (orgName) => {
    const relevantCharities = data.charities.filter(
      (charity) => charity.organization === orgName
    );
    return relevantCharities.filter((charity) => charity.status === 1).length;
  };

  const countInProgressProjects = (orgName) => {
    const relevantCharities = data.charities.filter(
      (charity) => charity.organization === orgName
    );
    return relevantCharities.filter((charity) => charity.status === 0).length;
  };

  // Sắp xếp các tổ chức theo tổng số tiền quyên góp giảm dần
  const sortedOrgs = data.org
    .map((org) => ({
      ...org,
      totalRaised: calculateRaisedAmount(org.organization),
      completedProjects: countCompletedProjects(org.organization),
      inProgressProjects: countInProgressProjects(org.organization),
    }))
    .sort((a, b) => b.totalRaised - a.totalRaised);

  // Sắp xếp các người dùng theo tổng số tiền quyên góp giảm dần
  const sortedUsers = data.users.sort((a, b) => {
    const A = parseFloat(a.totalDonated.replace(/[^\d.-]/g, ""));
    const B = parseFloat(b.totalDonated.replace(/[^\d.-]/g, ""));
    return B - A;
  });

  // Tính tổng số trang cho tổ chức và người dùng
  const totalOrgPages = Math.ceil(sortedOrgs.length / ITEMS_PER_PAGE_ORG);
  const totalUserPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE_USER);

  // Lấy dữ liệu theo trang hiện tại
  const orgsToDisplay = sortedOrgs.slice(
    (currentOrgPage - 1) * ITEMS_PER_PAGE_ORG,
    currentOrgPage * ITEMS_PER_PAGE_ORG
  );
  const usersToDisplay = sortedUsers.slice(
    (currentUserPage - 1) * ITEMS_PER_PAGE_USER,
    currentUserPage * ITEMS_PER_PAGE_USER
  );

  // Hàm để thay đổi trang
  const handleOrgPageChange = (page) => setCurrentOrgPage(page);
  const handleUserPageChange = (page) => setCurrentUserPage(page);

  // Hàm để hiển thị các nút phân trang
  const renderPagination = (currentPage, totalPages, onPageChange) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="stats_page">
      {/* Xếp hạng tổ chức */}
      <div className="organization_ranking">
        <h2>Bảng xếp hạng các tổ chức đã tham gia</h2>
        <div className="entry">
          {orgsToDisplay.map((item, index) => {
            const totalRaisedAmount = item.totalRaised.toLocaleString();
            return (
              <div key={item.organization} className="org_entry">
                <div className="avatar_wrapper">
                  {index === 0 && currentOrgPage === 1 && (
                    <img
                      src={
                        "https://img2.annthegran.com/printart/xlarge/maya_kreations/pgmks1168.webp"
                      }
                      alt="Crown"
                      className="crown_icon_org"
                    />
                  )}
                  <img
                    src={item.image}
                    alt={`${item.organization} logo`}
                    className="img_org_ranking"
                  />
                </div>
                <div className="org_info">
                  <p>
                    Tên tổ chức: <span>{item.organization}</span>
                  </p>
                  <p>Tổng số tiền đã kêu gọi: {totalRaisedAmount}đ</p>
                  <p>Số dự án đã hoàn thành: {item.completedProjects}</p>
                  <p>
                    Số dự án đang trong tiến hành: {item.inProgressProjects}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          {renderPagination(currentOrgPage, totalOrgPages, handleOrgPageChange)}
        </div>
      </div>

      {/* Bảng xếp hạng cá nhân */}
      <div className="user_ranking">
        <h2>Bảng xếp hạng các cá nhân đã quyên góp</h2>
        <div className="entry">
          {usersToDisplay.map((user, index) => (
            <div key={user.name} className="user_entry">
              <div className="avatar_wrapper">
                {index === 0 && currentUserPage === 1 && (
                  <img
                    src={
                      "https://img2.annthegran.com/printart/xlarge/maya_kreations/pgmks1168.webp"
                    }
                    alt="Crown"
                    className="crown_icon"
                  />
                )}
                <img
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                  className="img_user_ranking"
                />
              </div>
              <div className="user_info">
                <p>
                  Tên người dùng: <span>{user.name}</span>
                </p>
                <p>Số tiền đã quyên góp: {user.totalDonated}</p>
                <p>Số dự án gây quỹ đã tham gia: {user.participatedProjects}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {renderPagination(
            currentUserPage,
            totalUserPages,
            handleUserPageChange
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats
