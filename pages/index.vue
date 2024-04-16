<!--Hei! See on .view fail. Kõik HTML läheb template'i sisse-->

<template>

    <div>

        <Head />
        <Navi />

        <!-- fix below -->
        <section class="content">
                    <div class="intro">

                    <section class="herobanner">
                        <h1>Why Make the Web More Accessible and</h1>
                        <h1>User-friendly ?</h1>
                        <button>Learn more</button>
                    </section>
                    <section class="get-started">
                        <h2>Get started!</h2>
                        <div id="tips">
                            Tips
                            <p>Make your website more accessible and User-Friendly for people with color blindness</p>
                        </div>
                        <div id="tools">
                            Tools
                            <p>Some tools that we’ve collected, so that you can run different tests on your web-solution
                            </p>
                        </div>
                        <div id="about">
                            About
                            <p>Learn why we made this website and where the idea came from?</p>
                        </div>
                    </section>
                    <section class="theme-introduction">
                        <h2>What is Color Blindness and How Does It Impact User Experience?</h2>
                        <p>Color blindness, or the inability to distinguish certain colors, presents a fascinating
                            challenge in the world of user experience. As we explore this condition, we aim to uncover
                            the intricacies of how color blindness affects individuals' perception of digital content.
                            By understanding these challenges, we can work towards creating a more inclusive and
                            user-friendly online environment for everyone, regardless of their color vision abilities.
                        </p>
                    </section>
                    <section class="types-of-colorblindness">
                        <button id="colorblindness-type">Deuteranopia</button>
                        <button id="colorblindness-type">Protanopia</button>
                        <button id="colorblindness-type">Tritanopia</button>
                        <button id="colorblindness-type">Achromatopsia</button>

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
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Protanomaly - Partial red colorblindness</p>
                        </section>


                        <section id="Tritanopia ">
                            <h1>Tritanopia  </h1>
                            <h2>(Total blue colorblindness)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Tritanomaly - Partial blue colorblindness</p>
                        </section>

                        <section id="Achromatopsia">
                            <h1>Achromatopsia </h1>
                            <h2>(Total colorblindness)</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iusto sequi animi ducimus nam inventore quibusdam! Eaque corrupti amet blanditiis a officia, qui deleniti nulla odio asperiores voluptatibus voluptate! Nobis!
                            </p>
                            <img src="/image_preview/Test_img.png" alt="City Preview">
                            <p>Achromatomaly - Partial colorblindness, with faded colors</p>
                        </section>

                    </section>


                </div>
        </section>

        <Foot />
    </div>

</template>