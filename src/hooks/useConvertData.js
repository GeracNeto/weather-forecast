// This hooks convert UNIX date em 'normal' date

export const useConvertData = () => {

    const convertDate = (unixDate) => {

        let date = new Date(unixDate * 1000)

        let dayName = date.toLocaleDateString("en-US", { weekday: "short" })
        let month = date.toLocaleString("en-US", { month: "long" })
        let dayNumber = date.toLocaleDateString("en-US", { day: "numeric" })

        return `${dayName},  ${month} ${dayNumber}`
    }

    return { convertDate }
}