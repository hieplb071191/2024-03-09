import descriptionProjectStyles from '../../../styles/description-project.module.scss'

export default function DescriptionProject() {
    return (
        <div className={descriptionProjectStyles['description-project']} id='description-project'>
            <div className={descriptionProjectStyles["content"]}>
                <div className={descriptionProjectStyles["image"]}>
                    <img width={600} height={450} src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/gioi-thieu-novaworld.jpg" alt="" />
                </div>
                <div className={descriptionProjectStyles["description"]}>
                    <p style={{fontSize: '20px', fontWeight: 'bold', color: '#003366'}}>
                        Giới thiệu Novaworld Phan Thiết 
                    </p>
                    <p>
                        Tiếp nối sự thành công của dự án Novahills Resort & villas và dự án NovaBeach Cam Ranh.
                    </p>
                    <p>
                        Trong chiến lược của tập đoàn Novaland, Tập đoàn đã cho ra mắt dòng sản phẩm Novaworld.
                    </p>
                    <p>
                        Novaworld phan thiết là dự án đầu tiên của dòng sản phẩm Novaworld.
                    </p>
                    <p>
                        NovaWorld Phan Thiết Không đơn thuần là một dự án nghỉ dưỡng, NovaWorld Phan Thiết được thiết kế là một khu phức hợp bật nhất cho cả không gian nghỉ dưỡng và giải trí.
                    </p>
                    <p>
                        Các tiện ích tại NovaWorld Phan Thiết Bao Gồm: Khu Vui Chơi giải trí, Sân Vận Động Chuẩn Quốc Tế, Sân Golf, Vườn Thú, Khu Trò chơi dưới nước, Vòng Quay Khổng lồ trên cao.
                    </p>
                    <p>
                        NovaWorld Phan Thiết cũng đa dạng các loại hình đầu tư như: Shophouse, Villas, Biệt Thự View biển, Căn hộ, Condotel, Nhà Phố Đơn lập và Song lập
                    </p>
                </div>
                
            </div>
            <div className={descriptionProjectStyles["content-reverse"]}>
                <div className={descriptionProjectStyles["image"]}>
                    <img width={600} height={450} src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/vi-tri.jpg" alt="" />
                </div>
                <div className={descriptionProjectStyles["description"]}>
                    <p style={{fontSize: '20px', fontWeight: 'bold', color: '#003366'}}>
                        Vị trí Novaworld Phan Thiết
                    </p>
                    <p>
                        Novaworld phan thiết là dự án đầu tiên của dòng sản phẩm nghỉ dưỡng đa năng thuộc Novaworld Group.
                    </p>
                    <p style={{fontWeight: 'bold'}}>
                        Điểm nhấn kiến trúc:
                    </p>
                    <p>
                    Ngoài những tổ hợp vui chơi giải chí chính, những điểm nhấn kiến trúc hoặc về mặt thiết kế sẽ tạo dấu ấn cho dự án, đặc biệt là hoạt động check in, chụp hình cho khách du lịch tạo nên những biểu tượng của dự án. Ví dụ như: Cầu thang nghệ thuật; Nhà hàng hang động; Thác nước nhân tạo; vườn mê cung; đấu trường la mã; nhà hàng cướp biển…
                    </p>
                    
                </div>
                
            </div>
        </div>
    )
}