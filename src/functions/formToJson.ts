export function formToJSON(formElement) {
  const formData = new FormData(formElement)
  const data = {}

  for (const [key, value] of formData.entries()) {
    data[key] = value
  }

  return JSON.stringify(data)
}
