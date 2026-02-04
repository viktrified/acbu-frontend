import { get } from './client';
import type { RequestOptions } from './client';
import type { TransactionDetail } from '@/types/api';

export async function getTransaction(id: string, opts?: RequestOptions): Promise<TransactionDetail> {
  return get<TransactionDetail>(`/transactions/${encodeURIComponent(id)}`, opts);
}
