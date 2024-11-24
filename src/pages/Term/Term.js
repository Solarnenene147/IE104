import React from 'react';
import '../../styles/Term.css';  // Nếu bạn muốn thêm các kiểu dáng CSS cho trang này

function Terms() {
  return (
    <div className="terms-container">
      <div className="page-title-container">
        <div className="page-title-image">
          <h1 className="about-title">Điều khoản & Điều kiện</h1>
        </div>
      </div>
      <div className='terms-content'>
        <p style={{textAlign:'right'}}><strong>Cập nhật lần cuối:</strong> 11/8/2024.</p>
        
        <h2>1. Mục Đích Của Trang Web</h2>
        <p>Trang web của chúng tôi được thiết kế nhằm mục đích hỗ trợ các tổ chức từ thiện, kêu gọi sự quyên góp và cung cấp thông tin về các dự án từ thiện. Chúng tôi cam kết tạo ra một không gian minh bạch, đáng tin cậy để người dùng có thể tìm kiếm và đóng góp cho các mục tiêu nhân đạo.</p>
        
        <h2>2. Đăng Ký Tài Khoản</h2>
        <ul>
          <li>Người dùng có thể đăng ký tài khoản trên trang web của chúng tôi để tham gia các hoạt động từ thiện và nhận thông tin cập nhật.</li>
          <li>Người dùng phải cung cấp thông tin chính xác và chịu trách nhiệm bảo mật tài khoản của mình.</li>
          <li>Chúng tôi có quyền tạm ngưng hoặc hủy tài khoản nếu phát hiện hành vi vi phạm.</li>
        </ul>

        <h2>3. Đóng Góp Từ Thiện</h2>
        <ul>
          <li>Các khoản đóng góp trên trang web là tự nguyện. Chúng tôi cam kết sử dụng số tiền quyên góp đúng mục đích và minh bạch trong quản lý tài chính.</li>
          <li>Người dùng cần đọc kỹ thông tin về các dự án và tổ chức từ thiện trước khi thực hiện đóng góp.</li>
          <li>Chúng tôi không chịu trách nhiệm nếu khoản đóng góp không thể hoàn trả do điều kiện pháp lý hoặc quản lý của các tổ chức từ thiện.</li>
        </ul>

        <h2>4. Quyền Sở Hữu Trí Tuệ</h2>
        <ul>
          <li>Tất cả nội dung trên trang web, bao gồm văn bản, hình ảnh, biểu trưng, thiết kế và phần mềm, đều thuộc sở hữu của chúng tôi hoặc các đối tác liên kết và được bảo vệ bởi luật sở hữu trí tuệ.</li>
          <li>Người dùng không được sao chép, sửa đổi hoặc sử dụng nội dung trên trang web cho mục đích thương mại mà không có sự cho phép của chúng tôi.</li>
        </ul>

        <h2>5. Quyền Và Trách Nhiệm Của Người Dùng</h2>
        <ul>
          <li>Người dùng có trách nhiệm sử dụng trang web một cách hợp pháp, không vi phạm các quy định pháp luật hoặc làm tổn hại đến lợi ích của các tổ chức từ thiện.</li>
          <li>Người dùng không được đăng tải nội dung xấu, sai sự thật hoặc gây hiểu lầm, và không tham gia vào các hoạt động gian lận.</li>
        </ul>

        <h2>6. Trách Nhiệm Của Chúng Tôi</h2>
        <ul>
          <li>Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng theo quy định về bảo mật thông tin cá nhân.</li>
          <li>Mặc dù chúng tôi nỗ lực đảm bảo tính chính xác của thông tin, chúng tôi không chịu trách nhiệm về bất kỳ sai sót hoặc sự thiếu sót nào trên trang web.</li>
        </ul>

        <h2>7. Miễn Trừ Trách Nhiệm</h2>
        <ul>
          <li>Chúng tôi không đảm bảo rằng trang web sẽ luôn hoạt động liên tục và không bị gián đoạn do các lý do ngoài tầm kiểm soát.</li>
          <li>Chúng tôi không chịu trách nhiệm về các thiệt hại gián tiếp hoặc trực tiếp phát sinh từ việc sử dụng trang web.</li>
        </ul>

        <h2>8. Liên Kết Đến Trang Web Bên Thứ Ba</h2>
        <p>Trang web có thể chứa các liên kết đến trang web bên thứ ba. Chúng tôi không kiểm soát các trang web này và không chịu trách nhiệm về nội dung hoặc hoạt động của chúng.</p>

        <h2>9. Chỉnh Sửa Điều Khoản</h2>
        <p>Chúng tôi có quyền thay đổi hoặc cập nhật các điều khoản này bất kỳ lúc nào mà không cần thông báo trước. Phiên bản cập nhật sẽ có hiệu lực ngay khi được đăng tải.</p>

        <h2>10. Liên Hệ</h2>
        <p>Nếu bạn có bất kỳ câu hỏi nào về điều khoản và điều kiện này, vui lòng liên hệ với chúng tôi qua email: <a href='mailto:winnerhuynh1234@gmail.com'>hotline@givehub.vn</a>.</p>
      </div>
    </div>
  );
}

export default Terms;
