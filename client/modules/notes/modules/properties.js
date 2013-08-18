Cat.define('feature', function(context, options) {
	
    /* Meteor.subscribe( 'features', {
			onError: function(e){
				throw 'No collection with name "features" on server side.';
			}
	});
	var Features = new Meteor.Collection('features');*/
	
	var Features = Collections.get("features");
	
	var SelectedFeature = {
		keys: {},
		deps: {},
		getId: function(){
			this.ensureDeps('id');
			this.deps['id'].depend();
			return this.keys['id'];
		},
		setId: function(id){
			this.ensureDeps('id');
			this.keys['id'] = id;
			this.deps['id'].changed();
		},
		ensureDeps: function (key) {
		  if (!this.deps[key])
		    this.deps[key] = new Deps.Dependency;
		}
	};
	
	Template.properties.helpers({
		feature: function(){
			var featureId = SelectedFeature.getId();
			var feature = Features.findOne({_id:featureId});
			if ( feature  )
				feature.icon = options.icons( feature.properties );
			return feature;
		}
	});
	
	
	return {
	
		show: function(featureId){
			SelectedFeature.setId(featureId );
			context.trigger('change', featureId);
		}
	
	};
});