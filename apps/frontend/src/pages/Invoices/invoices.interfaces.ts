export interface Invoice {
  _id: string;
  id: string;
  due_date: string;
  amount: number;
  details: string;
  user_id: {
    name: string;
    _id: string;
    id: string;
  };
}
