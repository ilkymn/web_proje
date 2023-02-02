<template>
    <section class="login">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <cx-generic-link tabindex="0">
                    <a href="/login/register" class="ng-star-inserted">
                        <img src="assets/images/logo.png" alt="Ebebek Logo" class="login__logo ng-star-inserted"><!---->
                    </a>
                </cx-generic-link>
            </div>
            <div class="col-12 mb-5">
                <div class="card">
                    <container-element>
                        <form vnovalidate="" class="ng-star-inserted ng-untouched ng-pristine ng-invalid">
                            <button type="button" class="login-back-btn"></button>
                            <h1 class="title-primary text-center mb-5">Merhaba </h1>
                            <p class="text-center d-block mb-5"> Bilgilerinize kay�tl� bir hesap bulunamad�, H�zl�ca,  <label><b> +90 (530) 931 67 05 </b> telefon numaran�zla giri� yapabilece�iniz hesap olu�turabilirsiniz.</label></p>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <input id="txtFirstNameRegister" formcontrolname="firstName" placeholder="Ad�n�z" class="ng-untouched ng-pristine ng-invalid">
                                        <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                            <p class="ng-star-inserted">
                                                Bu alan gereklidir.
                                            </p><!---->
                                        </cx-form-errors>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input id="txtLastNameRegister" formcontrolname="lastName" placeholder="Soyad�n�z" class="ng-untouched ng-pristine ng-invalid">
                                        <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                            <p class="ng-star-inserted">
                                                Bu alan gereklidir.
                                            </p><!---->
                                        </cx-form-errors>

                                    </div>
                                </div><!----><div class="col-12 ng-star-inserted">
                                    <div class="form-group">
                                        <input id="txtEmailRegister" type="email" formcontrolname="email" nospaces="" placeholder="Eposta adresiniz" class="ng-untouched ng-pristine ng-invalid">
                                        <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                            <p class="ng-star-inserted">
                                                Bu alan gereklidir.
                                            </p><!---->
                                        </cx-form-errors>

                                    </div>
                                </div><!----><!----><div class="col-12 mb-3 form-group">
                                    <eb-input-password>
                                        <div class="form-group form-group-affix ng-untouched ng-pristine ng-invalid">
                                            <input id="txtSetPassword" autocomplete="new-password" class="input ng-untouched ng-pristine ng-invalid" type="password" placeholder="�ifre">
                                            <span id="btnShowPassword" class="affix"><i class="icon-eye"></i></span>
                                        </div>
                                    </eb-input-password>
                                    <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                        <p class="ng-star-inserted">
                                            Bu alan gereklidir.
                                        </p><!---->
                                        <i class="info-text">sifreniz rakam, b�y�k harf, k���k harf, �zel karakter i�ermelidir ve en az 8 karakter uzunlu�unda olmal�d�r.</i>
                                    </cx-form-errors>

                                    </div>
                                <div class="col-12 mb-4">
                                    <label class="checkbox-label checkbox-label-sm">
                                        <div class="checkbox">
                                            <input type="checkbox" formcontrolname="userAgreement" id="chkUserAgreementAccept" class="ng-untouched ng-pristine ng-invalid"><span></span>
                                        </div>
                                        <p><a>Kullanici Sozlesmesini</a>  okudum ve kabul ediyorum. </p>
                                    </label>
                                    <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                        <p class="ng-star-inserted">
                                            Bu alan gereklidir.
                                        </p><!---->
                                    </cx-form-errors>

                                </div>
                                <div class="col-12 mb-4">
                                    <label class="checkbox-label checkbox-label-sm">
                                        <div class="checkbox">
                                            <input type="checkbox" formcontrolname="kvkkAllow" id="chkPrivacyPolicyAccept" class="ng-untouched ng-pristine ng-invalid"><span></span>
                                        </div>
                                        <p><a>Gizlilik politikasini</a>  ve <a> Kisisel veri aydinlatma metnini</a>  okudum ve kisisel verilerimin islenmesine onay veriyorum. </p>
                                    </label>
                                    <cx-form-errors aria-live="assertive" aria-atomic="true" class="control-invalid">
                                        <p class="ng-star-inserted">
                                            Bu alan gereklidir.
                                        </p><!---->
                                    </cx-form-errors>

                                    </div>
                                <div class="col-12 mb-4">
                                    <label class="checkbox-label checkbox-label-sm">
                                        <div class="checkbox"><input type="checkbox" formcontrolname="emailAllow" id="chkEmailAllow" class="ng-untouched ng-pristine ng-valid"><span></span></div> Eposta ile tan�t�m ve pazarlama amac�yla ileti�ime ge�ilmesini kabul ediyorum.
                                    </label>
                                </div>
                                <div class="col-12 mb-5">
                                    <label class="checkbox-label checkbox-label-sm">
                                        <div class="checkbox"><input type="checkbox" formcontrolname="smsAllow" id="chkSmsAllow" class="ng-untouched ng-pristine ng-valid"><span></span></div> SMS ile tan�t�m ve pazarlama amac�yla ileti�ime ge�ilmesini kabul ediyorum.
                                    </label>
                                </div>
                                <div class="col-12"><button id="btnCreateAccount" type="submit" class="btn-link-second-menu d-block"> Hesap Olu�tur </button></div><eb-modal></eb-modal>
                            </div>
                        </form><!----><!---->
                    </container-element>
                </div>
            </div><div class="col-12">
                <span class="security-shopping">
                    <img src="assets/svg/security.svg" alt="">G�venli Al��veri�
                </span>
                <span class="copyright">Copyright 2001-2021 ebebek.com her hakk� sakl�d�r. </span>
            </div>
        </div>
    </div>
</section>
</template>