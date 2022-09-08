import { app } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanUp - deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    // Creates user on firebase
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {

            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, { displayName: data.displayName })

            setLoading(false)

            return user

        } catch (error) {

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "Password shall be at least 6 characters"
            }
            else if (error.message.includes('email')) {
                systemErrorMessage = 'Invalid e-mail'
            }
            else {
                systemErrorMessage = "Something went wrong...try again"
            }

            setError(systemErrorMessage)

            setLoading(false)
        }

    }

    // Logout - sign out
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    // Login - sign in
    const login = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)

            setLoading(false)

        } catch (error) {

            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "User not found"
            }
            else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Wrong password'
            }
            else {
                systemErrorMessage = "Something went wrong...try again"
            }

            setError(systemErrorMessage)

            setLoading(false)
        }
    }

    // cleanUp - deal with memory leak
    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { auth, createUser, error, loading, logout, login }

}