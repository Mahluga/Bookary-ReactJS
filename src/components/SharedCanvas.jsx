import { useState } from 'react'

const SharedCanvas = () => {
    const [showCanvas, setShowCanvas] = useState(false);
    return {
        showCanvas,
        setShowCanvas
    }
}

export default SharedCanvas