import benefitStyle from '../../../../styles/benefits.module.scss'

const Benefits = () => {
    return (
        <div className={benefitStyle['benefits']}>
            
            <div className={benefitStyle['benefit-content']}>
                <div className={benefitStyle['image-benefit']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/ke-hoach-dau-tu.jpg" alt="benefit_img"  width={80}/>
                </div> 
                <div className={benefitStyle['title-benefit']}>
                    Hơn 1000 tiện ích
                </div>
                <div className={benefitStyle['content-benefit']}>
                    Thiết kế chuẩn tiện ích thể thao, giải trí, khu nghỉ dưỡng tích hợp
                </div>           
            </div>
            <div className={benefitStyle['benefit-content']}>
                <div className={benefitStyle['image-benefit']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/ke-hoach-dau-tu.jpg" alt="benefit_img"  width={80}/>
                </div>
                <div className={benefitStyle['title-benefit']}>
                    Tài sản đầu tư tiềm năng
                </div>
                <div className={benefitStyle['content-benefit']}>
                    Kết nối đồng bộ vào khu trung tâm thành phố Phan Thiết
                </div>
            </div>
            <div className={benefitStyle['benefit-content']}>
                <div className={benefitStyle['image-benefit']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/ke-hoach-dau-tu.jpg" alt="benefit_img"  width={80}/>
                </div>
                <div className={benefitStyle['title-benefit']}>
                    Biệt thự cao cấp
                </div>
                <div className={benefitStyle['content-benefit']}>
                    Nhiều loại hình biệt thự, nhà phố biệt lập, song lập và liền kề
                </div>
            </div>
            <div className={benefitStyle['benefit-content']}>
                <div className={benefitStyle['image-benefit']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/ke-hoach-dau-tu.jpg" alt="benefit_img"  width={80}/>
                </div>
                <div className={benefitStyle['title-benefit']}>
                    An ninh biệt lập
                </div>
                <div className={benefitStyle['content-benefit']}>
                    Dành riêng cho căn hộ của bạn với những tiện ích chuẩn 5 resoft
                </div>
            </div>
        </div>
    )
}

export default Benefits