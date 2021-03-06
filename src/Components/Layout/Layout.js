import style from './layout.module.css';

const Layout = ({title, descr, urlBg, colorBg='#e2e2e2'}) => {
    console.log('image->', urlBg);
    console.log('color->', colorBg);
    const background = urlBg ? { backgroundImage: `url(${urlBg})`} : { background: `url(${colorBg})`};

    return(
        <section className={style.root} style={background}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={[style.desc, style.full]}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    ) 
};

export default Layout;