import { useState } from 'react'

const SharedCategory = () => {
    const [activeCat, setActiveCat] = useState()
    return {
        activeCat,
        setActiveCat
    }
}

export default SharedCategory