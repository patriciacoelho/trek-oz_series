export const STATUS = {
  RETURNING_SERIES: 'Returning Series',
  CANCELED: 'Canceled',
  ENDED: 'Ended',
  IN_PRODUCTION: 'In Production',
};

export const STATUS_TRANSLATION = {
  [STATUS.IN_PRODUCTION]: 'Em produção',
  [STATUS.ENDED]: 'Finalizada',
  [STATUS.CANCELED]: 'Cancelada',
  [STATUS.RETURNING_SERIES]: 'Renovada',
};
