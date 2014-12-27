'use strict';
/*jshint esnext: true */

export default ResourceProvider;

function ResourceProvider() {

	let lfOptions = {
		name: 'resource'
	};

	this.$get = resource;

	resource.$inject = ['facility', '$localForage', '$http', '$q'];

	function resource(facility, $localForage, $http, $q) {

		let cache = {};
		cache.name = 'resourceCache';

		let lf = $localForage.createInstance(lfOptions);

		class Resource extends facility.class {
			constructor (name, {isArray, url, primaryKey}) {
				super(name, {isArray, primaryKey});
				this.url = url;
				this.cache = cache;
				this.lf = lf;
			}
			
			// getHttp(options) {
			// 	getHttp.call(this, options);
				
			// }
		}

		return {
			class: Resource,
			clear: clearAll,

			// for testing
			cache: cache
		};

		function clearAll() {
			cache = {};
			cache.name = 'resourceCache';
			lf.clear();
		}
	}

}