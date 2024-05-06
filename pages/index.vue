<template>

    <div>

        <Head />
        <Navi />

        <!-- fix below -->
        <section class="content">

            <section class="herobanner">
                <div class="wrapper">
                    <div class="box1"><img
                            src="/image_preview/Artiso_mano.png">
                    </div>
                    <div class="right">
                        <div class="box2">
                            <h1 id="title">Why Make the Web <mark>More Accessible</mark> and <img
                                    src="/image_preview/User-friendly.svg" alt="User Friendly?"></h1>
                            <button style="vertical-align:middle" id="red-button">Learn more</button>
                        </div>
                        <div class="box3">
                            <p id="#">In the fast-paced digital landscape, ensuring web accessibility and usability is
                                paramount. By making the web more accessible, we cater to a diverse audience with varying
                                needs and abilities. This not only promotes inclusivity but also enhances the overall user
                                experience, making information and services available to everyone, regardless of their
                                unique requirements.</p>
                        </div>
                    </div>
                </div>
            </section>



            <div class="intro">
                <section class="get-started">
                    <h2 class="header-text">Get started!</h2>
                    <div id="gs-redirect-container">
                        <div id="gs-redirect">
                            <img class="tips-icons" src="/tips-icons/TIPS.png" alt=" ">
                            <mark id="gs-rd-title">Tips</mark>
                            <p>Make your website more accessible and User-Friendly for people with color blindness</p>
                        </div>
                        <div id="gs-redirect">
                            <img class="tips-icons" src="/tips-icons/pencil.png" alt=" ">
                            <mark id="gs-rd-title">Tools</mark>
                            <p>Some tools that we’ve collected, so that you can run different tests on your web-solution
                            </p>
                        </div>
                        <div id="gs-redirect">
                            <img class="tips-icons" src="/tips-icons/heart-message.png" alt=" ">
                            <mark id="gs-rd-title">About</mark>
                            <p>Learn why we made this website and where the idea came from?</p>
                        </div>
                    </div>
                </section>


                <hr>
                <br>


                <section class="theme-introduction">
                    <h2 id="title">What is Color Blindness and How Does It Impact User Experience?</h2>
                    <p>Color blindness, or the inability to distinguish certain colors, presents a fascinating
                        challenge in the world of user experience. As we explore this condition, we aim to uncover
                        the intricacies of how color blindness affects individuals' perception of digital content.
                        By understanding these challenges, we can work towards creating a more inclusive and
                        user-friendly online environment for everyone, regardless of their color vision abilities.
                    </p>
                </section>
            
                <section class="types-of-colorblindness">
                    <a href=""></a>
                    <!-- <button id="colorblindness-type" href="#Deuteranopia">Deuteranopia</button>
                    <button id="colorblindness-type" href="#Protanopia">Protanopia</button>
                    <button id="colorblindness-type" href="#Tritanopia">Tritanopia</button>
                    <button id="colorblindness-type" href="#Achromatopsia">Achromatopsia</button> -->

                    <hr>

                    <br>
                    <br>
                        
                    <div class="button-typegroup-layout">
                        <a id="colorblindness-type" href="#Deuteranopia">Deuteranopia</a>
                        <a id="colorblindness-type" href="#Protanopia">Protanopia</a>
                        <a id="colorblindness-type" href="#Tritanopia">Tritanopia</a>
                        <a id="colorblindness-type" href="#Achromatopsia">Achromatopsia</a>
                    </div>
                    
                    <br>
                    <br>
                    <br>
                    <br>

                    <div class="tool-typegroup-layout">
                        <section id="Deuteranopia">
                            <h1>Deuteranopia</h1>
                            <h2>(Green-Weak Color Vision)</h2>
                            <p>Deuteranopia is a type of color blindness affecting the perception of green hues.
                                Understand the nuances through a dynamic filter and slider simulation, allowing users to
                                experience both a regular view and the altered perspective of someone with Deuteranopia:
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">

                            <p>Deuteranomaly - Partial green colorblindness</p>
                        </section>
                

                        <section id="Protanopia">
                            <h1>Protanopia </h1>
                            <h2>(Total red colorblindness)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi
                                ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti
                                nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Protanomaly - Partial red colorblindness</p>
                        </section>


                        <section id="Tritanopia ">
                            <h1>Tritanopia </h1>
                            <h2>(Total blue colorblindness)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi
                                ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti
                                nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Tritanomaly - Partial blue colorblindness</p>
                        </section>

                        <section id="Achromatopsia">
                            <h1>Achromatopsia </h1>
                            <h2>(Total colorblindness)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi
                                ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti
                                nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Achromatomaly - Partial colorblindness, with faded colors</p>
                        </section>
                    </div>
                </section>


            </div>
        </section>

        <Foot />
    </div>

</template>