import bannerProjectStyle from '../../../styles/banner-project.module.scss'
import { BsFillTelephoneFill } from "react-icons/bs";
export default function BannerProject() {
    return (
        <div className={bannerProjectStyle['banner-project']}>
            <div className={bannerProjectStyle['left-content']}>
                <div className={bannerProjectStyle['title']}>
                    NOVAWORLD PHAN THIẾT
                </div>
                <div className={bannerProjectStyle['content']}>
                    ĐẠI ĐÔ THỊ DU LỊCH – NGHỈ DƯỠNG – GIẢI TRÍ chính thức mở bán từ 10.4.2019.
                </div>
            </div>
            <div className={bannerProjectStyle['right-content']}>
                <div className={bannerProjectStyle['button']}>
                    <span>Liên hệ tư vấn ngay </span>
                    <span className={bannerProjectStyle['icon-phone']}>
                        <BsFillTelephoneFill size={15}/>
                    </span>
                </div>
            </div>
        </div>
    )
}