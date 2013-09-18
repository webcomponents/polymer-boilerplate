xtag.register('my-element', {
	lifecycle: {
		created: function() {
			this.innerHTML = 'Test';
		}
	}
});