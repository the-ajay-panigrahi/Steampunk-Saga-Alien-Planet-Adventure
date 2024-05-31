window.addEventListener(
  "load",
  function () {
    // canvas setup
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 500;

    class InputHandler {
      // will keep track of specified user inputs(arrow  keys).
    }

    class Projectile {
      // will handle player lasers.
    }

    class Particle {
      // will deal with falling screws, corks and bolts that come from damaged enemies.
    }

    class Player {
      // will control the main character, it will animate player spreadsheet and so on.
    }

    class Enemy {
      // will be the main blueprint handling many different enemy types later.
    }

    class Layer {
      // will handle individual background layers in our parallax, seamlessly scrolling, multilayered background.
    }

    class Background {
      // will pull all layer objects together to animate the entire game.
    }

    class Ui {
      // will draw score, timer and other information that needs to be displayed for the user.
    }

    class Game {
      // all logic will come together.
    }
  }
);
