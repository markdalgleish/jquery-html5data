$(function(){
	var $parse = $('#parse'),
		$multi = $('.multi');

	test('String', function() {
		equals($parse.html5data('string').value, 'string', '"string", "string"');
	});

	test('Booleans', function() { 
		var trueData = $parse.html5data('true'),
			falseData = $parse.html5data('false');
		
		equals(trueData.lowercase, true, '"true"');
		equals(trueData.mixedCase, true, '"True"');
		equals(trueData.upperCase, true, '"TRUE"');
		
		equals(falseData.lowercase, false, '"false"');
		equals(falseData.mixedCase, false, '"False"');
		equals(falseData.upperCase, false, '"FALSE"');
	});
	
	test('Nulls', function() {
		var data = $parse.html5data('null');
		
		equals(data.lowercase, null, '"null"');
		equals(data.mixedCase, null, '"Null"');
		equals(data.upperCase, null, '"NULL"');
	});
	
	test('Numbers', function() {
		var data = $parse.html5data('number');
		
		equals(data.positiveInteger, 10, '"10"');
		equals(data.negativeInteger, -10, '"-10"');
		equals(data.positiveDecimal, 10.123, '"10.123"');
		equals(data.negativeDecimal, -10.123, '"-10.123"');
	});
	
	test('JSON', function() {
		var data = $parse.html5data('json');
		
		equals(data.object.key, 'value', '({key:"value"}).key');
		equals(data.array[1], true, '[true,true,true][1]');
	});
	
	test('Custom parsing function', function() {
		equals($parse.html5data('custom', {
				parse: function(val){
					return val === 'parse this string as true';
				}
			}).parse, true, '"parse this string as true"');
	});
	
	test('Parsing functions disabled through settings', function() {
		var data = $parse.html5data('disabled', {
			parseBooleans: false,
			parseNulls: false,
			parseNumbers: false
		});
		
		equals(data.booleans, 'true', '"true"');
		equals(data.nulls, 'null', '"null"');
		equals(data.numbers, '10', '"10"');
	});
	
	test('Selectors with multiple elements', function() {
		var data = $multi.html5data('test');
		
		equals($.isArray(data), true, "$.isArray(data)");
		equals(data[0].value, true, "data[0].value");
	});
	
	test('$.html5data() static method', function() {
		equals($.html5data('#parse', 'static').value, true, "$.html5data('#parse', 'static').value");
	});
});