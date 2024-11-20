import React from 'react';
import '../../styles/FAQ.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../styles/Utilities.css'
import { Link } from 'react-router-dom';


function FAQ() {
  return (
    <div className='page bg-white'>
      <div className='page-title-container'>
        <div className='page-title-image'>
          <h1 className='about-title'>Câu hỏi thường gặp</h1>
        </div>
      </div>

      <div className='about-container bg-gray'>
        <h1 className='mt-5 mb-0'>
          HỢP TÁC VỚI GIVEHUB?
        </h1>
        <p className='about-text gray-text text-align-center mt-0'>
          GiveHub cung cấp nền tảng cho các tổ chức có chức năng vận động và tiếp nhận tài trợ thực hiện việc khởi tạo các dự án gây quỹ trên nền tảng GiveHub.vn và kết nối các Doanh nghiệp thực hiện các chương trình Trách nhiệm xã hội (CSR).<br />
          Nếu bạn đại diện một tổ chức được cấp phép hoạt động, như: Quỹ từ thiện; Quỹ xã hội; Tổ chức xã hội nghề nghiệp;…hay các Doanh nghiệp có mong muốn hợp tác triển khai CSR, ESG, vui lòng liên hệ với GiveHub để được hỗ trợ.

        </p>
        <Link to={'/support'} className='contact-button mb-4'>LIÊN HỆ GIVEHUB</Link>

      </div>
      <div className='about-container bg-white'>
        <h1 className='mt-5 mb-1'>
          FAQs
        </h1>
      </div>
      
      <div className='grid-container-faq'>
        <div>
          <div>
            <h2>
              Dành cho Người ủng hộ
            </h2>
          </div>
          <Accordion >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Có nên ủng hộ trên GiveHub.vn không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Trên GiveNow, bạn có thể lựa chọn các Dự án cộng đồng phù hợp với mong muốn của mình để ủng hộ. Các dự án trên GiveNow được thực hiện bởi các Tổ chức từ thiện, xã hội và môi trường có chuyên môn, uy tín và có chức năng tiếp nhận tài trợ theo quy định của pháp luật. Số tiền ủng hộ của bạn được chuyển thẳng tới các Tổ chức mà không thông qua bên thứ ba nào để đảm bảo sự minh bạch và hiệu quả.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Đóng góp trên GiveHub.vn có an toàn không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Việc ủng hộ cho các dự án thiện nguyện trên GiveNow.vn tuyệt đối an toàn, tiền ủng hộ được thanh toán qua các cổng thanh toán uy tín như Viettel Pay, VnPay,..và tới trực tiếp tài khoản của các Tổ chức gây quỹ có tư cách pháp nhân, GiveNow chỉ ghi nhận và minh bạch hóa các thông tin.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Những phương thức thanh toán nào có thể được sử dụng để quyên góp?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GiveNow hợp tác với các đối tác trung gian thanh toán và tích hợp đa dạng các phương thức thanh toán khác nhau để thuận tiện nhất cho người ủng hộ, bạn có thể lựa chọn bất cứ phương thức thanh toán nào phù hợp nhất với mình. Các phương thức thanh toán bao gồm:<br /><br />

                1. Thanh toán qua ứng dụng: Viettel Money, VnPay<br />
                2. Thanh toán qua quét mã QR ViettelPay, VnPay<br />
                3. Thanh toán qua thẻ ATM và tài khoản ngân hàng<br />
                4. Thanh toán qua thẻ thanh toán quốc tế: Visa, Mastercard, AmericanExpress, JCB,…<br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Những khoản phí nào được áp dụng cho các khoản đóng góp?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GiveNow không thu bất cứ khoản phí nào từ người ủng hộ. Người ủng hộ chỉ mất phí tiện ích/ phí dịch vụ (phí chuyển tiền thông thường) cho các nền tảng trung gian thanh toán được quy định bởi các bên:<br /><br />

                <b>ViettelPay:</b><br /><br />

                <li className='ml-3'>Sử dụng nguồn tiền trong tài khoản ViettelPay để thanh toán: 0.8% x Giá trị giao dịch;</li><br />
                <li className='ml-3'>Sử dụng nguồn tiền trong Thẻ nội địa để thanh toán: 880đ + 0.8% x Giá trị giao dịch.</li><br /><br />

                <b>VnPay:</b><br /><br />

                <li className='ml-3'>Thẻ nội địa/tài khoản ngân hàng/ví điện tử: Miễn phí dịch vụ 01 (một) năm kể từ 17/1/2022 (Kết thúc thời gian trên, GiveNow sẽ cập nhật mức phí do VnPay áp dụng);</li><br />
                <li className='ml-3'>Thẻ quốc tế: 1.7% giá trị Giao dịch CTT + 2.200VND/Giao dịch CTT.</li><br /><br />

                GiveNow nỗ lực hợp tác để mức phí này là nhỏ nhất so với mức phí chuyển tiền thông thường. Trong một số giai đoạn, phí chuyển tiền được các đối tác cổng thanh toán tài trợ miễn phí.<br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Với tư cách là người ủng hộ, tôi có thể thay đổi hoặc ẩn tên của mình không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn có thể lựa chọn ẩn danh đối với các khoản đóng góp tại bước lựa chọn số tiền, và điền thông tin người ủng hộ.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Làm sao để tôi kiểm tra được khoản ủng hộ của mình?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ngay sau khi chuyển tiền ủng hộ thành công cho một dự án thông qua các nền tảng thanh toán tích hợp trên GiveNow.vn, bạn sẽ thấy khoản ủng hộ của mình trong mục Danh sách ủng hộ của Dự án mà bạn chọn, bao gồm: Tên người ủng hộ (do bạn nhập thông tin) + Số tiền ủng hộ + Thời gian ủng hộ. Toàn bộ số tiền ủng hộ của bạn được chuyển thẳng tới tài khoản của Tổ chức gây quỹ mà không qua bên thứ ba nào khác.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Ngoài ủng hộ bằng tiền, tôi có thể ủng hộ các dự án bằng cách khác không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ngoài ghi nhận đóng góp bằng tiền, GiveNow cho phép người dùng đóng góp bằng công sức thông qua chức năng Sứ giả truyền thông gây quỹ và ghi nhận các thông tin cần thiết một cách minh bạch. Hoặc bạn cũng có thể sử dụng nút chia sẻ để lan tỏa dự án thiện nguyện tới bạn bè của mình trên các mạng xã hội.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Tôi có cần đăng ký vào GiveHub.vn để ủng hộ không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn có thể ủng hộ cho các Dự án gây quỹ trên GiveNow.vn mà không cần phải đăng ký làm thành viên của GiveNow. Tuy nhiên việc đăng ký sẽ giúp bạn tương tác và cập nhật tốt hơn các thông tin về dự án và tổ chức mà bạn quan tâm, ủng hộ.
              </Typography>
            </AccordionDetails>
          </Accordion>


        </div>
        <div>
          <div>
            <h2>Dành cho Tổ chức gây quỹ</h2>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Những loại dự án nào có thể được khởi chạy trên GiveHub.vn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GiveNow là một nền tảng hỗ trợ các hoạt động mang lại lợi ích cho cộng đồng và xã hội, các dự án khởi chạy trên GiveNow phải được thực hiện bởi các tổ chức có chức năng gây quỹ và tiếp nhận tài trợ nhằm mục tiêu phục vụ cho các hoạt động từ thiện, xã hội và môi trường, theo tôn chỉ, mục đích của tổ chức mình và theo quy định của pháp luật.<br /><br />

                Để được khởi tạo dự án gây quỹ trên GiveNow.vn, tổ chức cần ký hợp đồng sử dụng nền tảng công nghệ thông tin với GiveNow và hợp đồng sử dụng cổng thanh toán với các đối tác trung gian thanh toán của GiveNow
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Mất bao lâu để một dự án gây quỹ được chấp thuận?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GiveNow là nền tảng cho phép các Tổ chức gây quỹ chủ động khởi tạo các dự án trên GiveNow.vn, các tổ chức có thể tự tạo dự án với các mục tiêu về thời gian gây quỹ, số tiền gây quỹ, nội dung và các thông tin liên quan.<br /><br />

                Tuy nhiên, để việc gây quỹ hiệu quả, các tổ chức không nên tạo quá 5 dự án gây quỹ trong cùng 1 thời điểm.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Dự án gây quỹ của tôi có thời hạn không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Các dự án gây quỹ trên Givenow.vn được đề nghị gây quỹ không quá 60 ngày/dự án, để đảm bảo việc tập trung và truyền thông cho dự án. Tùy từng trường hợp, thời gian gây quỹ có thể được kéo dài.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Làm cách nào để cập nhật và cảm ơn các nhà tài trợ của tôi?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nền tảng GiveNow tự động cập nhật các tình trạng cho nhà tài trợ và các sứ giả gây quỹ hay những người quan tâm tới dự án của tổ chức, khi dự án hoàn thành gây quỹ, kết thúc thời gian gây quỹ, nhập các báo cáo triển khai, giai ngân.<br /><br />

                GiveNow hướng tới phát triển thêm các tính năng như xuất hóa đơn/phiếu thu điện tử cho Người ủng hộ, Gửi Cerificate cho người ủng hộ,…
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Làm cách nào để nhận các khoản đóng góp trên GiveHub.vn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Các khoản ủng hộ thông qua GiveNow sẽ được chuyển thẳng tới Tài khoản ngân hàng của các Tổ chức gây quỹ trong thời gian T+1 kể từ thời điểm người ủng hộ chuyển tiền.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Tôi có thể lấy danh sách tất cả thông tin của các nhà tài trợ của mình không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GiveNow cung cấp tài khoản quản trị cho các Tổ chức gây quỹ có thể quản lý:<br /><br />

                1. Dự án gây quỹ: Tạo dự án, sửa dự án<br />
                2. Sứ giả gây quỹ: Phê duyệt, từ chối sứ giả<br />
                3. Danh sách người ủng hộ: Lọc danh sách, tải về danh sách<br />
                4. Cập nhật thông tin tổ chức<br />
                5. Các thống kê và tính năng khác được phát triển nhằm phục vụ cho mục tiêu gây quỹ của tổ chức.<br />
                6. Khác<br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Điều gì sẽ xảy ra nếu ai đó đưa cho tôi tiền mặt? (Đóng góp ngoại tuyến)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn có thể ghi lại thông tin người ủng hộ và thay mặt họ thực hiện việc ủng hộ thông qua GiveNow.vn để cập nhật danh sách người ủng hộ lên trang dự án.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Bạn bè quốc tế của tôi có thể quyên góp cho Dự án của tôi không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn bè của bạn có thể thanh toán thông qua hình thức thanh toán qua thẻ quốc tế. Tuy nhiên, việc tiếp nhận ủng hộ từ các tổ chức, cá nhân nước ngoài chịu sự quản lý của các quy định pháp luật, bạn vui lòng tìm hiểu kỹ trước khi tiếp nhận các khoản ủng hộ này.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Làm cách nào để kết thúc Dự án của tôi?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dự án sẽ tự động kết thúc khi hết thời gian gây quỹ hoặc số tiền gây quỹ đạt được mục tiêu. Trong trường hợp khác, bạn vui lòng liên hệ GiveNow để được hỗ trợ.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Dự án của tôi có ngừng nhận quyên góp khi tôi đạt được mục tiêu không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Dự án sẽ tự động kết thúc khi kết thúc thời gian hay đạt được số tiền mục tiêu gây quỹ. Người ủng hộ không thể tiếp tục ủng hộ cho dự án này.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Tôi có thể tiếp cận với các nhà tài trợ đã đóng góp cho Dự án của tôi không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Để tuân thủ chính sách riêng tư, bảo mật, các tổ chức gây quỹ không thể tiếp cận thông tin nhà tài trợ. GiveNow chỉ cung cấp danh sách được nhà tài trợ đồng ý bao gồm: Tên nhà tài trợ, số tiền tài trợ, thời gian tài trợ. Đồng thời, các tổ chức gây quỹ có thể tiếp cận các phân tích về nhà tài trợ để phục vụ cho mục đích phi lợi nhuận của mình, bao gồm: Giới tính, độ tuổi, địa lý.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className='bold'>Tôi có thể chia sẻ Dự án của mình lên Facebook không?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bạn hoàn toàn có thể và GiveNow khuyến khích bạn chia sẻ và lan tỏa Dự án của mình tới bạn bè thông qua Facebook để đạt hiệu quả gây quỹ cao hơn. Biểu tượng chia sẻ được gắn ở mỗi dự án cụ thể.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>


      </div>
    </div>
  )
}

export default FAQ;
