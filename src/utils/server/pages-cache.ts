import { TRenderResult } from 'src/entry-server';

const ANONYMOUS_CACHE_TTL = 60 * 1000;

export interface TCachedPage {
  expires: number;
  renderResult: null | TRenderResult;
}
export class PagesCache {
  private pages: Record<string, TCachedPage | undefined> = {};

  public getPage(cacheKey: string) {
    return this.pages[cacheKey];
  }

  public putPage(cacheKey: string, renderResult: TRenderResult) {
    this.pages[cacheKey] = {
      expires: Date.now() + ANONYMOUS_CACHE_TTL,
      renderResult,
    };
  }

  public resetPage(cacheKey: string) {
    this.pages[cacheKey] = {
      expires: Infinity,
      renderResult: null,
    };
  }
}
