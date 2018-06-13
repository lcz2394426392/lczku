import axios from 'axios';


var $http = axios.create({

	baseURL: 'https://www.vue-js.com/api/v1/',

	headers: {
		'X-Custom-Header': 'foobar'
	}
});



function getTopicsList(params){

	var newParams = Object.assign({
		limit: 20,
	}, params);

	return $http({
		method: 'get',
		url: '/topics',
		params: newParams
	})


}


export {getTopicsList}