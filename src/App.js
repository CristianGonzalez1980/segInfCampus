import logo from './logo.svg';
//import './App.css';
import './all.css'

function App() {
  return (
    <div className="Campus UNQ">
      <body id="page-login-index" class="format-site  path-login gecko dir-ltr lang-es yui-skin-sam yui3-skin-sam presencial-uvq-edu-ar pagelayout-login course-1 context-1 notloggedin " >
      <section id="region-main" class="col-12" aria-label="Contenido">
        <span class="notifications" id="user-notifications"></span>
        <div role="main"><span id="maincontent"></span><div class="my-1 my-sm-5"></div>
          <div class="row justify-content-center">
            <div class="col-xl-6 col-sm-8 ">
              <div class="card">
                <div class="card-block">
                  <h2 class="card-header text-center">Campus UNQ</h2>
                  <div class="card-body">
                    <div class="row justify-content-md-center">
                      <div class="col-md-5">
                        <form class="mt-3" action="https://presencial.uvq.edu.ar/login/index.php" method="post" id="login">
                          <input id="anchor" type="hidden" name="anchor" value="" />
                          <script>document.getElementById('anchor').value = location.hash;</script>
                          <input type="hidden" name="logintoken" value="ElixOZBq3KfbaqRUTsFgNGtIPuVxB1ad" />
                          <div class="form-group">
                            <label for="username" class="sr-only">
                              Nombre de usuario
                            </label>
                            <input type="text" name="username" id="username"
                              class="form-control"
                              value=""
                              placeholder="Nombre de usuario"
                              autocomplete="username" />
                          </div>
                          <div class="form-group">
                            <label for="password" class="sr-only">Contraseña</label>
                            <input type="password" name="password" id="password" value=""
                              class="form-control"
                              placeholder="Contraseña"
                              autocomplete="current-password" />
                          </div>
                          <div class="rememberpass mt-3">
                            <input type="checkbox" name="rememberusername" id="rememberusername" value="1" />
                            <label for="rememberusername">Recordar nombre de usuario</label>
                          </div>

                          <button type="submit" class="btn btn-primary btn-block mt-3" id="loginbtn">Acceder</button>
                        </form>
                      </div>

                      <div class="col-md-5">
                        <div class="forgetpass mt-3">
                          <p><a href="https://accesopresencial.uvq.edu.ar">¿Olvidó su nombre de usuario o contraseña?</a></p>
                        </div>
                        <div class="mt-3">
                          Las 'Cookies' deben estar habilitadas en su navegador
                        <a class="btn btn-link p-0" role="button"
                            data-container="body" data-toggle="popover"
                            data-placement="right" data-content="&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;Este sitio utiliza dos &quot;cookies&quot;:&lt;/p&gt;

&lt;p&gt;La cookie esencial es la de sesión, normalmente llamada MoodleSession.
Debe permitir que su navegador la acepte para poder mantener el servicio
funcionando mientras navega el sitio. Cuando sale de la plataforma o cierra su navegador la &#039;cookie&#039; se destruye (en su navegador y en el servidor).&lt;/p&gt;

&lt;p&gt;La otra &#039;cookie&#039;, normalmente llamada MOODLEID o similar, es para su comodidad. Se limita a recordar su nombre de usuario dentro del navegador. Esto significa que cuando regresa al sitio, se escribirá automáticamente su nombre en el campo nombre de usuario
Si desea mayor seguridad no utilice esta opción: sólo tendrá que escribir su nombre manualmente cada vez que quiera iniciar sesión.&lt;/p&gt;
&lt;/div&gt; "
                            data-html="true" tabindex="0" data-trigger="focus">
                            <i className="icon fa fa-question-circle text-info fa-fw " title="Ayuda con Las &#039;Cookies&#039; deben estar habilitadas en su navegador" aria-label="Ayuda con Las &#039;Cookies&#039; deben estar habilitadas en su navegador"></i>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </section>
      </body>
      <footer id="page-footer" class="py-3 bg-dark text-light">
        <div class="container">
          <div id="course-footer"></div>
          <div class="logininfo">Usted no se ha identificado.</div>
          <div class="homelink"><a href="https://presencial.uvq.edu.ar/">Página Principal</a></div>
          <div class="tool_dataprivacy"><a href="https://presencial.uvq.edu.ar/admin/tool/dataprivacy/summary.php">Resumen de retención de datos</a></div><a href="https://download.moodle.org/mobile?version=2020061501.12&amp;lang=es&amp;iosappid=633359593&amp;androidappid=com.moodle.moodlemobile">Descargar la app para dispositivos móviles</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
