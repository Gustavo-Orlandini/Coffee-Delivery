import { ReactNode } from 'react'
import styles from './content.module.css'

interface ContentWrapperProps {
    children?: ReactNode;
}

export function ContentWrapper(props: ContentWrapperProps) {
    return (
        <div className={styles.content}>
            {props.children}

        </div>
    )
}

