export interface Transaction {
  account_number: string
  amount: number;
  beneficiary_bank: string;
  beneficiary_name: string;
  completed_at: string;
  created_at: string;
  fee: number;
  id: string;
  remark: string;
  sender_bank: string;
  status: StatusString;
  unique_code: number;
};

export type TransactionList = Transaction[];

type StatusString = 'SUCCESS' | 'PENDING';

type StatusObject = {
  [key in StatusString]?: string;
}

export const Status: StatusObject = {
  SUCCESS: 'Berhasil',
  PENDING: 'Pengecekan'
}



