import tools from "../assets/tools.json";
import type { Tool } from "../models/Tool";

export function getTool(toolId: string): Tool | undefined {
  return (tools as Tool[]).find((tool) => {
    if (toolId==tool.id) {
      return tool;
    }
  });
}
export function generateToken(includeUppercase:boolean, includeLowercase:boolean, includeSymbols:boolean, includeNumbers:boolean, length:number): string {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?/';
  const numberChars = '0123456789';

  let charPool = '';
  if (includeUppercase) charPool += uppercaseChars;
  if (includeLowercase) charPool += lowercaseChars;
  if (includeSymbols) charPool += symbolChars;
  if (includeNumbers) charPool += numberChars;

  if (charPool === '') {
    return 'Please select at least one option.';
  }

  let token = '';
  for (let i = 0; i < length; i++) {
    token += charPool[Math.floor(Math.random() * charPool.length)];
  }

  return token;
}