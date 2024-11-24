import React, { useState } from 'react';
import Achievements from './Achievements';
import FeaturedProjects from './FeaturedProjects';
import '../../styles/Project.css';

function Project() {
  const [currentTab, setCurrentTab] = useState('featured-projects');

  // Hàm kiểm tra tab hiện tại
  const isActiveTab = (tabName) => currentTab === tabName;

  return (
    <div className='project-container'>
      <div className="page-title-container">
        <div className="page-title-image">
          <h1 className="about-title">Dự án</h1>
        </div>
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
          <FeaturedProjects onSwitchToAchievement={() => setCurrentTab('achievements')} />
        ) : (
          <Achievements onSwitchToFeatured={() => setCurrentTab('featured-projects')} />
        )}
          
    </div>
  );
}

export default Project;
