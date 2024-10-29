import { useState } from 'react'

const useSharedUser = () => {
    const [userStatus, setUserStatus] = useState("");
    const [userName, setUserName] = useState("");
    return {
        userStatus,
        setUserStatus,
        userName,
        setUserName
    }
}

export default useSharedUser