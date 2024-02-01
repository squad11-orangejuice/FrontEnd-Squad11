/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function formToJSON(formElement) {
  const formData = new FormData(formElement);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  return JSON.stringify(data);
}