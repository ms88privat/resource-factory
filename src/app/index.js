'use strict';
/*jshint esnext: true */

import DatafloatPlugin from './plugin/datafloat';

import MainCtrl from './main/main.controller';

angular.module('dataFloat', ['datafloat'])
  .controller('MainCtrl', MainCtrl)
  ;
