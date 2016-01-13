window.onload = function() {
	var gameCanvas = document.getElementById('gameCanvas');
	gameCanvas.getContext('2d').oImageSmoothingEnabled = false;
	gameCanvas.getContext('2d').mozImageSmoothingEnabled = false;
	gameCanvas.getContext('2d').imageSmoothingEnabled = false;
	var gameContext = gameCanvas.getContext('2d');
/*
	var map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
*/

	var map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];



	var tile1 = new Image();
	tile1.src = "art/tile1.png";
	var tile2 = new Image();
	tile2.src = "art/tile2.png";
	var player = new Image();
	player.src = "art/tempplayer.png";
	var light = new Image();
	light.src = "art/light.png";

	function torchClass(x, y) {
		var rayResolution = 60;
		var self = this;
		var offset = 8; // for the view center line
		var posX = x;
		var posY = y;
		var viewDist = 64;
		var fov = 400; // degrees
		var angle = 0;
		
		this.draw = function() {
			gameContext.drawImage(light, 0, 0, 16, 16, posX, posY, 16, 16);
		}

		this.raycast = function() {
			var angleIteration = fov / rayResolution;
			var firstPoint = true;
			for (var i = 0; i < rayResolution; i++) { // iterate over each ray
				var fovAngle = (angle - (fov/2)) + (i*angleIteration);
				var rad = fovAngle / 57.2958;
				var viewEndX = Math.floor(Math.cos(rad) * viewDist);
				var viewEndY = Math.floor(Math.sin(rad) * viewDist);

				var rayDist = 0;
				var hit = false;
				while (!hit) {
					rayDist++;
					var viewEndX = Math.cos(rad) * rayDist;
					var viewEndY = Math.sin(rad) * rayDist;

					var testX = Math.floor((posX + viewEndX + offset)/16);
					var testY = Math.floor((posY + viewEndY + offset)/16);
					if (map[testX][testY] == 1 || 
							rayDist == viewDist || 
							testX < 0 || 
							testY < 0) {
						hit = true;
					}
				}

				if (firstPoint) {
					gameContext.moveTo(Math.floor(posX + offset),Math.floor(posY + offset));
					gameContext.lineTo(Math.floor(posX + viewEndX + offset), Math.floor(posY + viewEndY + offset));
					firstPoint = false;
				} else {
					gameContext.lineTo(Math.floor(posX + viewEndX + offset), Math.floor(posY + viewEndY + offset));
				}

				if (i == (rayResolution - 1)) {
					gameContext.lineTo(posX + offset,posY + offset);
				}
			}
		}
	}

	function playerClass() {
		var rayResolution = 320;
		var self = this;
		var offset = 8; // for the view center line
		var posX = 164;
		var posY = 32;
		var viewDist = 256;
		var fov = 120; // degrees
		var angle = 90; // viewing angle in degrees
		var speed = 0;
		var mPosX = 0;
		var mPosY = 0;
		var rayList = [];
		var mouseDistance = 0;

		this.draw = function() {
			//angle = Math.atan2(mPosY - posY, mPosX - posX) * 180 / Math.PI;
			//if (angle == 360) angle = 0;
			var rad = angle / 57.2958;
			var viewEndX = Math.cos(rad) * 16;
			var viewEndY = Math.sin(rad) * 16;
			gameContext.drawImage(player, 0, 0, 16, 16, posX, posY, 16, 16);

			// center line
			gameContext.beginPath();
				gameContext.moveTo(posX + offset,posY + offset);
				gameContext.lineTo(posX + viewEndX + offset, posY + viewEndY + offset);
			gameContext.stroke();
		}

		this.getRayList = function() {
			return rayList;
		}

		this.getSpeed = function() {
			return speed;
		}

		this.setSpeed = function(newSpeed) {
			speed = newSpeed;
		}

		this.getAngle = function() {
			return angle;
		}

		this.setAngle = function(newAngle) {
			angle = newAngle;
		}

		this.setMousePos = function(mx, my) {
			mouseDistance = Math.sqrt(Math.pow(Math.abs(mx - posX),2) + Math.pow(Math.abs(my - posY),2));
			//console.log(mouseDistance);
			if (mouseDistance > 2) {
				mPosX = mx;
				mPosY = my;
			} else {
				speed = 0;
			}
		}

		this.move = function() {
			var rad = angle / 57.2958;
			var tempPosX = posX;
			var tempPosY = posY;
			posX = (Math.cos(rad) * speed) + posX;
			posY = (Math.sin(rad) * speed) + posY;

			if (map[Math.floor(posX/16)][Math.floor(posY/16)] == 1 ||
				map[Math.floor((posX+16)/16)][Math.floor((posY+16)/16)] == 1 ||
				map[Math.floor((posX)/16)][Math.floor((posY+16)/16)] == 1 ||
				map[Math.floor((posX+16)/16)][Math.floor(posY/16)] == 1 ) {
				speed = 0;
				posX = tempPosX;
				posY = tempPosY;
			}
		}

		this.raycast = function() {
			//console.log(rayList);
			rayList = [];
			var angleIteration = fov / rayResolution;
			gameContext.beginPath();
			var firstPoint = true;
			for (var i = 0; i < rayResolution; i++) { // iterate over each ray
				var fovAngle = (angle - (fov/2)) + (i*angleIteration);
				var rad = fovAngle / 57.2958;
				var viewEndX = Math.floor(Math.cos(rad) * viewDist);
				var viewEndY = Math.floor(Math.sin(rad) * viewDist);

				var rayDist = 0;
				var hit = false;
				while (!hit) {
					rayDist++;
					var viewEndX = Math.cos(rad) * rayDist;
					var viewEndY = Math.sin(rad) * rayDist;

					var testX = Math.floor((posX + viewEndX + offset)/16);
					var testY = Math.floor((posY + viewEndY + offset)/16);
					if (map[testX][testY] == 1 || 
							rayDist == viewDist || 
							testX < 0 || 
							testY < 0) {
						// Add ray to list
						var noHit = false;
						var darker = false;
						if (map[testX][testY-1] == 0) {
							darker = true;
						}
						if (rayDist == viewDist) {
							noHit = true;
						}

						rayList.push({distance:rayDist, hit:noHit, dark:darker, angle: fovAngle});
						hit = true;
					}
				}

				if (firstPoint) {
					gameContext.moveTo(Math.floor(posX + offset),Math.floor(posY + offset));
					gameContext.lineTo(Math.floor(posX + viewEndX + offset), Math.floor(posY + viewEndY + offset));
					firstPoint = false;
				} else {
					gameContext.lineTo(Math.floor(posX + viewEndX + offset), Math.floor(posY + viewEndY + offset));
				}

				if (i == (rayResolution - 1)) {
					gameContext.lineTo(posX + offset,posY + offset);
				}
			}
			gameContext.closePath();
		}
	}

	function gameEngine() {
		var player = new playerClass();
		var self = this;
		var fps = 30;
		var friction = 0.1;

		var forwardMovement = false;
		var backwardsMovement = false;
		var leftMovement = false;
		var rightMovement = false;

		var mX = 0; // mousepos
		var mY = 0;

		this.gameLoop = function() {
			setTimeout( function() {
				self.update();
				self.render();
				requestAnimationFrame( self.gameLoop );
			}, 1000 / self.fps);
		}

		this.update = function() {
			/*
			if (forwardMovement) {
				if (player.getSpeed() < 3) {
	    			player.setSpeed(player.getSpeed() + 1);
    			}
		    	
			} else {
				if (player.getSpeed() > 0) {
					player.setSpeed(player.getSpeed() - friction);
				} else {
					player.setSpeed(0);
				}
			}
			*/
			if (forwardMovement) {
				player.setSpeed(1);
			} 
			if (backwardsMovement) {
				player.setSpeed(-1);
			} 
			if (!forwardMovement && !backwardsMovement) {
				player.setSpeed(0);
			}

			if (leftMovement) {
				var newAngle = player.getAngle() - 5;
				player.setAngle(newAngle);
			}

			if (rightMovement) {
				var newAngle = player.getAngle() + 5;
				player.setAngle(newAngle);
			}

			//player.setMousePos(mX, mY);
			//player.setMousePos(mX, mY);
			player.move();
		}

    	this.getMousePos = function(evt) {
    		var rect = gameCanvas.getBoundingClientRect();
	        mX = Math.floor(evt.clientX - rect.left);
	        mY = Math.floor(evt.clientY - rect.top);
	        //console.log("x : " + mX + " y: " + mY);
	      }

		this.checkKeyDown = function(e) {
		    var code = e.keyCode;
		    console.log(code);
		    switch(code) {
		    	case 87:
		    	case 38: // forwards
		    		forwardMovement = true;
		    		break;

				case 83:
		    	case 40: // forwards
		    		backwardsMovement = true;
		    		break;

		    	case 65: // left
		    	case 37: 
		    		leftMovement = true;
		    		break;

		    	case 68:
		    	case 39: 
		    		rightMovement = true;
		    		break;
		    }
		}

		this.checkKeyUp = function(e) {
		    var code = e.keyCode;
		    //console.log(code);
		    switch(code) {
		    	case 87:
		    	case 38: // forwards
		    		forwardMovement = false;
		    		break;

				case 83:
		    	case 40: // forwards
		    		backwardsMovement = false;
		    		break;

		    	case 65: // left
		    	case 37: 
		    		leftMovement = false;
		    		break;

		    	case 68:
		    	case 39: 
		    		rightMovement = false;
		    		break;
		    }
		}

		this.render = function() {
			gameContext.clearRect(0, 0, gameCanvas.width , gameCanvas.height);
			gameContext.fillStyle='#001A00';
			gameContext.fillRect(0, 0, gameCanvas.width , gameCanvas.height)

			gameContext.save();
			// Shadows
			gameContext.beginPath();
			player.raycast();
			//gameContext.clip();
			//torch.raycast();
			//torch2.raycast();
			gameContext.closePath();
			gameContext.clip();
			for (var i=0; i < 16; i++) {
				for (var j=0; j < 16; j++) {
					switch(map[i][j]) {
						case 0: 
							gameContext.drawImage(tile1, 0, 0, 16, 16, i*16, j*16, 16, 16);
							break;
					}
				}
			}
			// Post-Shadows
			
			gameContext.restore();
			
			for (var i=0; i < 16; i++) {
				for (var j=0; j < 16; j++) {
					switch(map[i][j]) {
						case 1: 
							gameContext.drawImage(tile2, 0, 0, 16, 16, i*16, j*16, 16, 16);
							break;
					}
				}
			}
			//torch.draw();
			//torch2.draw();
			player.draw();

			//frame
			gameContext.strokeStyle = 'rgb(0,255,0)';
			gameContext.beginPath();
				gameContext.rect(260, 10, 327, 10+226);
			gameContext.closePath();
			gameContext.stroke();
	
			// pseudo 3d
			var rayList = player.getRayList();
			var windowXOffset = 264;
			var windowYOffset = 64;
			for (var x = 0; x < 320; x++) {
				//gameContext.strokeStyle = '#00AA00';
				var yWallHeight = (32/rayList[x].distance)*64;
				gameContext.strokeStyle = 'rgb(0,' + parseInt(255 * (yWallHeight/128)) + ',0)';
				if (!rayList[x].hit) {
					gameContext.beginPath();
						gameContext.moveTo(windowXOffset + x, (64-(yWallHeight/2))+windowYOffset);
						gameContext.lineTo(windowXOffset + x, (64+(yWallHeight/2))+windowYOffset);
					gameContext.closePath();
					gameContext.stroke();
				}
			}
		}
	}

	// start game
	var game = new gameEngine();
	handleKeyDown = function() {
		console.log('asdf');
	}

	window.addEventListener('keydown',game.checkKeyDown,false);
	window.addEventListener('keyup',game.checkKeyUp,false);
	gameCanvas.addEventListener('mousemove', game.getMousePos, false);
	game.gameLoop();
}