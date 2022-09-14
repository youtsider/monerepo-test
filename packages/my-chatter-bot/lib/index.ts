export async function ask(question: string): Promise<string> {
  const tone = new RegExp("[!?!？]")
  return question.replace(tone, "").replace("吗", ``)
}