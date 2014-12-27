'use strict';
/*jshint esnext: true */

export default factory;

factory.$inject = ['facility', 'resource'];

function factory (facility, resource) {
	return {
		createFacility: function(name, options) {
			return new facility.class(name, options);
		},
		createResource: function(name, options) {
			return new resource.class(name, options);
		},
		clearAll: function() {
			facility.clear();
			resource.clear();
			return true;
		},
		clearFacility: facility.clear,
		clearResource: resource.clear,

		// for testing
		getCache: function() {
			return {
				facilityCache: facility.cache,
				resourceCache: resource.cache
			};
		}
	};
}
