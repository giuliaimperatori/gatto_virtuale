let capture;
let detector;
let house;
let cat_sitting;
let cat_looking_right;
let cat_looking_left;
let cat_looking_up;
let cat_with_hearts;
let box;
let cat_head;
let bowl;
let cat_eating;
let ball_wool;
let cat_playing;
let hand;
let myXA;
let myYA;
let mensole_1
let mensole_2
let flag = 0;

const houseX = 0
const houseY = 0
const houseW = 2048
const houseH = 1280

const mensole_1X = 25
const mensole_1Y = 500
const mensole_1W = 300
const mensole_1H = 164

const mensole_2X = 1690
const mensole_2Y = 280
const mensole_2W = 300
const mensole_2H = 524

const catX = 700 
const catY = 920 
const catW = 102 
const catH = 184 

const boxX = 1400
const boxY = 920
const boxW = 320
const boxH = 159

const foodX = 150
const foodY = 560
const foodW = 53
const foodH = 65

const ball_woolX = 220
const ball_woolY = 485
const ball_woolW = 50
const ball_woolH = 38


async function preload() {
  house = loadImage("./assets/img/house.png");
  cat_sitting = loadImage("./assets/img/cat_sitting.png");
  cat_looking_right = loadImage("./assets/img/cat_looking_right.png")
  cat_looking_left = loadImage("./assets/img/cat_looking_left.png")
  cat_looking_up = loadImage("./assets/img/cat_looking_up.png")
  cat_with_hearts = loadImage("./assets/img/cat_with_hearts.png")
  box = loadImage("./assets/img/scatola.png")
  cat_head = loadImage("./assets/img/cat_head.png")
  food = loadImage("./assets/img/cibo.png")
  bowl = loadImage("./assets/img/ciotola.png")
  cat_eating = loadImage ("./assets/img/cat_eating.png")
  ball_wool = loadImage ("./assets/img/gomitolo.png")
  cat_playing = loadImage ("./assets/img/cat_playing.png")
  hand = loadImage("./assets/img/hand.png")
  mensole_1 = loadImage("./assets/img/mensole_01.png")
  mensole_2 = loadImage("./assets/img/mensole_02.png")


}


async function setup() {
	createCanvas(windowWidth, windowHeight)
	fullscreen(true)
	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()

	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

async function draw() {	
	

	//scale(-1, 1)
	//push()
	//scale(-1, 1)
	//image(capture, -640, 0)
	//pop()

	push()
	image (house, houseX, houseY);
	image (mensole_1, mensole_1X, mensole_1Y)
	image (mensole_2, mensole_2X, mensole_2Y)
	image (food, foodX, foodY);
	image (ball_wool, ball_woolX, ball_woolY);
	image (box, boxX, boxY);
	pop()



	
	if (detector && capture.loadedmetadata) {
		
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })
		
		if (hands.length == 1) {
			
			const mano = hands[0]
			
            const indice = mano.keypoints[8]
			

			push()
			image (hand, myXA, myYA);
			pop()
			
			myXA = map(indice.x - 34, 0,640,0,windowWidth)
        	myYA = map(indice.y - 40, 0,480,0,windowHeight)


			//let indice.x = map(indice, 0, capture.width, 0, windowWidth)
			//let indice.y = map(indice, 0, capture.height, 0, windowHeight)
			//console.log(indice.x, indice.y)


			//se indice su gomitolo disegna gatto che gioca
			if (myXA > ball_woolX && myXA < ball_woolX + ball_woolW && myYA > ball_woolY && myYA < ball_woolY + ball_woolH) {
				cat_image = image (cat_playing, 620, 970)
			
			}
			//se inidce su cibo disegna gatto che mangia dalla ciotola
			else if (myXA > foodX && myXA < foodX + foodW && myYA > foodY && myYA < foodY + foodH) {
				cat_image = image (cat_eating, 460, 950)
				cat_image = image (bowl, 440, 1040)
			}
			//se indice su scatolone disegna gatto dentro scatola
			else if (myXA > boxX && myXA < boxX + boxW && myYA > boxY && myYA < boxY + boxH) {
				cat_image = image (cat_head, boxX+80, boxY-12)
				image (hand, myXA, myYA);

			} 
			//se indice da altre parti disegna gatto al centro della stanza
			else {
				cat_image = cat_sitting
				// se indice su gatto disegna cuoricini
				if (myXA > catX && myXA < catX + catW && myYA > catY && myYA < catY + catH) {
					cat_image = cat_with_hearts
					flag = 1
				} 
				//se indice a sinistra del gatto, guarda a sinistra
				else if (myXA < width/3){
					cat_image = cat_looking_left
				}
				//se indice al centro della stanza gatto guarda dritto
				else if (myXA > width/3 && myXA < width/3*2) {
					cat_image = cat_sitting
				} 
				//se inidce a destra il gatto guarda a destra
				else {
					cat_image = cat_looking_right
				}
				//se indice in alto, gatto guarda su
				if (myYA < height/2)
				cat_image = cat_looking_up

				
			}

			//const larghezza = min(width, height)
			//const altezza = larghezza / 3.5

			// Disegna la webcam sullo stage, a specchio
			//push()
			//scale(-1, 1)
			//image(capture, -640, 0)
			//pop()

			image (cat_image, catX, catY);
			if(flag == 1){
				image (hand, myXA, myYA);
				flag = 0
			}
		}else{
			cat_image = cat_sitting
			image (cat_image, catX, catY);
		}
	}
}



async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}