export async function thinking(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}