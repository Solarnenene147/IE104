import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/content/Home/1.jpg";
import image2 from "../images/content/Home/2.jpg";
import image3 from "../images/content/Home/3.jpg";
import "../styles/Home.css";
import Counter from "./Home-features/Counter";
import s1 from "../images/supporter/s1.png";
import s2 from "../images/supporter/s2.png";
import s3 from "../images/supporter/s3.png";
import s4 from "../images/supporter/s4.png";
import s5 from "../images/supporter/s5.png";
import intro from "../images/content/Home/introduce.jpg";
import data from "../data/data.json";
import ProjectSlider from "./Home-features/ProjectSlider";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const charities = data.charities;
    
    const org = data.org;

    const getOrgImage = (organizationName) => {
        const organization = org.find((orgItem) => orgItem.organization === organizationName);
        return organization ? organization.image : null;
    };

    const getOrgID = (organizationName) => {
        const organization = org.find((orgItem) => orgItem.organization === organizationName);
        return organization ? organization.id : null;
    }

    return (
        <div>
            <Slider {...settings}>
                <div className={`slide-container ${currentSlide === 0 ? "active" : ""}`}>
                    <img src={image1} alt="Slide 1" className="slide-image" />
                    <div className={`overlay ${currentSlide === 0 ? "show" : ""}`}>
                        <h2 className="slide-title">Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className="slide-content">
                            Kết nối, gây quỹ và ủng hộ trực tuyến<br />
                            tiện lợi, tin cậy và minh bạch
                        </p>
                    </div>
                </div>
                <div className={`slide-container ${currentSlide === 1 ? "active" : ""}`}>
                    <img src={image2} alt="Slide 2" className="slide-image" />
                    <div className={`overlay ${currentSlide === 1 ? "show" : ""}`}>
                        <h2 className="slide-title">Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className="slide-content">
                            Một mái nhà, một sự an toàn, một cơ hội <br />
                            để thay đổi cuộc đời
                        </p>
                    </div>
                </div>
                <div className={`slide-container ${currentSlide === 2 ? "active" : ""}`}>
                    <img src={image3} alt="Slide 3" className="slide-image" />
                    <div className={`overlay ${currentSlide === 2 ? "show" : ""}`}>
                        <h2 className="slide-title">Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className="slide-content">
                            Tình nguyện là món quà vô giá mà bạn có thể trao đi
                        </p>
                    </div>
                </div>
            </Slider>

            <ProjectSlider charities={charities} org={org} getOrgImage={getOrgImage} getOrgID={getOrgID} />

            <div className="talkable-num">
                <h1 className="title">Những con số biết nói</h1>
                <div className="container">
                    <div className="content-container">
                        <p className="content"> Dự án</p>
                        <Counter targetValue={93} duration={2} />
                    </div>
                    <div className="content-container">
                        <p className="content"> Dự án</p>
                        <Counter targetValue={41} duration={1.5} />
                    </div>
                    <div className="content-container">
                        <p className="content"> Dự án</p>
                        <Counter targetValue={33} duration={1.3} />
                    </div>
                    <div className="content-container">
                        <p className="content"> Dự án</p>
                        <Counter targetValue={25765} duration={3} />
                    </div>
                    <div className="content-container">
                        <p className="content"> Dự án</p>
                        <div>
                            <Counter targetValue={2.39} duration={0.8}></Counter>
                            <span style={{ color: "#fda4a4" }}>&nbsp;tỷ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="introduce">
                <img src={intro} alt="introduce" />
                <div className="content-container">
                    <h1>GiveHub là gì?</h1>
                    <p>
                        GiveHub là nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch. Được ghi nhận Top 3 bài toán Chuyển đổi số xuất sắc nhất cho các dự án vì cộng đồng, Cuộc thi Tìm kiếm Giải pháp Chuyển đổi số Quốc gia 2022 và là Chiến dịch Marketing vì sự phát triển bền vững tại Marketing for Development Awards 2022.<br /><br />
                        GiveHub được tin dùng bởi các tổ chức uy tín như: Hội chữ thập đỏ Việt Nam, Quỹ Bảo Trợ Trẻ Em Việt Nam, Quỹ Hy vọng, Quỹ Vì Tầm Vóc Việt, Quỹ Trò nghèo vùng cao, Quỹ từ thiện Nâng bước tuổi thơ và nhiều tổ chức khác.<br /><br />
                        GiveHub được hỗ trợ công nghệ bởi FPT Smart Cloud, Comartek, Viettel Money và VNPay, đảm bảo ứng dụng hoạt động ổn định, phương thức thanh toán đa dạng và an toàn.
                    </p>
                </div>
            </div>
            <div className="supporter">
                <h1>Đơn vị đồng hành</h1>
                <div className="img-container">
                    <img src={s1} alt="supporter 1" />
                    <img src={s2} alt="supporter 2" />
                    <img src={s3} alt="supporter 3" />
                    <img src={s4} alt="supporter 4" />
                    <img src={s5} alt="supporter 5" />
                </div>
            </div>
        </div>
    );
};

export default Home;
