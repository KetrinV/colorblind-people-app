<!--Hei! See on .view fail. Kõik HTML läheb template'i sisse-->

<template>
    <div>
        <Head/>
        <Navi/>
        <section class="content">
            <section class="sub-herobanner">
                <div class="title-bg">
                    <h1 id="title">Tools for testing your web-solution</h1>
                </div>
            </section>
        </section>
        
        <section>
            <div class="intro">
                <h2 class="header-text" >Have you <mark>ever</mark> wondered how accessible your web-solution is? <br> <br> Here are some tools that we’ve collected, so that you can run different tests on your web-solution. These tests range from checking your color-pallette to <mark>different simulations of how users who cannot tell colors apart would see your site.</mark> </h2>
                <h3 class="tools-header"id="after-hr" >Color Palette Checker:</h3>
                <div class="tools-img-container">
                    <img class="tools-image" src="/image_preview/colorpallet.png" alt="Picture of Color Palettes" onclick="window.location.href='https://colorcube.tak21vanatoa.itmajakas.ee/';">
                </div>
                <p class="tools-p">Optimize your website's color palette for inclusivity with our Color Palette Checker. Ensure high contrast and readability, creating a visually appealing and user-friendly design accessible to all.</p>
                <hr>
                <h3 class="tools-header"  >Color blindness simulator:</h3>
                <div class="tools-img-container">
                    <img class="tools-image" src="/image_preview/color-blindness-simulator.jpg" alt="Picture of diffrent color visions" onclick="window.location.href='https://color-blind-simulator.tak21vanatoa.itmajakas.ee';">
                </div>
                <p class="tools-p">Use this simulator to check if your colors maintain the same effect for different types of vision, and you can download your experiments.</p>
            </div>
        </section>
    
        <Foot/>
    </div>
</template>