'use client'

import IntiniteCaurosel from "@/components/banner/banner-caurosel"
import homeStyles from '../../../styles/home.module.scss'
import Benefits from "@/components/benefits/benefits"
import BannerProject from "@/components/banner-project/banner-project"

 const HomePage = ()=> {
  const items = [
      {
          src: 'https://bds10.webmatrix.vn/wp-content/uploads/2019/04/slider1.jpg',
          altText: `slide 1`,
          caption: `slide 1`,
          key: 1,
      },
      {
          src: 'https://bds10.webmatrix.vn/wp-content/uploads/2019/04/slider-2.jpg',
          altText: `slide 2`,
          caption: `slide 2`,
          key: 2,
      }
  ]
      return (
        <div className={homeStyles['home']}>
          <IntiniteCaurosel items={items} />
          <Benefits />
          <BannerProject />
        </div>
      )
}

export default HomePage