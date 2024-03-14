import CustomCarousel from '@/re-use-component/carousel'
import styles from '../../../../styles/description-image-project.module.scss'

export default function DescriptionImageProject() {
    return(
        <div className={styles['description-image-project']}>
            <section className={styles['title']}>
                <hr>
                </hr>
                <div>
                    HÌNH ẢNH DỰ ÁN NOVAWORLD PHAN THIẾT
                </div>
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
            <section className={styles['list-benefit']}>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Sân vận động
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        2 sân Gold
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Đường biển 7km
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Bến du thuyền
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Trường đấu La mã
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Water Park
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Trung tâm TDTT
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Bikini Beach
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Công viên 16Ha
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Phòng tập Gym
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Trung tâm Hội nghị
                    </div>
                </div>
                <div className={styles['elm']}>
                    <div className={styles['button-chip']}>
                        Petting Zoo
                    </div>
                </div>
            </section>
            <section className={styles['slider']}>
                <CustomCarousel listImage={[
                    {
                        url: 'https://bds10.webmatrix.vn/wp-content/uploads/2019/04/img01.jpg',
                        description: ''
                    },
                    {
                        url: 'https://bds10.webmatrix.vn/wp-content/uploads/2019/04/img03.jpg',
                        description: ''
                    }
                ]}/>
            </section>
        </div>
    )
}