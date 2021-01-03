interface SupplyAttributes {
  id?: number;
  name: string;
  price: number;
  status: number;
  message?: string;
  count: number;
  link: string;
  invoice?: string;
  user_id?: number;
  club_id?: number;
}

export { SupplyAttributes }