import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()){
    const year = dayjs().year()
    const firstDay = dayjs(new Date(year, month, -1)).day()
    let currentMonthIndex = 0 - firstDay
    const dayMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthIndex++
            return dayjs(new Date(year, month, currentMonthIndex))
        })
    })
    return dayMatrix
}