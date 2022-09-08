import { getDocs, collection, addDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useAddAPIKey = () => {

    const userCollectionRef = collection(db, "weatherkey")

    const addAPIKey = async (email, apiKey) => {

        const addKey = await addDoc(userCollectionRef, {
            email,
            apiKey
        })

        return addKey
    }

    return { addAPIKey }
}