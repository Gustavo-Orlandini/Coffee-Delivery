import { ReactNode } from "react"
import styles from './Feature.module.css'

interface FeatureProps {
    text: string
    icon: ReactNode
    color: string
}

export function Feature(props: FeatureProps) {
    return (
        <div className={styles.envolt}>
            <div
                style={{
                    color: 'var(--white)',
                    width: '2rem',
                    height: '2rem',
                    background: `var(--${props.color})`,
                    borderRadius: '999px',
                    padding: '8px',
                }}>
                {props.icon}
            </div>
            <p style={{ fontSize: '1rem' }}>{props.text}</p>
        </div>
    )
}

