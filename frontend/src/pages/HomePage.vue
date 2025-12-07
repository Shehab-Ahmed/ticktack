<template>
    <main>
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-block d-sm-none" data-aos="fade-up">
                        <DotLottieVue style="margin: auto;margin-top: 40px;height: 260px; width: 260px;" autoplay loop src="https://lottie.host/83dbbf7b-2e9c-477a-b62c-f1868f572d6f/3573j5G8in.lottie" />
                    </div>
                    <div class="col-md-7" data-aos="fade-up">
                        <div class="header-cont" >
                            <h1>{{ $t('homePage.HeaderTitle') }}</h1>
                            <p class="lead mb-4">
                            {{ $t('homePage.HeaderDesc') }}
                            </p>
                            <div>
                                <router-link
                                    :to="{ name: 'register' }"
                                    class="btn btn-primary px-4 gap-3 mr-2 me-2"
                                    >{{ $t('homePage.SignUp') }}</router-link
                                >
                                <router-link
                                    :to="{ name: 'login' }"
                                    class="btn btn-outline-secondary px-4 mr-2 me-2"
                                    >{{ $t('homePage.SignIn') }}</router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 d-none d-sm-block" data-aos="fade-up">
                        <DotLottieVue style="height: 600px; width: 600px" autoplay loop src="https://lottie.host/83dbbf7b-2e9c-477a-b62c-f1868f572d6f/3573j5G8in.lottie" />
                    </div>
                </div>
            </div>
        </div>
        <div class="shp-fot">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080729" fill-opacity="1" d="M0,288L80,250.7C160,213,320,139,480,122.7C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
        <div class="about" data-aos="fade-up">
            <h2 class="lead text-center m-5 big-title">
                {{ $t('main.name') }}
            </h2>
            <p class="lead big-desc">
                {{ $t('homePage.About') }}
            </p>
            <div class="cont-img">
                <img :src="imgAbout" class="img-fluid d-block mx-auto rounded-3 mt-5" alt="">
                <div class="about-shape"></div>
                <div class="about-shape-2"></div>
            </div>
        </div>
        <div  data-aos="fade-up">
            <div class="shp-fot">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080729" fill-opacity="1" d="M0,288L80,250.7C160,213,320,139,480,122.7C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div class="features">
                <h2 class="text-center">{{ $t('homePage.titleFeat') }}</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="col-md-12">
                                <div class="feat row align-items-center">
                                    <div class="col-md-2 col-sm-12">
                                        <i class="fas fa-tasks icon1"></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>{{ $t('homePage.feat1') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="feat row align-items-center">
                                    <div class="col-md-2 col-sm-12">
                                        <i class="fas fa-bell icon2"></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>{{ $t('homePage.feat2') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="feat row align-items-center">
                                    <div class="col-md-2 col-sm-12">
                                        <i class="fas fa-sort-amount-up icon3"></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>{{ $t('homePage.feat3') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="feat row align-items-center">
                                    <div class="col-md-2 col-sm-12">
                                        <i class="fas fa-desktop icon4"></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>{{ $t('homePage.feat4') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="feat row align-items-center">
                                    <div class="col-md-2 col-sm-12">
                                        <i class="fas fa-mobile-alt icon5"></i>
                                    </div>
                                    <div class="col-md-10">
                                        <span>{{ $t('homePage.feat5') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <DotLottieVue class="lottie-icon-2" autoplay loop src="https://lottie.host/db19a079-63bf-4252-bc1b-657d13568b42/czbNco21m5.lottie" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shp-fot">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#080729" fill-opacity="1" d="M0,32L1440,288L1440,0L0,0Z"></path></svg>
        </div>0
        <div class="how-to-begin" data-aos="fade-up">
            <h2 class="text-center text-white mt-5 h1">{{ $t('homePage.titleHowtoBegin') }}</h2>
            <ol class="beg-list">
                <li>{{ $t('homePage.step1') }}</li>
                <li>{{ $t('homePage.step2') }}</li>
                <li>{{ $t('homePage.step3') }}</li>
                <li>{{ $t('homePage.step4') }}</li>
            </ol>
        </div>
        <div class="sec-end" data-aos="fade-up">
            <p>{{ $t('homePage.secEnd') }}</p>
            <div class="btns">
                <router-link
                    :to="{ name: 'register' }"
                    style="text-decoration: unset;"
                >
                    <button class="cta">
                    <span class="span">{{ $t('homePage.cta') }}</span>
                    <span class="second">
                        <svg
                        width="50px"
                        height="20px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                        <g
                            id="arrow"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                        >
                            <path
                            class="one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                            ></path>
                            <path
                            class="two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                            ></path>
                            <path
                            class="three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                            fill="#FFFFFF"
                            ></path>
                        </g>
                        </svg>
                    </span>
                    </button>
                </router-link>
            </div>
        </div>
        
    </main>
</template>
<script setup>
import imgAbout from '@/assets/images/2147937534.jpg'
import imgFeat from '@/assets/images/19196978.svg'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>
