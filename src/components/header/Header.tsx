import { Link } from "react-router-dom"
import styles from "./header.module.css"

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link key='1' to='/'>Weather App</Link>
                <Link key='2' to='/'>Home</Link>
                <Link key='3' to='/'>Weathers</Link>
            </header>
        </>
    )
}
