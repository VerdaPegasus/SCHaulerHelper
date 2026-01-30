import type { Mission, Ship } from '@/types';

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportJSON(
  missions: Mission[],
  ship: Ship | null,
  system: string,
  category: string
) {
  const exportData = {
    metadata: {
      exportDate: new Date().toISOString(),
      version: '4.0.0',
      ship: ship?.name ?? null,
      system,
      category,
    },
    missions: missions.map((mission, index) => ({
      missionNumber: index + 1,
      missionId: mission.id,
      payout: mission.payout,
      commodities: mission.commodities.map((c) => ({
        commodity: c.commodity,
        pickup: c.pickup,
        destination: c.destination,
        quantity: c.quantity,
        maxBoxSize: c.maxBoxSize,
      })),
    })),
  };

  const filename = `hauler-helper-${ship?.name ?? 'session'}-${new Date().toISOString().split('T')[0]}.json`;
  downloadBlob(
    new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' }),
    filename
  );
}

export function exportCSV(missions: Mission[], ship: Ship | null) {
  let csv = 'Mission,Payout,Commodity,Pickup,Quantity,Max Box,Destination\n';

  missions.forEach((mission, mIndex) => {
    mission.commodities.forEach((commodity) => {
      if (commodity.commodity || commodity.pickup || commodity.destination) {
        csv += `${mIndex + 1},`;
        csv += `${mission.payout || ''},`;
        csv += `"${commodity.commodity || ''}",`;
        csv += `"${commodity.pickup || ''}",`;
        csv += `${commodity.quantity || ''},`;
        csv += `${commodity.maxBoxSize || '4'},`;
        csv += `"${commodity.destination || ''}"\n`;
      }
    });
  });

  const filename = `hauler-helper-${ship?.name ?? 'session'}-${new Date().toISOString().split('T')[0]}.csv`;
  downloadBlob(new Blob([csv], { type: 'text/csv' }), filename);
}
