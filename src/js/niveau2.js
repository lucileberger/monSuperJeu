export default class niveau2 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau2" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("image_fond", "src/assets/IMAGE9.png");
    this.load.image("Réponse1", "src/assets/19.png");
    this.load.image("Réponse2", "src/assets/Chiffre15.png");
    this.load.image("Réponse3", "src/assets/4.png");
   
    this.load.image("2vert","src/assets/2vert.png")

   
  }

  create() {
   
  
    this.add.image(500, 600, "image_fond");
  
    
    // Ajouter le texte de l'énigme avec la police Gabriolat

    this.add.text(300, 70, "Les neuf Jetons", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(60, 220, "Énoncé de l’énigme :\n \nNeuf jetons numérotés de 1 à 9 sont placés sur une grille carrée comme sur la figure.\nTu dois enlever trois jetons pour qu’il reste\n deux jetons dans chaque rangée et deux jetons dans chaque colonne.\nEnsuite, additionne les nombres écrits sur les trois jetons qu’il a enlevés.", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "26pt"
    });

    this.add.text(60, 800, "A vous de résoudre cette énigme pour obtenir un indice :", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt",
     
    });

    this.add.text(270, 750, "Quel est le plus grand résultat que l’on peut obtenir ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "22pt"
    });

    

    var bouton_play1 = this.add.image(800, 815, "2vert").setDepth(1).setDisplaySize(55, 55);
bouton_play1.setInteractive();
bouton_play1.setVisible(false);
bouton_play1.on("pointerup", () => {

  this.scene.switch("selection");

});

    var bouton_play = this.add.image(200, 950, "Réponse1").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        bouton_play1.setVisible(true);
      
      });



      var bouton_play = this.add.image(400, 950, "Réponse2").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(600, 950, "Réponse3").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

     






  }

  update() {
    
  }
}

