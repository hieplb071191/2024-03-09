import styles from '../../../styles/description-image-project.module.scss'

export default function DescriptionImageProject() {
    return(
        <div className={styles['description-image-project']}>
            <section className={styles['title']}>
                <hr>
                </hr>
                <span>
                    HÌNH ẢNH DỰ ÁN NOVAWORLD PHAN THIẾT
                </span>
                <hr>
                </hr>
            </section>
            <section className={styles['description']} >
                <span>NovaWorld Phan Thiết Integrated Resort: là quần thể nghỉ dưỡng phức hợp, hội tụ mọi hoạt động du lịch, vui chơi, giải trí cao cấp.</span>
                <span>
                Integrated Resort là mô hình khu đô thị resort kiểu mới. Integrated Resort là một mô hình nghỉ dưỡng quy mô,
                </span>
                <span>
                đẳng cấp Quốc tế chắc chắn sẽ là cú hích lớn đưa du lịch nghỉ dưỡng bước sang một kỷ nguyên mới.
                </span>
            </section>
            <section className={styles['list-image']}>
                <div className={styles['image']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/img1.jpg" alt="" />
                    <div className={styles['image-footer']}>
                        NovaWorld - Điểm đến hoàn hảo của bạn
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/cau-lac-bo-bai-bien.jpg" alt="" />
                    <div className={styles['image-footer']}>
                        Câu lạc bộ bãi biển lãng mạn
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/san-gold.jpg" alt="" />
                    <div className={styles['image-footer']}>
                        Sân Gold đẳng cấp chuẩn 5 sao
                    </div>
                </div>
            </section>
        </div>
    )
}