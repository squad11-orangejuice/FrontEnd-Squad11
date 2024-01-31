export function formatarDate(date: string | undefined) {
  const isDate = date ? new Date(date) : new Date()

  const convertDate = new Date(isDate)
  const day = convertDate.getDate().toString().padStart(2, '0')
  const month = (convertDate.getMonth() + 1).toString().padStart(2, '0')

  return `${month}/${day}`
}
