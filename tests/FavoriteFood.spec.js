describe('Favorite Food Filter', function () {
	var $controller, FavoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	var mockedPeople = [{
		name: "Jimmy",
		favoriteFood: "Vegan Tacos"
	},
		{
			name: "Tina",
		favoriteFood: "Veggie Thai Curry"
	},
	{
		name: "Veronica",
		favoriteFood: "Seitan"
	}];

	beforeEach(inject(function ($filter) {
		FavoriteFood = $filter('favoriteFood')
	}));

	it('should return the name of person with passed in food ', function () {
		var results = $filter('favoriteFood')(mockedPeople, 'Vegan Tacos');

		expect(results.length).toEqual(1);
		expect(results[0].name).toEqual("Jimmy");
	});

});
