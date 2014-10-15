function getStreamgraphSettings()
{
    var s = new Settings();
    s.show_settings = true;
    s.show_legend = false;
    
    s.colors.background = 200;
    s.colors.neutral = 100;
    s.colors.highlight = 0;
    
    // Change the color source used for the LastFm color picker.
    s.colors.image = "../deps/layers";
    return s;
}

function getStreamgraphData()
{
	[[1.3333333333333333,11.5,12.416666666666666,12.916666666666666,13.0,3.5,0.0,0.0,0.0,0.0,1.0,1.0,2.0,6.25,15.5,16.5,12.75,10.5,0.0,0.5,0.0,0.0,0.75,1.0,0.0,13.0,5.5,19.5,12.5,10.25,0.0,0.0,0.0,0.0,0.0,0.0,2.5,7.0,15.75,20.75,15.25,7.0,0.0,0.0,0.0,0.0,0.0,0.0,1.25,0.0,13.5,0.0,10.0,8.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,6.0,0.0,0.0,0.0,0.0,0.0,1.75,1.0,0.0,1.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,1.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.6056666666666667,20.5,0.0,0.0,0.0,0.0,0.8416666666666667,0.0,0.0,0.0,9.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,8.5,4.0,0.0,0.0,0.0,0.0,0.0,0.8333333333333334,17.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,7.0,9.0,6.75,7.0,4.5,5.0,3.25,1.0,3.0,2.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,5.75,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[1.6666666666666665,4.333333333333333,1.5,3.0,6.5,10.5,12.583333333333334,10.5,9.0,13.166666666666668,4.5,11.0,12.416666666666666,0.0,1.5,0.0,0.0,4.583333333333333,11.250000000000002,8.75,10.25,18.5,5.5,10.416666666666668,10.525,1.5,0.0,1.0,0.0,9.666666666666666,8.0,12.75,12.5,14.083333333333334,10.5,15.0,11.75,0.0,2.75,1.75,1.0,3.5,6.0,6.0,9.0,11.25,6.5,10.5,4.5,3.0,0.0,0.0,0.0,3.0,1.5],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[2.0,3.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,2.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,3.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,5.166666666666667,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.086111111111111,1.8974999999999997,0.0,0.0,0.0,0.3208333333333333,0.5591666666666667,0.0,0.3361111111111111,2.164722222222222,0.6844444444444444,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[3.80875,4.89325,5.412222222222222,6.517500000000001,3.7268333333333326,4.144888888888889,1.417361111111111,6.354666666666667,0.0,0.16666666666666666,0.0,0.43194444444444446,0.3,0.9719166666666667,0.0,0.0,3.7595555555555555,0.0,0.0,0.8163888888888889,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.9033333333333333,0.0,0.0,2.6366666666666667,0.0,0.5,0.0,0.0,0.43333333333333335,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,6.0,7.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.0,2.5,0.0,1.5,0.0,0.0,0.0,0.0,0.0,0.0,0.0,2.013888888888889,6.75,6.0,6.5,6.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.5977777777777777,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.3333333333333333,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
	[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.75,0.0,4.0,0.0,0.0,0.5833333333333334,6.833333333333333,0.0,0.0,0.0,0.0,0.0,1.0,2.0,8.166666666666668,2.5,0.0,0.0,0.0,0.75,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,1.0,8.416666666666668,8.666666666666668,9.916666666666666,2.0833333333333335,0.8333333333333334,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]];
}

function getStreamgraphLabels()
{
    return 	['Baseball',
	'Basketball',
	'Bike',
	'Climbing',
	'CrossFit',
	'Golf',
	'Ice Hockey',
	'Kayaking',
	'Kickball',
	'Other',
	'P90x',
	'Rowing',
	'Run',
	'Sailing',
	'Skiing',
	'Snow Shoing',
	'Weights'];
}