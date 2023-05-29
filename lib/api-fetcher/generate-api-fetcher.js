import {
	isConfigRequired,
	merge,
} from './utils';
import { v4 as uuidv4 } from 'uuid';

const withBodyMethods = ['post', 'put', 'patch', 'delete'];
const DEFAULT_CONTENT_TYPE = {
	'Content-Type': 'application/json',
};
const defaultConfigs = {
	baseUrl: '',
	method: 'GET',
	headers: {
		'Accept': 'application/json',
	},
	fetcher: undefined,
};

function generateApiFetcher(initialConfigs = {}) {
	const _defaults = merge(defaultConfigs, initialConfigs);
	const {
		fetcher: _fetcher = isConfigRequired('fetcher'),
	} = _defaults;
	// generate handlers by method
	const handlers = {};
	const _request = (configs) => {
		const finalConfigs = merge({}, _defaults, configs);

		finalConfigs.method = finalConfigs.method.toUpperCase();

		return _fetcher(finalConfigs);
	};

	handlers['get'] = (url, configs = {}) => {
		const { queries = {}, ...rest } = configs;

		return _request(merge(rest,
			{
				url,
				method: 'get',
				queries: {
					...queries,
					__un: uuidv4(),
				},
			})
		);
	};

	handlers['head'] = (url, configs = {}) => {
		return _request(merge(configs, {
			url,
			method: 'head',
		}));
	};

	withBodyMethods.forEach((method) => {
		handlers[method] = (url, body, configs = {}, hasHeader = true) => {
			if (hasHeader) {
				return _request(merge({
					headers: DEFAULT_CONTENT_TYPE,
				}, configs, {
					url,
					body,
					method,
				}));

			} else {
				return _request(merge(configs, {
					url,
					body,
					method,
				}));
			}
		};
	});

	return handlers;
}

export default generateApiFetcher;
