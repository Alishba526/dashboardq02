export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-09'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skOSoTux4k4hxU1LgtYiOX6tQRKNzA1CdCW14skqWkDp1yZgGMnNhGJAfnQ7xR8hAcuH7W7NtPva9uO97yXqBPxSdTjlGw6VgciPAz9qhzWVvWl2PXHF7O3SyriRkpFmeFF4Iqhd88kF0a4J6duOlHviLh9MyDHNdOzMZ6oKeyvlNj5q4ZCb",

  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
