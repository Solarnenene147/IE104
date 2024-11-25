import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import '../../styles/Organization.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import Achievements from './Achievements';
import FeaturedProjects from './FeaturedProjects';
import '../../styles/Project.css';

const OrganizationDetail = () => {
  const { id } = useParams();

  const organization = data.org.find((org) => org.id === parseInt(id));

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

  const [currentTab, setCurrentTab] = useState('featured-projects');

  // Hàm kiểm tra tab hiện tại
  const isActiveTab = (tabName) => currentTab === tabName;


  if (!organization) {
    return <p>Tổ chức không tồn tại.</p>;
  }

  const totalRaisedAmount = calculateRaisedAmount(organization.organization);
  const completedProjects = countCompletedProjects(organization.organization);
  const inProgressProjects = countInProgressProjects(organization.organization);

  return (
    <div>
      <div className='image-background-organization'></div>
      <div className='page-container'>
        <div className='container-organization'>
          <img className='image-organization mt-5' src={organization.image} />
          <div className='header-organization'>
            <h1 className='name-organization'>{organization.organization}</h1>
          </div>
          <div className='information-organization'>
            <div>
              <FontAwesomeIcon icon={faMobileScreen} />
              <p><strong>Số điện thoại:</strong> {organization.sdt}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p><strong>Email:</strong> {organization.email}</p>
            </div>
          </div>
          <div class="horizontal-line"></div>
          <div className='description-organization mx-5'>
            <p>{organization.description}</p>
          </div>

          <div className='flex-container-organization'>
            <div className='flex-box-organization bg-white'>
              <p className='black-stat-organization'>Tổng số tiền kêu gọi</p>
              <p className='red-stat-organization'>{totalRaisedAmount.toLocaleString()}</p>


            </div>
            <div className="vertical-bar"></div>

            <div className='flex-box-organization bg-white'>
              <p className='black-stat-organization'>Tổng số dự án</p>
              <p className='red-stat-organization'>{completedProjects + inProgressProjects}</p>

            </div>
            <div className="vertical-bar"></div>
            <div className='flex-box-organization bg-white'>
              <p className='black-stat-organization'>Dự án hoàn thành</p>
              <p className='red-stat-organization'>{completedProjects}</p>

            </div>
            <div className="vertical-bar"></div>
            <div className='flex-box-organization bg-white'>
              <p className='black-stat-organization'> Dự án đang kêu gọi</p>
              <p className='red-stat-organization'>{inProgressProjects}</p>
            </div>
          </div>

        </div>
        <div class="horizontal-line"></div>
        <div className='title'>


        </div>
        <div className="project-tab-buttons">
          <button
            onClick={() => setCurrentTab('featured-projects')}
            className={isActiveTab('featured-projects') ? 'active' : ''}
          >
            Dự Án Nổi Bật
          </button>
          <button
            onClick={() => setCurrentTab('achievements')}
            className={isActiveTab('achievements') ? 'active' : ''}
          >
            Thành tựu
          </button>
        </div>
        {isActiveTab('featured-projects') ? (
          <FeaturedProjects organizationName={organization.organization} onSwitchToAchievement={() => setCurrentTab('achievements')} />
        ) : (
          <Achievements organizationName={organization.organization} onSwitchToFeatured={() => setCurrentTab('featured-projects')} />
        )}

      </div>
    </div>
  );
};

export default OrganizationDetail;
