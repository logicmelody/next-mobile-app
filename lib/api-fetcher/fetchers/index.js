import { getQueryString } from '../utils';

export { default as rxAjaxFetcher } from './rx-ajax-fetcher';

export const buildUrl = (url, queries) => {
	let _url = url;

	if (!queries) {
		return _url;
	}

	const queryStrings = getQueryString(queries, { indices: false });

	if (queryStrings) {
		const connectTag = _url.indexOf('?') < 0 ? '?' : '&';

		_url += connectTag + queryStrings;
	}

	return _url;
};
