export function shortName(name: string): string {
  const parenMatch = name.match(/\(([^)]+)\)/);
  if (parenMatch) return parenMatch[1].trim();
  const codeMatch = name.match(/^([A-Z]{2,5}-L\d+)\s/);
  if (codeMatch) return codeMatch[1];
  const suffixCodeMatch = name.match(/\b([A-Z0-9]{2,5}-[A-Z]{2,5}-\d+)\s*$/);
  if (suffixCodeMatch) return suffixCodeMatch[1];
  const dcMatch = name.match(/^(.+?) Distribution Cent(re|er) ([A-Z0-9]+)$/i);
  if (dcMatch) return `${dcMatch[1]} ${dcMatch[3].toUpperCase()}`;

  return name
    .replace(/\s+Security(?=\s+(Post|Center|Centre|Facility|Station|Depot|Office))/i, '')
    .replace(/\s+(Station|Harbor|Point|Spaceport|Depot|Outpost|Shelter|Center|Centre|Facility|Yard|Base|Complex|Exchange|Plaza|Hub|Workcenter)$/i, '')
    .trim()
    .replace(/^Sakura Sun\s+/i, '');
}
