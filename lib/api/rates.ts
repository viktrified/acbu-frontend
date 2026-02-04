import { get } from './client';
import type { RequestOptions } from './client';
import type { RatesResponse, QuoteResponse } from '@/types/api';

export async function getRates(opts?: RequestOptions): Promise<RatesResponse> {
  return get<RatesResponse>('/rates', opts);
}

export async function getQuote(
  amount: number | string,
  currency?: string,
  opts?: RequestOptions
): Promise<QuoteResponse> {
  const params = new URLSearchParams({ amount: String(amount) });
  if (currency) params.set('currency', currency);
  return get<QuoteResponse>(`/rates/quote?${params.toString()}`, opts);
}
