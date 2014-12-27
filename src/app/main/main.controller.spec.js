'use strict';

describe('factory', function(){

  beforeEach(module('dataFloat'));

  it('should create a facility-instance with a name', inject(function(factory) {

    var instance;
    expect(instance).toBeUndefined();

    instance = factory.createFacility('facilityName', {});

    expect(instance.name).toMatch('facilityName');

  }));

  it('should create a resource-instance with a name', inject(function(factory) {

    var instance;
    expect(instance).toBeUndefined();

    instance = factory.createResource('resourceName', {});

    expect(instance.name).toMatch('resourceName');

  }));


});

describe('instance', function(){
  var single;
  var array;
  var facility;
  var resource;
  var empty;

  beforeEach(module('dataFloat'));

  beforeEach(inject(function(factory) {

    facility = factory.createFacility('facilityName', {});
    resource = factory.createResource('resourceName', {});

    single = {
      name: 'Fußball',
      id: 35
    };

    array = [
      {
        name: 'Fußball',
        id: 35
      },
      {
        name: 'Grillen',
        id: 12
      }
    ];

    empty = {};

  }));

  it('facility should cache, receive and clear data', inject(function(factory) {

    var data;
    expect(data).toBeUndefined();

    // save some example data
    facility.save(single);
    expect(facility.get()).toEqual(single);

    facility.save(array);
    expect(facility.get()).toEqual(array);
    expect(factory.getCache().facilityCache[facility.keyname]).toEqual(array);
    expect(factory.getCache().resourceCache).toEqual({name: 'resourceCache'});

    facility.clear();
    expect(facility.get()).toBeUndefined();
    expect(factory.getCache().facilityCache).toEqual({name: 'facilityCache'});

  }));

  it('resource should cache, receive and clear data', inject(function(factory) {

    var data;
    expect(data).toBeUndefined();

    // save some example data
    resource.save(single);
    expect(resource.get()).toEqual(single);

    resource.save(array);
    expect(resource.get()).toEqual(array);
    expect(factory.getCache().resourceCache[resource.keyname]).toEqual(array);
    expect(factory.getCache().facilityCache).toEqual({name: 'facilityCache'});

    resource.clear();
    expect(resource.get()).toBeUndefined();
    expect(factory.getCache().resourceCache).toEqual({name: 'resourceCache'});

  }));

});
