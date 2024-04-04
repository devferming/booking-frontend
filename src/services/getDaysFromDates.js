
const getDaysFromDates = (date1, date2) => {

  const initialDay = new Date(date1)
  const finalDay = new Date(date2)

  const differenceMs = finalDay.getTime() - initialDay.getTime()
  const differenceDays = differenceMs / (1000 * 60 * 60 * 24)

  return differenceDays + 1

}

export default getDaysFromDates