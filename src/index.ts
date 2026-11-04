import { DOMParser } from '@xmldom/xmldom';

export interface Env {
	// Example binding to R2. Learn more at https://developers.cloudflare.com/r2/api/workers/workers-api-reference/
	// `bucket` is the canonical binding name; `BUCKET` remains supported for existing deployments.
	bucket?: R2Bucket;
	BUCKET?: R2Bucket;

	// Variables defined in the "Environment Variables" section of the Wrangler CLI or dashboard
	USERNAME: string;
	PASSWORD: string;
}

