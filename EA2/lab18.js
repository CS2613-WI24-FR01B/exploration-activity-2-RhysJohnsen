class City{
	constructor(name, population){
		this.name = name
		this.population = population
	}
	equals(other){
		if(this.name == other.name && this.population == other.population){
			return true
		}
		else{
			return false
		}
	}
}


class CityMap{

	constructor(){
		this.adjacencyList = [];
	}

	addConnection(startCity, endCity, dist){
		
		if(this.adjacencyList.length == 0){
			this.adjacencyList[0] = [startCity, [endCity], [dist]];
			this.adjacencyList[1] = [endCity, [startCity], [dist]];
		}
		else{
			
			let startCityFound = -1;
			for(let i = 0; i < this.adjacencyList.length; i++){
				if(this.adjacencyList[i][0].equals(startCity)){
					startCityFound = i;
					break;
				}
			}
			
			if(startCityFound >= 0){
				this.adjacencyList[startCityFound][1][this.adjacencyList[startCityFound][1].length] = endCity;
				this.adjacencyList[startCityFound][2][this.adjacencyList[startCityFound][2].length] = dist;
			}
			
			else{
				this.adjacencyList[this.adjacencyList.length] = [startCity, [endCity], [dist]];
			}

			let endCityFound = -1;
			for(let i = 0; i < this.adjacencyList.length; i++){
				if(this.adjacencyList[i][0].equals(endCity)){
					endCityFound = i;
					break;
				}
			}

			if(endCityFound >= 0){
				this.adjacencyList[endCityFound][1][this.adjacencyList[endCityFound][1].length] = startCity;
				this.adjacencyList[endCityFound][2][this.adjacencyList[endCityFound][2].length] = dist;
			}
			else{
				this.adjacencyList[this.adjacencyList.length] = [endCity, [startCity], [dist]];
			}

		}
	}

	printMap(){
		var returnString = ""
		for(let i = 0; i < this.adjacencyList.length; i++){
			returnString += this.adjacencyList[i][0].name + "\n";
			for(let j = 0; j < this.adjacencyList[i][1].length; j++){
				returnString += ("\t" + this.adjacencyList[i][1][j].name + " (" + this.adjacencyList[i][2][j] + "km)\n")
			}
		}
		return returnString
	}
	
}

let bat = new City("Bathurst", 11900);
let mir = new City("Miramichi", 17500);
let edm = new City("Edmundston", 16500);
let cam = new City("Campbellton", 6900);
let graph = new CityMap();

begin = function(){
	bat = new City("Bathurst", 11900);
	mir = new City("Miramichi", 17500);
	edm = new City("Edmundston", 16500);
	cam = new City("Campbellton", 6900);

	graph = new CityMap();
	graph.addConnection(bat, mir, 75.9)
	graph.addConnection(bat, edm, 248)
	graph.addConnection(bat, cam, 108)
	graph.addConnection(edm, cam, 200)

	return graph.printMap()
}

makeCity = function(name, pop){
	return new City(name, pop);
}

makeMap = function(){
	return new CityMap();
}

module.exports = begin
//console.log(begin())


