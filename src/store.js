import {
	createStore,
	applyMiddleware,
	compose,
	combineReducers
} from 'redux';
const logger = require('redux-logger').default

let reduxCreateStore = applyMiddleware(logger)(createStore);

const reducer = (state = {
	"clubs": [
			{
				"name": "Kamera test",
				"slug": "kamera-test",
				"rating": 4.99,
				"imageUrl": "/images/clubs/kamera-test.jpg",
				"videoUrl": "/video/kamera-test.mp4",
				"streaming": true
			},
			{
					"name": "1 Oak",
				"slug": "1-oak",
				"rating": 4.88,
				"imageUrl": "/images/clubs/1-oak.jpg",
				"videoUrl": "/video/1-oak.mp4",
				"streaming": true
			},
			{
					"name": "Drais",
				"slug": "drais",
				"rating": 4.5,
				"imageUrl": "/images/clubs/drais.jpg",
				"videoUrl": "/video/drais.mp4",
				"streaming": true
			},
			{
					"name": "Hakkasan",
				"slug": "hakkasan",
				"rating": 4.3,
				"imageUrl": "/images/clubs/hakkasan.jpg",
				"videoUrl": "/video/hakkasan.mp4",
				"streaming": true
			},
			{
					"name": "Lax",
				"slug": "lax",
				"rating": 2.25,
				"imageUrl": "/images/clubs/lax.jpg",
				"videoUrl": "/video/lax.mp4",
				"streaming": true
			},
			{
					"name": "Omnia",
				"slug": "omnia",
				"rating": 4.58,
				"imageUrl": "/images/clubs/omnia.jpg",
				"videoUrl": "/video/omnia.mp4",
				"streaming": true
			},
			{
					"name": "Tao",
				"slug": "tao",
				"rating": 3.7,
				"imageUrl": "/images/clubs/tao.jpg",
				"videoUrl": "/video/tao.mp4",
				"streaming": true
			},
			{
					"name": "Hyde",
				"slug": "hyde",
				"rating": 3.45,
				"imageUrl": "/images/clubs/hyde.jpg",
				"videoUrl": "/video/hyde.mp4",
				"streaming": true
			},
			{
					"name": "Foundation Room",
				"slug": "foundation-room",
				"rating": 0,
				"imageUrl": "/images/clubs/foundation-room.jpg",
				"videoUrl": "/video/foundation-room.mp4",
				"streaming": false
			},
			{
					"name": "The Bank",
				"slug": "the-bank",
				"rating": 0,
				"imageUrl": "/images/clubs/the-bank.jpg",
				"videoUrl": "/video/the-bank.mp4",
				"streaming": false
			},
			{
					"name": "Xs",
				"slug": "xs",
				"rating": 0,
				"imageUrl": "/images/clubs/xs.jpg",
				"videoUrl": "/video/xs.mp4",
				"streaming": false
			},
			{
					"name": "Foxtail",
				"slug": "foxtail",
				"rating": 0,
				"imageUrl": "/images/clubs/foxtail.jpg",
				"videoUrl": "/video/foxtail.mp4",
				"streaming": false
			},
			{
					"name": "Marquee",
				"slug": "marquee",
				"rating": 4.3,
				"imageUrl": "/images/clubs/marquee.jpg",
				"videoUrl": "/video/marquee.mp4",
				"streaming": true
			}
		]
}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}
export default reduxCreateStore(reducer);