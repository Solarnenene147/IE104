import React from 'react';
import '../../styles/About.css';
import p1 from '../../images/partner/p1.png'
import p2 from '../../images/partner/p2.png'
import p3 from '../../images/partner/p3.png'
import p4 from '../../images/partner/p4.png'
import p5 from '../../images/partner/p5.png'
import p6 from '../../images/partner/p6.png'
import p7 from '../../images/partner/p7.png'
import p8 from '../../images/partner/p8.png'
import p9 from '../../images/partner/p9.png'
import p10 from '../../images/partner/p10.png'
import p11 from '../../images/partner/p11.png'
import p12 from '../../images/partner/p12.png'
import p13 from '../../images/partner/p13.png'
import p14 from '../../images/partner/p14.png'
import p15 from '../../images/partner/p15.png'
import p16 from '../../images/partner/p16.png'
import p17 from '../../images/partner/p17.png'
import p18 from '../../images/partner/p18.png'
import p19 from '../../images/partner/p19.png'
import p20 from '../../images/partner/p20.png'
import p21 from '../../images/partner/p21.png'
import p22 from '../../images/partner/p22.png'
import p23 from '../../images/partner/p23.png'
import n1 from '../../images/news/n1.jpg'
import n2 from '../../images/news/n2.jpg'
import n3 from '../../images/news/n3.jpg'
import n4 from '../../images/news/n4.jpg'
import n5 from '../../images/news/n5.jpg'
import n6 from '../../images/news/n6.jpg'
import n7 from '../../images/news/n7.jpg'
import viettelmoney from '../../images/viettelmoney.jpg'
import qr from '../../images/qr.jpg'
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className='page'>
      <div className='page-title-container'>
        <div className='page-title-image'>
          <h1 className='about-title'>Về chúng tôi</h1>
        </div>
      </div>

      <div className='page-container bg-gray'>
        <div className='about-text page-container gray-text'>
          <p>
            GiveHub.vn là nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch, được ghi nhận Top 3 bài toán Chuyển đổi số xuất sắc nhất cho các dự án vì cộng đồng, Cuộc thi Tìm kiếm Giải pháp Chuyển đổi số Quốc gia 2022 (Viet Solutions 2022) và là Chiến dịch Marketing vì sự phát triển bền vững tại Marketing for Development Awards 2022, giải thưởng do Red Communication tổ chức cùng sự đồng hành của Liên minh Châu Âu, Oxfam, ProNGO,… <br /> <br />

            GiveHub được tin dùng bởi các tổ chức cộng đồng uy tín, như: Trung ương Hội chữ thập đỏ Việt Nam, Quỹ Bảo Trợ Trẻ Em Việt Nam, Quỹ Hy vọng, Quỹ từ thiện Nâng bước tuổi thơ, Quỹ từ thiện Bông Sen, Quỹ Trò nghèo Vùng cao, Quỹ Vì Tầm Vóc Việt, Quỹ từ tâm Đắk Lắk, và nhiều tổ chức khác.<br /> <br />

            GiveHub được hỗ trợ công nghệ bởi Comartek, FPT Smart Cloud, Viettel Money và VNPay, đảm bảo ứng dụng hoạt động ổn định và phương thức thanh toán đa dạng, thuận tiện và an toàn.<br /> <br />
          </p>
        </div>
      </div>

      <div className='bg-white'>
        <div className='page-container'>
          <h1 className='mt-5 mb-1'>
            Đối tác GiveHub
          </h1>
          <h2 className='mt-1 mb-1'>
            Các tổ chức gây quỹ tiêu biểu
          </h2>
          <div className='grid-container'>
            <img src={p1} alt='p1' className='grid-image' />
            <img src={p2} alt='p2' className='grid-image' />
            <img src={p3} alt='p3' className='grid-image' />
            <img src={p4} alt='p4' className='grid-image' />
            <img src={p5} alt='p5' className='grid-image' />
            <img src={p6} alt='p6' className='grid-image' />
            <img src={p7} alt='p7' className='grid-image' />
            <img src={p8} alt='p8' className='grid-image' />
            <img src={p9} alt='p9' className='grid-image' />
            <img src={p10} alt='p10' className='grid-image' />
            <img src={p11} alt='p11' className='grid-image' />
            <img src={p12} alt='p12' className='grid-image' />
            <img src={p13} alt='p13' className='grid-image' />
            <img src={p14} alt='p14' className='grid-image' />
            <img src={p15} alt='p15' className='grid-image' />
            <img src={p16} alt='p16' className='grid-image' />
            <img src={p17} alt='p17' className='grid-image' />
            <img src={p18} alt='p18' className='grid-image' />
            <img src={p19} alt='p19' className='grid-image' />
            <img src={p20} alt='p20' className='grid-image' />
            <img src={p21} alt='p21' className='grid-image' />
            <img src={p22} alt='p22' className='grid-image' />
            <img src={p23} alt='p23' className='grid-image' />

          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='page-container '>
          <h1>
            Đồng hành trên Ứng dụng Viettel Money
          </h1>
          <img src={viettelmoney} alt='viettelmoney' className='banner-image' />
        </div>
      </div>
      <div className='bg-gray'>
        <div className='page-container mb-5'>
          <h1 className='mt-5'>
            Báo chí nói về GiveHub
          </h1>
          {/* Thêm anchor nếu cần */}
          <div>
            <img src={n1} alt='n1' className='flex-image' />
            <img src={n2} alt='n2' className='flex-image' />
            <img src={n3} alt='n3' className='flex-image' />
          </div>
          <div>
            <img src={n4} alt='n4' className='flex-image' />
            <img src={n5} alt='n5' className='flex-image' />
            <img src={n6} alt='n6' className='flex-image' />
            <img src={n7} alt='n7' className='flex-image' />
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='page-container'>
          <h1>
            Ủng hộ cho GiveHub
          </h1>
          <div className='about-text about-text-donate pt-0'>
            <img src={qr} alt='qr' className='donate-image' />

            <p className='gray-text'>
              Số tiền bạn ủng hộ được dùng để bù đắp cho các chi phí vận hành của Givehow, nhằm xây dựng một nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch cho người dùng và hoàn toàn MIỄN PHÍ cho các tổ chức phi lợi nhuận, bao gồm:<br /><br />

              <strong>Công nghệ</strong>: Máy chủ, băng thông, bảo trì, phát triển hệ thống,…để đảm bảo tính ổn định, tiện lợi và bảo mật cho người dùng và các tổ chức gây quỹ.<br /><br />

              <strong>Nhân lực</strong>: Nguồn ủng hộ của các bạn giúp GiveHub duy trì bộ máy nhân sự vận hành cần thiết, chúng tôi nỗ lực tối ưu bộ máy nhân sự thông qua việc sử dụng các nguồn lực tình nguyện viên và hỗ trợ khác để đảm bảo số tiền đóng góp của bạn có hiệu suất cao nhất.<br /><br />

              Trân trọng,<br />
              Đội ngũ GiveHub<br />
            </p>
          </div>
        </div>
      </div>

      <div className='bg-gray mb-5'>
        <div className='page-container '>
          <h1 className='mb-1'>
            Hợp tác với GiveHub?
          </h1>
          <div className='about-text about-text-collab pt-0'>
            <p className='gray-text'>
              GiveHub cung cấp nền tảng cho các tổ chức có chức năng vận động và tiếp nhận tài trợ thực hiện việc khởi tạo các dự án gây quỹ trên nền tảng GiveHub.vn và kết nối các Doanh nghiệp thực hiện các chương trình Trách nhiệm xã hội (CSR). <br />
              Nếu bạn đại diện một tổ chức được cấp phép hoạt động, như: Quỹ từ thiện; Quỹ xã hội; Tổ chức xã hội nghề nghiệp;…hay các Doanh nghiệp có mong muốn hợp tác triển khai CSR, ESG, vui lòng liên hệ với GiveHub để được hỗ trợ.<br />
            </p>
          </div>
          <div>
            <Link to={'/support'} className='contact-button'>LIÊN HỆ GIVEHUB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;