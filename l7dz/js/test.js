describe('each', function(){

	it('функции each', function(){
		assert(each(arr, myFunc));
	});

	it('проверяем на тип данных функции each - object', function(){
		assert.isObject(each(arr, myFunc), 'Object');
	});

	it('проверяем на тип данных функции each.lenhth - object', function(){
		assert.isObject(each(arr, myFunc).length, 'Object');
	});

	it('проверяем на тип данных функции each - array', function(){
		assert.isArray(each(arr, myFunc), 'array');
	});

	it('проверяем на тип данных функции each.lenhth - number', function(){
		assert.isNumber(each(arr, myFunc).length, 'number');
	});
});