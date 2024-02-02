/* eslint-disable @typescript-eslint/no-explicit-any */
export function formToJSON(formElement: any) {
  const formData = new FormData(formElement)
  const data: { [key: string]: any } = {}
  for (const [key, value] of formData.entries()) {
    data[key] = value
  }

  return JSON.stringify(data)
}
