/**
 *
 * url map utilized by url-manager
 * api is there, map is here
 * why .js not .json? because a value can be dynamic and/or a function
 *
 **/

const oUrlMap = {
  'users': 'http://localhost:3000/api/EllaUsers',
  'items': 'http://localhost:3000/api/items',
  'test': 'http://httpbin.org/get'
};

export default oUrlMap
