import headerStyles from '../../../styles/header.module.scss'

export default function NavbarHeader () {
    return (
        <nav className={`${headerStyles['header']}`} id='header'>
            <div className={headerStyles['header-content']}>
                <section className={`${headerStyles['left-content']}`}>
                    <img src="https://bds10.webmatrix.vn/wp-content/uploads/2019/04/logo-nova.png" alt="logo"  />
                </section>
                <section className={headerStyles['right-content']} >
                    <a className={headerStyles['button-link']} href='#header'>
                        Trang chủ
                    </a>
                    <a className={headerStyles['button-link']} href='#project-title'>
                        Tổng quan
                    </a>
                    <a className={headerStyles['button-link']}>
                        Vị trí
                    </a>
                    <a className={headerStyles['button-link']}>
                        Hình ảnh
                    </a>
                    <a className={headerStyles['button-link']}>
                        Chọn mẫu nhà
                    </a>
                    <a className={headerStyles['button-link']}>
                        Nhận xét
                    </a>
                    <a className={headerStyles['button-link']}>
                        Liên hệ
                    </a>
                    <div className={headerStyles['right-content__contact']}>
                        0999.999.999
                    </div>
                </section>
            </div>
        </nav>
    )
}