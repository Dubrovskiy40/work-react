import style from './layout.module.css';

const Layout = ({title, urlBg, colorBg='#e2e2e2', children}) => {
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
                        <p>{children}</p>
                    </div>
                </article>
            </div>
        </section>
    ) 
};

export default Layout;