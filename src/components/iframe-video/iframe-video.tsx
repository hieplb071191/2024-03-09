import iframeVideoStyles from '../../../styles/iframe-video.module.scss'

export default function IframeVideo () {
    return (
        <div className={iframeVideoStyles['iframe-video']}>
            <iframe width="949" height="537" src="https://www.youtube.com/embed/2So_zoDlIfY" title="Novaworld Phan Thiết NovaLand Mở Bán 10/04/2019"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </div>
    )
}