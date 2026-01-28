import { applyLocationAlias, applyCommodityAlias } from '@/data/ocr-mappings';
import type { ParsedMission, ParsedSegment } from '@/types';

export function parseStarCitizenMission(text: string): ParsedMission {
  const payout = extractPayout(text);
  text = preprocessText(text);
  const segments = extractSegments(text);
  return { payout, segments };
}

function extractPayout(text: string): number | null {
  let match = text.match(/Reward[^\n]{0,10}?(\d{2,3},\d{3}|\d{5,})/i);
  if (match) {
    return parseInt(match[1].replace(/,/g, ''), 10);
  }
  match = text.match(/(?:EEL\]|REE|RRE)[^\n]{0,10}?(\d{2,3},\d{3}|\d{5,})/i);
  if (match) {
    return parseInt(match[1].replace(/,/g, ''), 10);
  }
  return null;
}

function preprocessText(text: string): string {
  // Fix location names that break across lines
  text = text.replace(/Sakura Sun\s*\n\s*Goldenrod/gi, 'Sakura Sun Goldenrod');
  text = text.replace(/Greycat Stanton IV\s*\n\s*Production/gi, 'Greycat Stanton IV Production');
  text = text.replace(/Rayari (\w+)\s*\n\s*Research/gi, 'Rayari $1 Research');
  text = text.replace(/NB Int\.?\s*\n\s*Spaceport/gi, 'NB Int. Spaceport');

  // Fix facility codes that break across lines
  text = text.replace(/SMO-\s*\n\s*(\d+)/gi, 'SMO-$1');
  text = text.replace(/SM0-\s*\n\s*(\d+)/gi, 'SMO-$1');
  text = text.replace(/SMCa-\s*\n\s*(\d+)/gi, 'SMCa-$1');
  text = text.replace(/S4DC\s*\n\s*(\d+)/gi, 'S4DC$1');
  text = text.replace(/S4LD\s*\n\s*(\d+)/gi, 'S4LD$1');

  // Fix prefix + code on next line
  text = text.replace(/Mining\s*\n\s*(SMO-?\d+|SMCa-?\d+)/gi, 'Mining $1');
  text = text.replace(/Facility\s*\n\s*(SMO-?\d+|S4DC\d+)/gi, 'Facility $1');

  return text;
}

function extractSegments(text: string): ParsedSegment[] {
  const segments: ParsedSegment[] = [];
  const deliverPattern =
    /Deliver\s+(0\/\d+|\d+)\s+SCU\s+(?:of\s+)?([\w\s()]+?)\s+to\s+([\w\s\-.']+?)\s+(?:on|above)\s+/gi;

  let match;
  while ((match = deliverPattern.exec(text)) !== null) {
    const quantityStr = match[1];
    const commodityRaw = match[2].trim();
    const deliveryRaw = match[3].trim();
    const deliverPos = match.index;

    const quantity = parseQuantity(quantityStr);
    const commodity = cleanCommodity(commodityRaw);
    const delivery = cleanLocation(deliveryRaw);
    const pickup = findPickupLocation(text, commodity, deliverPos);

    if (pickup && delivery && commodity && quantity > 0) {
      segments.push({ commodity, pickup, delivery, quantity });
    }
  }

  return segments;
}

function parseQuantity(str: string): number {
  if (str.includes('/')) {
    const parts = str.split('/');
    return parseInt(parts[1], 10);
  }
  const cleaned = str.replace(/^0+/, '') || '0';
  return parseInt(cleaned, 10);
}

function cleanCommodity(commodity: string): string {
  const cleaned = commodity.replace(/\s*\([^)]+\)\s*/g, ' ').trim();
  return applyCommodityAlias(cleaned);
}

function cleanLocation(location: string): string {
  return applyLocationAlias(location.trim());
}

function findPickupLocation(
  text: string,
  commodity: string,
  deliverPos: number
): string | null {
  const searchStart = Math.max(0, deliverPos - 1000);
  const textBefore = text.substring(searchStart, deliverPos);

  const commodityPattern = commodity.replace(/\s+/g, '\\s+');
  const collectPattern = new RegExp(
    `Collect\\s+${commodityPattern}\\s+(?:\\([^)]+\\)\\s+)?from\\s+([\\w\\s\\-.']+?)(?:\\.|\\n)`,
    'gi'
  );

  const matches = Array.from(textBefore.matchAll(collectPattern));
  if (matches.length > 0) {
    const lastMatch = matches[matches.length - 1];
    return cleanLocation(lastMatch[1].trim());
  }

  return null;
}
