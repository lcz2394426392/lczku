import axios from 'axios';


var $http = axios.create({

	baseURL: 'https://www.vue-js.com/api/v1/topic/',

	headers: {
		'X-Custom-Header': 'foobar'
	}
});



function getTopicsList(_id){
	// console.log(_id);
	return $http({
		method: 'get',
		url: _id
	})
}


export {getTopicsList}