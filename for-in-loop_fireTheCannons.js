// For-In-Loop_fireTheCannons

var a = {
		'Mike': 'aye',
		'Joe': 'aye',
		'Johnson': 'aye',
		'Peter': 'aye'
	},
	b = {
		'Mike': 'aye',
		'Joe': 'nay',
		'Johnson': 'aye',
		'Peter': 'aye'
	};


// my solution
const cannonsReady1 = ( gunners ) => {
	for ( let res in gunners ) {
		if ( !gunners.hasOwnProperty( res ) ) { continue; }
		if ( gunners[ res ] === 'nay' ) {
			return 'Shiver me timbers!';
		}
	}
	return 'Fire!';
};


// second solution
const cannonsReady2 = ( gunners ) => {
	return Object.values( gunners ).some( m => m === 'nay' ) ? 'Shiver me timbers!' : 'Fire!';
};


// third solution
const cannonsReady3 = a => Object.keys( a ).every( g => a[ g ] === "aye" ) ? "Fire!" : "Shiver me timbers!";


// fouth solution
const cannonsReady4 = ( gunners ) => {
	console.log( gunners );
	var arr = Object.keys( gunners ),
		count = 0;
	for ( var i = 0; i < arr.length; i++ )
		if ( gunners[ arr[ i ] ] == 'aye' ) count++;

	return count == arr.length ? 'Fire!' : 'Shiver me timbers!';
};


// fifth soluion
const cannonsReady5 = (gunners) => {
  const ready = Object.keys(gunners).filter((gunner) => {
    if(gunners[gunner] === "aye"){
      return true;
    }
  });
  console.log(ready);
  return ready.length === Object.keys(gunners).length ? "Fire!" : "Shiver me timbers!";
};
