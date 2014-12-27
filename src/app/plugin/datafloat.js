'use strict';
/*jshint esnext: true */

import facility from './collection';
import resource from './resource';
import factory from './factory';

export default angular
		.module('datafloat', ['LocalForageModule'])
		.provider('facility', facility)
		.provider('resource', resource)
		.factory('factory', factory)
		;


// dynamic object properties
// return multiple
// function default values
// variable arg size
// let keyword for blockscope

