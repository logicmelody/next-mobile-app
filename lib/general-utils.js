import {
	fetchers,
	generateApiFetcher,
} from './api-fetcher';

const { rxAjaxFetcher } = fetchers;

const rxjsApiFetcher = generateApiFetcher({
	fetcher: rxAjaxFetcher,
	baseUrl: '',
});


export {
	rxjsApiFetcher,
};
