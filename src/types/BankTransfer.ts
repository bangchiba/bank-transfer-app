export interface BankTransfer {
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
  status: string;
  unique_code: number;
};

export type BankTransferList = BankTransfer[];