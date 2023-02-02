<template>
  <header cxskiplink="cx-header" tabindex="-1">
    <cx-page-layout section="header" class="header">
      <div _ngcontent-serverapp-c86="" class="header-main">
        <div _ngcontent-serverapp-c86="" class="row header-line-1">
          <div
            _ngcontent-serverapp-c86=""
            class="col-xl-2 col-6 col-lg-2 col-md-6 header-line-1-logo order-1"
          >
            <cx-page-layout
              _ngcontent-serverapp-c86=""
              section="logo"
              class="logo"
              ><!----><!----><!---->
              <cx-page-slot position="SiteLogo" class="SiteLogo has-components">
                <eb-banner
                  ><eb-generic-link
                    ><a href="/"
                      ><!----><cx-media id="logoEbebek" class="is-initialized"
                        ><img
                          src="https://cdn.e-bebek.com/y.ebebek/9973673459742.svg"
                          alt="Ebebek Logo Banner"
                          loading="lazy"
                        /><!----></cx-media
                      ><!----><!----></a
                    ><!----><!----><!----></eb-generic-link
                  ><!----></eb-banner
                ><!----><!----><!----><!----><!----></cx-page-slot
              ><!----><!----><!----><!----><!----></cx-page-layout
            >
          </div>
          <div
            _ngcontent-serverapp-c86=""
            class="
              col-xl-6 col-lg-6
              header-line-1-search
              order-3 order-lg-2 order-md-3 order-sm-3
            "
          >
            <cx-page-layout
              _ngcontent-serverapp-c86=""
              section="middle"
              class="middle"
              ><!----><!----><!----><cx-page-slot
                position="SearchBox"
                class="SearchBox has-components"
                ><eb-search-box
                  ><div class="header__menu-search">
                    <div class="search-wrapper">
                      <img
                        alt=""
                        class="search"
                        src="assets/svg/search.svg"
                      /><input
                        aria-autocomplete="both"
                        aria-controls="results"
                        aria-describedby="initialDescription"
                        autocomplete="off"
                        id="txtSearchBox"
                        placeholder="Geleneksel Şubat İndirimleri!"
                        aria-label="Ara"
                      />
                      <div class="loading"></div>
                      <div
                        id="searchContent"
                        role="listbox"
                        class="header__menu-search-content"
                        style="padding-left: 85px"
                      >
                        <!---->
                      </div>
                      <!---->
                    </div>
                  </div>
                  <!----></eb-search-box
                ><!----><!----><!----><!----><!----></cx-page-slot
              ><!----><!----><!----><!----><!----></cx-page-layout
            >
          </div>
          <div
            _ngcontent-serverapp-c86=""
            class="
              col-xl-4 col-lg-3 col-6
              header-line-1-account
              order-2 order-lg-3 order-md-2 order-sm-2
            "
          >
            <cx-page-layout
              _ngcontent-serverapp-c86=""
              section="account"
              class="account"
              ><!----><!----><!----><cx-page-slot
                position="HeaderWishlist"
                class="HeaderWishlist has-components"
                ><eb-header-wishlist _nghost-serverapp-c107=""
                  ><div
                    _ngcontent-serverapp-c107=""
                    class="header__menu-account-favorite"
                  >
                    <!----><a _ngcontent-serverapp-c107="" href="/login"
                      ><i
                        _ngcontent-serverapp-c107=""
                        class="icon-favorite"
                        id="iconWishList"
                      ></i></a
                    ><!---->
                  </div></eb-header-wishlist
                ><!----><!----><!----><!----><!----></cx-page-slot
              ><cx-page-slot
                position="EbebekSiteLoginMenu"
                class="EbebekSiteLoginMenu has-components"
                ><eb-header-login _nghost-serverapp-c113=""
                  ><div _ngcontent-serverapp-c113="">
                    <div
                      _ngcontent-serverapp-c113=""
                      class="header__menu account-btn flyout"
                    >
                      <!----><button
                        _ngcontent-serverapp-c113=""
                        class="account-mobile-btn ng-star-inserted"
                        id="btnMyAccount"
                      >
                        <i
                          _ngcontent-serverapp-c113=""
                          class="icon-user icon"
                        ></i></button
                      ><!----><!----><!---->
                      <div
                        _ngcontent-serverapp-c113=""
                        class="header__menu-account-dropdown account-btn"
                      >
                        <div
                          _ngcontent-serverapp-c113=""
                          class="header__menu account-btn flyout"
                        >
                          <div
                            _ngcontent-serverapp-c113=""
                            class="header__menu-account-dropdown account-btn"
                          >
                            <cx-page-slot
                              _ngcontent-serverapp-c113=""
                              position="SiteLoginMenu"
                              class="SiteLoginMenu has-components"
                              ><cx-navigation
                                ><cx-navigation-ui
                                  class="accNavComponent flyout"
                                  ><!---->
                                  <nav class="defaultBackground">
                                    <span id="lnkMyAccount" tabindex="0"
                                      ><eb-generic-link
                                        ><a href="/my-account/update-profile">
                                          Hesabım
                                          <!----></a
                                        ><!----><!----><!----></eb-generic-link
                                      ></span
                                    ><!----><!---->
                                    <div class="wrapper">
                                      <!---->
                                      <div class="childs" depth="1" columns="1">
                                        <nav class="orangeBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkLoginNavNode"
                                              href="/login"
                                              ><!---->
                                              Giriş Yap / Hesap Oluştur
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!---->
                                        <nav class="defaultBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkOrderHistoryNavNodeForGuest"
                                              href="/my-account/orders"
                                              ><img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn05.e-bebek.com/media/c/siparislerim.png"
                                              /><!---->
                                              Siparişlerim
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!---->
                                        <nav class="defaultBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkMessagesNavNodeForGuest"
                                              href="/my-account/messages"
                                              ><img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn05.e-bebek.com/media/c/mesaj-logo.png"
                                              /><!---->
                                              Mesajlarım
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!---->
                                        <nav class="defaultBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkAssessmentNavNodeForGuest"
                                              href="/my-account/product-reviews"
                                              ><img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn05.e-bebek.com/media/c/degerlendirmelerim-logo.png"
                                              /><!---->
                                              Değerlendirmelerim
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!---->
                                        <nav class="defaultBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkWishlistNavNodeForGuest"
                                              href="/my-account/wishlist"
                                              ><img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn05.e-bebek.com/media/c/fav-logo.png"
                                              /><!---->
                                              Favorilerim
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!---->
                                        <nav class="defaultBackground">
                                          <eb-generic-link
                                            ><a
                                              id="lnkGiftVoucherNavNodeForGuest"
                                              href="/my-account/coupons"
                                              ><img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn05.e-bebek.com/media/c/hediyelerim-logo.png"
                                              /><!---->
                                              Hediye Çeklerim
                                              <!----><!----></a
                                            ><!----><!----><!----></eb-generic-link
                                          ><!----><!----><!---->
                                        </nav>
                                        <!----><!----><!---->
                                      </div>
                                    </div>
                                    <!---->
                                  </nav>
                                  <!----><!----><!----><!----></cx-navigation-ui
                                ></cx-navigation
                              ><!----><!----><!----><!----><!----></cx-page-slot
                            >
                          </div>
                        </div>
                        <!---->
                      </div>
                      <!---->
                    </div>
                  </div>
                  <!----></eb-header-login
                ><!----><!----><!----><!----><!----></cx-page-slot
              ><cx-page-slot position="MiniCart" class="MiniCart has-components"
                ><eb-mini-cart
                  ><a class="account-menu-btn" href="/cart"
                    ><span class="mobile-shopping"
                      ><i class="icon-shopping-cart"></i
                      ><!----></span
                    ><button id="iconMiniCart" class="my-basket">
                      <i class="icon-shopping-cart"></i
                      ><!---->
                      SEPETİM
                    </button></a
                  ></eb-mini-cart
                ><!----><!----><!----><!----><!----></cx-page-slot
              ><!----><!----><!----><!----><!----></cx-page-layout
            >
          </div>
        </div>
        <div _ngcontent-serverapp-c86="" class="header-line-2">
          <div _ngcontent-serverapp-c86="" class="header-line-2-nav-left">
            <div _ngcontent-serverapp-c86="" class="header__megamenu">
              <div _ngcontent-serverapp-c86="" class="container">
                <div
                  _ngcontent-serverapp-c86=""
                  class="header__megamenu-wrapper"
                >
                  <ul _ngcontent-serverapp-c86="" class="header__megamenu-left">
                    <cx-page-layout
                      _ngcontent-serverapp-c86=""
                      section="nav"
                      class="nav"
                      ><!----><!----><!----><cx-page-slot
                        position="NavigationBar"
                        class="NavigationBar has-components"
                        ><eb-category-navigation
                          ><eb-mobile-navigation-ui class="ng-star-inserted"
                            ><div class="ng-star-inserted">
                              <ul class="nav-categories-open-contents">
                                <li
                                  class="nav-categories-open-contents-title"
                                  id="lnkEbebekCategoryNavNode"
                                >
                                  Kategoriler
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkClothingAccessoriesNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-clothes"></i>
                                      </div>
                                      <!----><!---->
                                      Giyim &amp; Tekstil
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkNurseryNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-besik"></i>
                                      </div>
                                      <!----><!---->
                                      Bebek Odası
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkBathAndSkinCareNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-bath"></i>
                                      </div>
                                      <!----><!---->
                                      Banyo &amp; Bakım
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkDiapersAndWipesNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-bez"></i>
                                      </div>
                                      <!----><!---->
                                      Bez &amp; Mendil
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkToysAndBooksNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-toys"></i>
                                      </div>
                                      <!----><!---->
                                      Oyuncak &amp; Kitap
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkGearNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-stuff"></i>
                                      </div>
                                      <!----><!---->
                                      Araç &amp; Gereç
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkFoodAndUtensilsNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-food"></i>
                                      </div>
                                      <!----><!---->
                                      Beslenme
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkNursingNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-baby"></i>
                                      </div>
                                      <!----><!---->
                                      Emzirme
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkSafetyNavNode"
                                    ><div class="icon">
                                      <div class="ng-star-inserted">
                                        <i class="icon-security"></i>
                                      </div>
                                      <!----><!---->
                                      Güvenlik
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <!---->
                              </ul>
                            </div>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><eb-mobile-navigation-ui
                            class="ng-star-inserted"
                            ><!---->
                            <div class="ng-star-inserted">
                              <ul class="nav-categories-open-contents">
                                <li
                                  class="nav-categories-open-contents-title"
                                  id="lnkHeaderKesfetNavNode"
                                >
                                  Keşfet
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkOyunVeOgrenmeNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Oyun ve Öğrenme🧩
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkTuvaletVeBanyoNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Tuvalet ve Banyo🛁
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkTatilNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Tatil🌞
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkYolArkadaslarimNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Yol Arkadaşlarım🚗
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkbir-damla-daha-fazlasi"
                                    ><div class="icon">
                                      <!---->
                                      Bir Damla Daha Fazlası🤱
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkbebek-odasi-nav-node"
                                    ><div class="icon">
                                      <!---->
                                      Bebek Odası🛌
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <!---->
                              </ul>
                            </div>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><eb-mobile-navigation-ui
                            class="ng-star-inserted"
                            ><!---->
                            <div class="ng-star-inserted">
                              <ul class="nav-categories-open-contents">
                                <li
                                  class="nav-categories-open-contents-title"
                                  id="lnkHeaderHediyeNavNode"
                                >
                                  Hediye
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkyasa-gore-hediyeler"
                                    ><div class="icon">
                                      <!---->
                                      Yaşa Göre Hediyeler🎂
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkNasilHediyeNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Kombinimi Tamamlıyorum👕
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkKiminIcinHediyeNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Bebeğimin Gelişimini Destekliyorum🎨
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkHangiButcedeHediyeNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Bebeğimle Eğlenirken Keşfediyorum🚀
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkUygunFiyatliHediyeNavNode"
                                    ><div class="icon">
                                      <!---->
                                      Uygun Fiyatlı Hediyeler🎮
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <li class="ng-star-inserted">
                                  <a id="lnkilk-hediyem-nav-node"
                                    ><div class="icon">
                                      <!---->
                                      İlk Hediyem🎁
                                    </div>
                                    <i class="icon icon-arrow-right"></i
                                  ></a>
                                </li>
                                <!---->
                              </ul>
                            </div>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><eb-mobile-navigation-ui
                            class="ng-star-inserted"
                            ><!----><!---->
                            <li class="orange ng-star-inserted">
                              <eb-generic-link class="nav-other-link"
                                ><a
                                  id="lnkHeaderInterneteOzelNavNode"
                                  class="nav-other-link ng-star-inserted"
                                  href="/internete-ozel-urunler-c0002"
                                >
                                  İnternete Özel Ürünler
                                  <i
                                    class="
                                      icon icon-arrow-right
                                      ng-star-inserted
                                    "
                                  ></i
                                  ><!----></a
                                ><!----><!----><!----></eb-generic-link
                              >
                            </li>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><eb-mobile-navigation-ui
                            class="ng-star-inserted"
                            ><!----><!---->
                            <li class="orange ng-star-inserted">
                              <eb-generic-link class="nav-other-link"
                                ><a
                                  id="lnkHeaderKampanyalarNavNode"
                                  class="nav-other-link ng-star-inserted"
                                  href="/indirimler-kampanyalar"
                                >
                                  Kampanyalar
                                  <i
                                    class="
                                      icon icon-arrow-right
                                      ng-star-inserted
                                    "
                                  ></i
                                  ><!----></a
                                ><!----><!----><!----></eb-generic-link
                              >
                            </li>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><eb-mobile-navigation-ui
                            class="ng-star-inserted"
                            ><!----><!---->
                            <li class="orange ng-star-inserted">
                              <eb-generic-link class="nav-other-link"
                                ><a
                                  id="lnkHeaderOutletNavNode"
                                  class="nav-other-link ng-star-inserted"
                                  href="/outlet-c0001"
                                >
                                  Outlet
                                  <i
                                    class="
                                      icon icon-arrow-right
                                      ng-star-inserted
                                    "
                                  ></i
                                  ><!----></a
                                ><!----><!----><!----></eb-generic-link
                              >
                            </li>
                            <!----><!----><!----><!----><!----><!----><!----><!----><!----></eb-mobile-navigation-ui
                          ><!----><!----><!----><!----><!----><!----></eb-category-navigation
                        ><!----><!----><!----><!----><!----></cx-page-slot
                      ><!----><!----><!----><!----><!----></cx-page-layout
                    >
                  </ul>
                  <cx-page-layout
                    _ngcontent-serverapp-c86=""
                    section="linkItems"
                    class="header-line-2-nav-right linkItems"
                    ><!----><!----><!----><cx-page-slot
                      position="NavigationBarRightSlot"
                      class="NavigationBarRightSlot has-components"
                      ><eb-link>
                        <cx-generic-link vxmlns="http://www.w3.org/1999/html">
                            <a id="lnkOrderTracking" href="/order-tracking">
                             <img loading="lazy" alt="SİPARİŞİM NEREDE" src="https://cdn05.e-bebek.com/media/c/siparisim-nerede-logo.png"/>
                              <!---->SİPARİŞİM NEREDE
                            <!----></a
                          ><!----><!----><!----></cx-generic-link
                        ><!----></eb-link
                      ><!----><!----><!----><eb-link
                        ><cx-generic-link vxmlns="http://www.w3.org/1999/html"
                          ><a id="lnkStoreFinder" href="/magazalar"
                            ><img
                              loading="lazy"
                              alt="EN YAKIN EBEBEK"
                              src="https://cdn05.e-bebek.com/media/c/enyakin-ebebek-logo.png"
                            /><!---->EN YAKIN EBEBEK
                            <!----></a
                          ><!----><!----><!----></cx-generic-link
                        ><!----></eb-link
                      ><!----><!----><!----><!----></cx-page-slot
                    ><!----><!----><!----><!----><!----></cx-page-layout
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!----></cx-page-layout
    ><cx-page-layout section="navigation" class="navigation"
      ><!----></cx-page-layout
    >
  </header>
</template>