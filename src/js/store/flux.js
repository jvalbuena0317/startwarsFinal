const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://www.swapi.tech/api/",
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],

		},
		actions: {


			getApiPeople: async () => {
				const store = getStore();
				const localPeople = localStorage.getItem("people")
				if (localPeople) {
					setStore({ people: JSON.parse(localPeople) });
					return;
				}
				const response = await fetch(`${store.apiURL}people`);
				const dataPeople = await response.json();
				let peopleStore = [];

				for (let item of dataPeople.results) {
					const itemResponse = await fetch(item.url);
					const itemData = await itemResponse.json();

					peopleStore.push(itemData.result)
				}

				localStorage.setItem("people", JSON.stringify(peopleStore))

				setStore({ people: peopleStore });
			},

			getApiPlanets: async () => {
				const store = getStore();
				const localPlanets = localStorage.getItem("planets")
				if (localPlanets) {
					setStore({ planets: JSON.parse(localPlanets) });
					return;
				}
				const response = await fetch(`${store.apiURL}planets`);
				const dataPlanets = await response.json();
				let planetsStore = [];

				for (let item of dataPlanets.results) {
					const itemResponse = await fetch(item.url);
					const itemData = await itemResponse.json();
					console.log(itemData);
					planetsStore.push(itemData.result)
				}

				localStorage.setItem("planet", JSON.stringify(planetsStore))

				setStore({ planets: planetsStore });
			},

			getApiVehicles: async () => {
				const store = getStore();
				const localVehicles = localStorage.getItem("vehicles")
				if (localVehicles) {
					setStore({ vehicles: JSON.parse(localVehicles) });
					return;
				}
				const response = await fetch(`${store.apiURL}vehicles`);
				const dataVehicles = await response.json();
				let vehiclesStore = [];

				for (let item of dataVehicles.results) {
					const itemResponse = await fetch(item.url);
					const itemData = await itemResponse.json();
					console.log(itemData);
					vehiclesStore.push(itemData.result)
				}

				localStorage.setItem("vehicles", JSON.stringify(vehiclesStore))

				setStore({ vehicles: vehiclesStore });
			},
			addToFavorites: (fav) => {
				let store = getStore()
				let exists = store.favorites.some((item) => item._id == fav._id)
				if (exists) {
					//eliminarlos
					let newArr = store.favorites.filter((item) => item._id != fav._id)
					setStore({
						favorites: newArr
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},
			deleteFav: (favId) => {
				let store = getStore()
				//eliminarlos
				let newArr = store.favorites.filter((item) => item._id != favId)
				setStore({
					favorites: newArr
				})
			}


		}
	};
};

export default getState;
