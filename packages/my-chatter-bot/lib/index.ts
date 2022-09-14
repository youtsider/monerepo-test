export async function ask(question: string): Promise<string> {
  const tone = new RegExp("[!?!？]")
  if (question === "你好？") return "你好！"
  return question.replace(tone, "").replace("吗", ``)
}