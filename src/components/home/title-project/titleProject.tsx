import titleProjectStyle from '../../../../styles/title-project.module.scss'

export default function TitleProject() {
    return(
    <div className={titleProjectStyle['title-project']} id='project-title'>
        <hr></hr>
            <span className={titleProjectStyle['text-title']}>THÔNG TIN DỰ ÁN NOVAWORLD PHAN THIẾT</span>
        <hr></hr>
    </div>
    )
}