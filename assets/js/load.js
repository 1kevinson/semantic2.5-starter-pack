/** @format */

class Loader {
  static header = document.getElementById('loaded-header');
  static loadHeader() {
    this.header.innerHTML = ` <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Home - 1kevinson</title>

      <!-- Styles -->
      <link rel="stylesheet" href="../../public/build/css/style.css" />
      <link
        rel="stylesheet"
        href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
      />
      <link
        rel="stylesheet"
        href="../../node_modules/@fortawesome/fontawesome-free/css/all.css"
      />

     <!-- Js and jQuery -->
     <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
     <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
     <script src="assets/js/codes.js" defer></script>
    </head>`;
  }
}

Loader.loadHeader();
