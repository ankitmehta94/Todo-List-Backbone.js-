//   To do app.js
var app=app||{};
app.Todo = Backbone.Model.extend({
	defaults: {
		title:'',
		completed:false,
	},
	toogle :function(){
	this.save({
		completed:!this.get('completed')
		});
	}

	});
