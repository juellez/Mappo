Mappo = {
	
	iconMap: function( node ){
									  if ( node.tourism === 'alpine_hut'){
										return 'hut.png';
									  } else if ( node.amenity === 'shelter'){
										return 'cabin-2.png';
									  } else if ( node.natural === 'peak' ){
										return 'mountains.png';
									  } else if ( node.mountain_pass === 'yes'){
										return 'mountain-pass.png';
								      } else if ( node.amenity === 'drinking_water'){
										return 'drinkingwater.png';
									  } else if ( node.tourism === 'viewpoint'){
										return 'beautifulview.png';
									  } else {
										return 'unknown.png';
									  }
								    }
	
};