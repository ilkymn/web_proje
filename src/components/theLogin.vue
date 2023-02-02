<template>
  <eb-login class="ng-star-inserted"
    ><section class="login">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <cx-generic-link tabindex="0"
              ><a href="/login" class="ng-star-inserted"
                ><img
                  src="assets/images/logo.png"
                  alt="Ebebek Logo"
                  class="login__logo ng-star-inserted"
                /><!----></a
              ><!----><!----><!----></cx-generic-link
            >
          </div>
          <div class="col-12 mb-5">
            <container-element
              ><!----><!----><!----><!----><eb-login-username
                class="ng-star-inserted"
                ><div class="card">
                  <form
                    vnovalidate=""
                    class="ng-untouched ng-pristine ng-invalid ng-star-inserted"
                  >
                    <h1 class="title-primary text-center mb-5">Üyelik</h1>
                    <div class="tab">
                      <div class="tab-menu">
                        <a id="btnLoginWithPhoneNumber" class="active"
                          ><span class="login-phone-desktop"
                            >Telefon Numarası ile</span
                          ><span class="login-phone-mobile">Telefon</span></a
                        ><a id="btnLoginWithEmail" class=""
                          ><span class="login-email-desktop">Eposta ile</span
                          ><span class="login-email-mobile">Eposta</span></a
                        >
                      </div>
                      <div class="tab-content phone-content active">
                        <div class="row">
                          <div class="col-12 mb-3">
                            <div class="form-group">
                              <div class="ng-star-inserted">
                                <input
                                  id="txtPhoneNumberMobile"
                                  type="tel"
                                  formcontrolname="gsm"
                                  mask="00) 000 00 00"
                                  prefix="(5"
                                  class="
                                    input
                                    form-control
                                    ng-untouched ng-pristine ng-invalid
                                  "
                                  placeholder="Cep telefonu"
                                /><cx-form-errors
                                  aria-live="assertive"
                                  aria-atomic="true"
                                  class="control-invalid"
                                  ><p class="ng-star-inserted">
                                    Bu alan gereklidir.
                                  </p>
                                  <!----></cx-form-errors
                                >
                              </div>
                              <!----><!----><!---->
                            </div>
                          </div>
                          <div class="col-12">
                            <button id="btnSubmitLogin" type="submit" class="btn-link-second-menu d-block">
                              Giriş Yap / Üye Ol
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="splitter"><span>Ya da</span></div>
                    <eb-social-login
                      class="d-none d-lg-block"
                      _nghost-serverapp-c146=""
                      ><div
                        _ngcontent-serverapp-c146=""
                        class="d-none d-lg-block"
                      >
                        <h1
                          _ngcontent-serverapp-c146=""
                          class="title-second text-center mb-5"
                        >
                          Sosyal hesap ile giriş yap
                        </h1>
                        <p _ngcontent-serverapp-c146="" class="text-center">
                          ebebek’e şifresiz giriş yapabilmek için Google, Apple
                          veya Facebook hesabınızı bağlayabilirsiniz.
                        </p>
                        <ul _ngcontent-serverapp-c146="" class="social-list">
                          <li _ngcontent-serverapp-c146="">
                            <a
                              _ngcontent-serverapp-c146=""
                              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=146991261040-1bo78v5bbp5til1gdn8tjuv68md10hqb.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.e-bebek.com%2Fsocial-login&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;state=2&amp;response_type=token"
                              class="ng-star-inserted"
                              ><figure
                                _ngcontent-serverapp-c146=""
                                class="login-image"
                                style="background-position: -57px 0px"
                              ></figure></a
                            ><!---->
                          </li>
                          <li _ngcontent-serverapp-c146="">
                            <a
                              _ngcontent-serverapp-c146=""
                              href="https://www.facebook.com/v13.0/dialog/oauth?client_id=216008698845574&amp;redirect_uri=https%3A%2F%2Fwww.e-bebek.com%2Fsocial-login&amp;scope=email%2Cpublic_profile&amp;state=1&amp;response_type=token"
                              class="ng-star-inserted"
                              ><figure
                                _ngcontent-serverapp-c146=""
                                class="login-image"
                                style="background-position: -26px 0px"
                              ></figure></a
                            ><!---->
                          </li>
                        </ul>
                      </div>
                      <div
                        _ngcontent-serverapp-c146=""
                        id="accordionExample"
                        class="
                          d-lg-none d-block
                          accordion
                          social-accordion-mobile
                        "
                      >
                        <div
                          _ngcontent-serverapp-c146=""
                          class="accordion-item"
                        >
                          <h2
                            _ngcontent-serverapp-c146=""
                            id="headingOne"
                            class="accordion-header"
                          >
                            <button
                              _ngcontent-serverapp-c146=""
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              class="accordion-button collapsed"
                            >
                              <div
                                _ngcontent-serverapp-c146=""
                                class="d-flex flex-column"
                              >
                                <h1
                                  _ngcontent-serverapp-c146=""
                                  class="title-primary text-left mb-5"
                                >
                                  Sosyal hesap ile giriş yap
                                </h1>
                                <p _ngcontent-serverapp-c146="">
                                  ebebek’e şifresiz giriş yapabilmek için
                                  Google, Apple veya Facebook hesabınızı
                                  bağlayabilirsiniz.
                                </p>
                              </div>
                            </button>
                          </h2>
                          <div
                            _ngcontent-serverapp-c146=""
                            id="collapseOne"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                            class="accordion-collapse collapse"
                          >
                            <div
                              _ngcontent-serverapp-c146=""
                              class="accordion-body p-0"
                            >
                              <ul
                                _ngcontent-serverapp-c146=""
                                class="social-list"
                              >
                                <li _ngcontent-serverapp-c146="">
                                  <a _ngcontent-serverapp-c146="" href="#"
                                    ><figure
                                      _ngcontent-serverapp-c146=""
                                      class="login-image"
                                      style="background-position: -57px 0px"
                                    ></figure
                                  ></a>
                                </li>
                                <li _ngcontent-serverapp-c146="">
                                  <a _ngcontent-serverapp-c146="" href="#"
                                    ><figure
                                      _ngcontent-serverapp-c146=""
                                      class="login-image apple"
                                      style="background-position: 0px 0px"
                                    ></figure
                                  ></a>
                                </li>
                                <li _ngcontent-serverapp-c146="">
                                  <a _ngcontent-serverapp-c146="" href="#"
                                    ><figure
                                      _ngcontent-serverapp-c146=""
                                      class="login-image"
                                      style="background-position: -26px 0px"
                                    ></figure
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <eb-spinner
                        _ngcontent-serverapp-c146=""
                        _nghost-serverapp-c145=""
                        ><!----></eb-spinner
                      ></eb-social-login
                    >
                  </form>
                  <!---->
                </div>
                <eb-social-login
                  class="d-lg-none d-block"
                  _nghost-serverapp-c146=""
                  ><div _ngcontent-serverapp-c146="" class="d-none d-lg-block">
                    <h1
                      _ngcontent-serverapp-c146=""
                      class="title-second text-center mb-5"
                    >
                      Sosyal hesap ile giriş yap
                    </h1>
                    <p _ngcontent-serverapp-c146="" class="text-center">
                      ebebek’e şifresiz giriş yapabilmek için Google, Apple veya
                      Facebook hesabınızı bağlayabilirsiniz.
                    </p>
                    <ul _ngcontent-serverapp-c146="" class="social-list">
                      <li _ngcontent-serverapp-c146="">
                        <a
                          _ngcontent-serverapp-c146=""
                          href="https://accounts.google.com/o/oauth2/v2/auth?client_id=146991261040-1bo78v5bbp5til1gdn8tjuv68md10hqb.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.e-bebek.com%2Fsocial-login&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;state=2&amp;response_type=token"
                          class="ng-star-inserted"
                          ><figure
                            _ngcontent-serverapp-c146=""
                            class="login-image"
                            style="background-position: -57px 0px"
                          ></figure></a
                        ><!---->
                      </li>
                      <li _ngcontent-serverapp-c146="">
                        <a
                          _ngcontent-serverapp-c146=""
                          href="https://www.facebook.com/v13.0/dialog/oauth?client_id=216008698845574&amp;redirect_uri=https%3A%2F%2Fwww.e-bebek.com%2Fsocial-login&amp;scope=email%2Cpublic_profile&amp;state=1&amp;response_type=token"
                          class="ng-star-inserted"
                          ><figure
                            _ngcontent-serverapp-c146=""
                            class="login-image"
                            style="background-position: -26px 0px"
                          ></figure></a
                        ><!---->
                      </li>
                    </ul>
                  </div>
                  <div
                    _ngcontent-serverapp-c146=""
                    id="accordionExample"
                    class="d-lg-none d-block accordion social-accordion-mobile"
                  >
                    <div _ngcontent-serverapp-c146="" class="accordion-item">
                      <h2
                        _ngcontent-serverapp-c146=""
                        id="headingOne"
                        class="accordion-header"
                      >
                        <button
                          _ngcontent-serverapp-c146=""
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          class="accordion-button collapsed"
                        >
                          <div
                            _ngcontent-serverapp-c146=""
                            class="d-flex flex-column"
                          >
                            <h1
                              _ngcontent-serverapp-c146=""
                              class="title-primary text-left mb-5"
                            >
                              Sosyal hesap ile giriş yap
                            </h1>
                            <p _ngcontent-serverapp-c146="">
                              ebebek’e şifresiz giriş yapabilmek için Google,
                              Apple veya Facebook hesabınızı bağlayabilirsiniz.
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div
                        _ngcontent-serverapp-c146=""
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                        class="accordion-collapse collapse"
                      >
                        <div
                          _ngcontent-serverapp-c146=""
                          class="accordion-body p-0"
                        >
                          <ul _ngcontent-serverapp-c146="" class="social-list">
                            <li _ngcontent-serverapp-c146="">
                              <a _ngcontent-serverapp-c146="" href="#"
                                ><figure
                                  _ngcontent-serverapp-c146=""
                                  class="login-image"
                                  style="background-position: -57px 0px"
                                ></figure
                              ></a>
                            </li>
                            <li _ngcontent-serverapp-c146="">
                              <a _ngcontent-serverapp-c146="" href="#"
                                ><figure
                                  _ngcontent-serverapp-c146=""
                                  class="login-image apple"
                                  style="background-position: 0px 0px"
                                ></figure
                              ></a>
                            </li>
                            <li _ngcontent-serverapp-c146="">
                              <a _ngcontent-serverapp-c146="" href="#"
                                ><figure
                                  _ngcontent-serverapp-c146=""
                                  class="login-image"
                                  style="background-position: -26px 0px"
                                ></figure
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <eb-spinner
                    _ngcontent-serverapp-c146=""
                    _nghost-serverapp-c145=""
                    ><!----></eb-spinner
                  ></eb-social-login
                ><!----></eb-login-username
              ><!----></container-element
            >
          </div>
          <div class="col-12">
            <span class="security-shopping"
              ><img src="assets/svg/security.svg" alt="" />Güvenli
              Alışveriş</span
            ><span class="copyright"
              >Copyright 2001 - 2023 ebebek.com her hakkı saklıdır.</span
            >
          </div>
        </div>
      </div>
    </section></eb-login
  >
</template>