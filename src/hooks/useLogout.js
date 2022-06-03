import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)

    const logout = async () => {
        setError(null)
        setIsPending(true)

        //signout user

        try {
            await projectAuth.signOut()

            //dispatch logout

            dispatch({ type: 'LOGOUT' })

            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }


        } catch (err) {
            if (!isCancelled) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { logout, error, isPending }
}

