SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 3: Manipolazione

# Gatto_virtuale
Autrice: Giulia Imperatori  
[MediaPipe demo-ES6] https://giuliaimperatori.github.io/Gatto_matto_marionetta/


## Introduzione e tema
Lo scopo di questo progetto è quello di poter interagire con un interfaccia, attraverso l'uso delle mani. Nel mio caso, ho realizzato un mini gioco in cui è possibile interagire con un gatto virtuale attraverso la posizione dell'indice sullo schermo, il quale è rappresentato da una mano, per poter capire dove si trova il dito sullo schermo.


## Riferimenti progettuali
Dolor sit amet consectetur adipiscing elit duis tristique. Sociis natoque penatibus et magnis dis parturient montes nascetur. Est sit amet facilisis magna. Tellus rutrum tellus pellentesque eu. Dictum sit amet justo donec enim. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Dolor magna eget est lorem ipsum dolor. Sit amet mattis vulputate enim nulla. Elit pellentesque habitant morbi tristique senectus et. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.


https://


## Design dell’interfraccia e modalià di interazione
Facilisis magna etiam tempor orci eu. Felis donec et odio pellentesque diam volutpat commodo. Dis parturient montes nascetur ridiculus mus mauris vitae. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Accumsan sit amet nulla facilisi. Ultricies leo integer malesuada nunc vel risus. Est lorem ipsum dolor sit. Ultrices neque ornare aenean euismod elementum nisi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu dictum varius duis at consectetur lorem donec massa sapien. Pellentesque habitant morbi tristique senectus. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eros donec ac odio tempor orci. Pellentesque id nibh tortor id aliquet lectus. Risus feugiat in ante metus dictum at. Quam pellentesque nec nam aliquam sem et tortor consequat id. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet dictum sit amet justo donec enim.



## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.

      const distPolliceMignoloX = abs(pollice.x - mignolo.x);
			const distPolliceMignoloY = abs(pollice.y - mignolo.y);
			const boccaWidth = distPolliceMignoloX * 2;
			const boccaHeight = distPolliceMignoloY * 2;
			image(bocca, mignolo.x - distPolliceMignoloX, mignolo.y - distPolliceMignoloY, boccaWidth, boccaHeight);
			const distAnulareIndice = dist(anulare.x, anulare.y, indice.x, indice.y);
      
      push()
			if (distAnulareIndice > 100) {
				image(occhiodx, anulare.x-20, anulare.y-20);
			} else {
				image(occhiodxchiuso, anulare.x-20, anulare.y-20)
			}
			pop()
			console.log(distAnulareIndice)


## Target e contesto d’uso
Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.

[<img src="immagini-video/immagine_01.png" width="300" alt="immagine_01">]()
[<img src="immagini-video/immagine_02.png" width="300" alt="immagine_02">]()
[<img src="immagini-video/immagine_03.png" width="300" alt="immagine_03">]()
[<img src="immagini-video/immagine_04.png" width="300" alt="immagine_02">]()
[<img src="immagini-video/immagine_05.png" width="300" alt="immagine_03">]()




https://github.com/giuliaimperatori/gatto_virtuale/assets/126774277/8cbf9fd8-2180-4d5e-a9aa-45173857d398



