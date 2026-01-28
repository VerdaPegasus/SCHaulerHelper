const ALL_BOX_SIZES = [32, 24, 16, 8, 4, 2, 1] as const;

export function calculateBoxBreakdown(
  scu: number,
  maxBoxSize: number = 32
): Record<number, number> {
  const boxSizes = ALL_BOX_SIZES.filter((size) => size <= maxBoxSize);
  const breakdown: Record<number, number> = {};
  let remaining = scu;

  for (const size of boxSizes) {
    const count = Math.floor(remaining / size);
    if (count > 0) {
      breakdown[size] = count;
      remaining -= size * count;
    }
  }

  return breakdown;
}

export function formatPayoutShorthand(value: string | number): string {
  let num: number;
  if (typeof value === 'string') {
    num = parseFloat(value.replace('k', '')) * 1000;
  } else {
    num = value;
  }

  const abs = Math.abs(num);
  if (abs >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'm';
  } else if (abs >= 1_000) {
    return (num / 1_000).toFixed(2).replace(/\.?0+$/, '') + 'k';
  }
  return num.toString();
}

export function parsePayoutToNumber(payout: string): number {
  if (!payout) return 0;
  const cleaned = payout.trim().toLowerCase();
  if (cleaned.endsWith('k')) {
    return parseFloat(cleaned.replace('k', '')) * 1000;
  }
  if (cleaned.endsWith('m')) {
    return parseFloat(cleaned.replace('m', '')) * 1_000_000;
  }
  return parseFloat(cleaned) || 0;
}
