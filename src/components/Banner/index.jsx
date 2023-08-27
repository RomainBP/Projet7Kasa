import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Banner() {
    const [page, setPage] = useState(false)
    const actualPage = useLocation()
    console.log(actualPage)
    useEffect(() => {
        if (actualPage.pathname === '/Concerning') {
            setPage(true)
        }
    }, [])

    return (
        <section className={page ? 'banner_concerning' : 'banner'}>
            {!page && <h1>Chez vous, partout et ailleurs</h1>}
        </section>
    )
}

export default Banner
