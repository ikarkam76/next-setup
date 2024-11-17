'use client'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Home = () => {
    const router = useRouter()

    return (
        <div className={styles.page}>
            <h1>Home page</h1>
            <Link href="/posts" style={{fontSize: 24}}>Go to posts</Link>
            <button type="button" onClick={() => router.push('/home/settings')} style={{fontSize: 24, padding: 20, borderRadius: 10, width: 200}}>
                Settings
            </button>
        </div>
    )
}

export default Home;