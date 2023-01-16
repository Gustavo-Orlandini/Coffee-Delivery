import { ReactNode } from 'react'
import styles from './finalFeature.module.css'

interface ResumePayComponents {
    icon: ReactNode,
    colorPin: string,
    p1?: string,
    p2?: string,
    span1?: string,
    span2?: string,
}

export function ResumePayComponent(props: ResumePayComponents) {
    return (
        <>
            <div className={styles.envolt}>
                <div
                    style={{
                        color: 'var(--white)',
                        width: '2rem',
                        height: '2rem',
                        background: props.colorPin,
                        borderRadius: '999px',
                        padding: '8px',
                    }}>
                    {props.icon}
                </div>
                <div>
                    <p style={{ fontSize: '1rem' }}>{props.p1}<span>{props.span1}</span></p>
                    <p>{props.p2}</p><span>{props.span2}</span>

                </div>
            </div>

        </>
    )
}