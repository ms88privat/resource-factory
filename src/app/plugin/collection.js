'use strict';
/*jshint esnext: true */

export default facilityProvider;

function facilityProvider () {

	let lfOptions = {
		name: 'facility'
	};

	let initCache = function(cache) {
		cache.name = 'facilityCache';
	};

	facility.$inject = ['$localForage', '$q'];

	this.$get = facility;

	function facility($localForage, $q) {

		//
		let cache = {};
		initCache(cache);

		let lf = $localForage.createInstance(lfOptions);

		class Facility {
			constructor (name, {isArray, primaryKey}) {
				// provider config able
				this.cache = cache;
				this.lf = lf;
				// reuired
				this.name = name;
				// options
				this.isArray = isArray || false;
				this.primaryKey = primaryKey || 'id';
				// generated properties
				this.keyname = generateKeyname(name);
			}
			save(data) {
				return save.call(this, data);
			}
			get(options) {
				return get.call(this, options);
			}
			clear() {
				return clear.call(this);
			}
		}

		return {
			class: Facility,
			clear: clearAll,

			// for testing
			cache: cache
		};

		function save(data) {
			this.cache[this.keyname] = data;
			this.lf.setItem(this.keyname, data);
			return this.cache[this.keyname];
		}

		function get(options) {
			return this.cache[this.keyname];
		}

		function clear() {
			delete this.cache[this.keyname];
		}

		function clearAll() {
			cache = {};
			initCache(cache);
			lf.clear();
		}

	}



	

	

	function getHttp(options) {
		let data;
		// todo: get real http data

		// yield request

		if (!data) {
			return this.super.get(options); // question: this.get?
		}
	}



	function generateKeyname(name) {
		return 'appname' + name;
	}
}





	// return {
	// 	createInstance: function(name, options) {
	// 		return new Collection(name, options);
	// 	},
	// 	createResourceInstance: function(name, options) {
	// 		return new Resource(name, options);
	// 	},
	// 	clearStorage: function() {
	// 		clearStorage();
	// 	}
	// };