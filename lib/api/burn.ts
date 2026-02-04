import { post } from './client';
import type { RequestOptions } from './client';
import type { BurnAcbuBody, BurnResponse } from '@/types/api';

export async function burnAcbu(
  acbuAmount: string,
  currency: string,
  recipientAccount: BurnAcbuBody['recipient_account'],
  opts?: RequestOptions
): Promise<BurnResponse> {
  const body: BurnAcbuBody = {
    acbu_amount: acbuAmount,
    currency: currency.toUpperCase().slice(0, 3),
    recipient_account: recipientAccount,
  };
  return post<BurnResponse>('/burn/acbu', body, opts);
}
