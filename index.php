<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>php-ajax-dischi</title>
    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
  </head>
  <body>
    <header>
      <div class="centratura">
        <div class="logo">
          <a href="#">
            <img src="img/logo-small.svg" alt="">
          </a>
        </div>
      </div>
    </header>
    <!-- BLOCCO MAIN -->
    <main>
      <!-- BLOCCO COLONNA DI DESTRA -->
      <div class="contenitore">
        <!-- BLOCCO BRANI -->
        <section id="brani" class="centratura">
          <div class="layout-img">
          <?php
            include __DIR__ . "./partials/var.php";

            // var_dump ($data);

            foreach ($data as $value) {
                foreach ($value as $element) {

                  echo '<div class="album">
                            <div class="album-img">
                              <a href="#">
                                <img src="' . $element['poster'] .'" alt="">
                              </a>
                              <i class="far fa-play-circle"></i>
                            </div>
                            <a href="#"><strong>'. $element["title"] . '</strong></a>
                            <p>' . $element["author"] . '</p>

                            <p>' . $element["year"] . '</p>
                        </div>';
              }
            }

          ?>
          </div>
        </section>

      </div>

    </main>

  </body>
</html>
