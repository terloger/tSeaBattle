var DIRECTION = {
		vertical: 'v',
		horizontal: 'h'
	};

function GameField() {
	this.dimension = {
		x: 25,
		y: 25
	};
}

GameField.prototype.render = function(container) {
	
};

function Ship() {
	this.size = 1;
	this.direction = DIRECTION.horizontal;
	this.startPoint = {
		x: 1,
		y: 1
	};
}

var tSeaBattle = (function() {
	
	return {
		init: function() {
			
		}
	}
})();

$(tSeaBattle.init);