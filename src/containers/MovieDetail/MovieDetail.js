import React, { Component } from "react";
import { Button } from "antd";
import { HeartFilled, ShareAltOutlined } from "@ant-design/icons";

export default class MovieDetail extends Component {
  render() {
    return (
      <div className="movie-detail row">
        <div className="flex-fill col-lg-2">
          <img
            src="https://static.fptplay.net/static/img/share/video/27_08_2020/right-now-wrong-then-poster27-08-2020_17g07-01.jpg?w=282&mode=scale"
            alt="asd"
          ></img>
        </div>
        <div className="detail-content col-lg-7">
          <h3>Đúng Ở Hiện Tại, Sai Ở Sau Này - Right Now, Wrong Then</h3>
          <div className="detail-action">
            <Button type="primary" icon={<HeartFilled />}>
              Theo dõi
            </Button>
            <Button type="secondary" icon={<ShareAltOutlined />} className="ml-2">
              Chia sẻ
            </Button>
          </div>
          <div className="detail-description">
            Right Now, Wrong Then (Đúng Ở Hiện Tại, Sai Ở Sau Này) là bộ phim
            đầu tiên trong số 5 phim mà nữ diễn viên Kim Min-hee diễn xuất dưới
            sự chỉ đạo của đạo diễn Hong Sang-soo. Tác phẩm này từng giành
            Golden Leopard, giải thưởng cao nhất tại Liên hoan phim Locarno. Bên
            cạnh đó là giải Nam diễn viên chính xuất sắc nhất cho Jung
            Jae-young. Nội dung phim kể về chuyến đi đến Suwon của Chun-soo. Tại
            đây, anh gặp gỡ một nữ họa sĩ xinh đẹp tên Hee-jung. Họ ra ngoài ăn
            tối và uống rượu cùng nhau, tán tỉnh nhau. Thế nhưng sự thật là
            Chun-soo là người đã có vợ và là cha của hai đứa con. Giới phê bình
            đánh giá cao và dành nhiều lời khen cho Right now, wrong then
            .Website điện ảnh Rotten Tomatoes bình luận "bộ phim đưa ra những
            góc nhìn khác nhau về một cuộc gặp gỡ tình cờ và những quan sát kích
            thích tư duy về sự tương tác của con người nói chung". Trong khi đó,
            tờ The Guardian đã xếp bộ phim này vào vị trí thứ 6 trong số những
            tác phẩm kinh điển của điện ảnh Hàn Quốc hiện đại.
          </div>
        </div>
        <div className="detail-options col-lg-3">
          <table>
            <tbody>
              <tr>
                <td>Thời lượng</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td>Đạo diễn</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td>Diễn viên</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td>Quốc gia</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td>Thể loại</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td>Phát hành</td>
                <td>120 phút</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
