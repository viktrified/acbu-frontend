import { get, post } from './client';
import type { RequestOptions } from './client';
import type {
  SavingsPositionsResponse,
  SavingsDepositBody,
  SavingsWithdrawBody,
} from '@/types/api';

export async function getSavingsPositions(
  user: string,
  termSeconds?: number,
  opts?: RequestOptions
): Promise<SavingsPositionsResponse> {
  const params = new URLSearchParams({ user });
  if (termSeconds != null) params.set('term_seconds', String(termSeconds));
  return get<SavingsPositionsResponse>(`/savings/positions?${params.toString()}`, opts);
}

export async function savingsDeposit(
  body: SavingsDepositBody,
  opts?: RequestOptions
): Promise<{ transaction_hash: string; new_balance: string | number }> {
  return post('/savings/deposit', body, opts);
}

export async function savingsWithdraw(
  body: SavingsWithdrawBody,
  opts?: RequestOptions
): Promise<{ transaction_hash: string }> {
  return post('/savings/withdraw', body, opts);
}
