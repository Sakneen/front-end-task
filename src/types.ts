const unit_type = {
  penthouse: 'penthouse',
  apartment: 'apartment',
  townHouse: 'town house',
  twinHouse: 'twin house',
  chalet: 'duplex',
} as const;

type unitType = keyof typeof unit_type;

type unit = {
  _id: string;
  for_sale: boolean;
  photos: string[];
  unit_id: string;
  total_price: number;
  unit_type: unitType;
  bua: number;
};

type units = unit[];

export type { units };
