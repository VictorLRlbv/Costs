import './container.scss'

export default function Container({children, customClass}: {children: any, customClass: string}) {
    return <div className={`${customClass} container`}>{children}</div>
}
