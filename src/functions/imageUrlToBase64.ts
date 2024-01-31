export async function imageUrlToBase64(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    const blob = await response.blob()

    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const result = reader.result

        if (typeof result === 'string') {
          resolve(result)
        } else {
          reject(new Error('Failed to convert image to base64.'))
        }
      }

      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error('Erro ao converter imagem para base64:', error)
    throw error
  }
}
