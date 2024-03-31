const lab18 = require('./lab18');

describe("Lab 18", () => {
    let bat = makeCity("Bathurst", 11900);
    let mir = makeCity("Miramichi", 17500);
    test('check for city variables', () => {
        expect(bat.name).toBe("Bathurst")
        expect(bat.population).toBe(11900)
    });
    let graph = makeMap();
	graph.addConnection(bat, mir, 75.9)
    test('check for map variables', () => {
        expect(graph.printMap()).toContain("Bathurst");
        expect(graph.printMap()).toContain("Miramichi");
        expect(graph.printMap()).toContain("(75.9km)");
        expect(graph.adjacencyList[0]).toContainEqual(bat)
        expect(graph.adjacencyList[1][1]).toContain(bat)
        expect(graph.adjacencyList[1][2]).toContain(75.9)
    });
    let edm = makeCity("Edmundston", 16500);
    graph.addConnection(bat, edm, 348)
    test('check for new map additions', () => {
        expect(graph.printMap()).toContain("Bathurst");
        expect(graph.printMap()).toContain("Miramichi");
        expect(graph.printMap()).toContain("Edmundston");
    });
    test('check for proper output', () => {
        expect(begin()).toContain("Bathurst\n\tMiramichi (75.9km)\n\tEdmundston (248km)\n\tCampbellton (108km)");
        expect(begin()).toContain("Miramichi\n\tBathurst (75.9km)");
        expect(begin()).toContain("Edmundston\n\tBathurst (248km)\n\tCampbellton (200km)");
        expect(begin()).toContain("Campbellton\n\tBathurst (108km)\n\tEdmundston (200km)");
        expect(begin()).not.toContain("Campbellton\n\Miramichi (108km)\n\tEdmundston (200km)");
    });
});