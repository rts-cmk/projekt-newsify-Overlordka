import { renderHook } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { useNews } from './useNews';

test('fetches articles from API if cache is empty', async () => {
  const fakeArticles = [{ _id: '1', headline: { main: 'test' } }];
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ response: { docs: fakeArticles } }),
    })
  );

  const { result } = renderHook(() => useNews());

  await waitFor(() => {
    expect(result.current.length).toBeGreaterThan(0);
  });

  expect(result.current).toEqual(fakeArticles);
});
