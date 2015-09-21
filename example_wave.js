wave.route('GET', '/', 'index.wave', function() {
	return {};
});

wave.route('GET', '/user/:user_name', 'users.wave', function() {

	var data = {
			'ahmad': {
				title: "Ahmad",
				supplies: [ 'Ahmad1', 'Ahmad2']
			},
			'hassan': {
				title: "Hassan",
				supplies: [ 'Hassan1', 'Hassan2']
			}
		};
	Template.main.title = data[wave.query.user_name].title;
	Template.main.supplies = data[wave.query.user_name].supplies;
});



var posts = wave.db.register("posts");


wave.route('GET', '/form', 'form.wave', function() {
	Template.main.List = {};
	Template.main.List.form_array = function() {
		return posts.get();
	};

	Template.main.registered = "Registered Users: ";
});



wave.route('GET', '/functions', 'functions.wave', function() {
	Template.main.sd = [1, 2, 3, 4];
	Template.main.id = "welcome";
});



wave.route('POST', '/form_post', 'form_post.wave', function(msg_body) {
	if(msg_body) {
		posts.insert({
			email: msg_body['email'],
			name: msg_body['name'],
			created: new Date
		});

		Template.main.posted_name = msg_body['name'],
		Template.main.posted_email = msg_body['email'],
		Template.main.posted_created = new Date();
	}

});
