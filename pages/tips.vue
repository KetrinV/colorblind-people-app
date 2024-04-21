<!--Hei! See on .view fail. Kõik HTML läheb template'i sisse-->

<template>
    <div>
        <Head/>
        <Navi/>
        <section class="content">
            <section class="sub-herobanner">
                <div class="title-bg">
                    <h1 id="title">Tips for Designers!</h1>
                </div>
            </section>
            <section>
                 <div class="intro">
                     <h2 class="header-text">Have you <mark>ever</mark> wondered how to make your website more accessible and User-Friendly for people with <mark>color blindness</mark> ? </h2>
                     <h2 class="header-text">Here are some tips on what to do and what to avoid!</h2>
                     <h3 class="subtitle">What to do:</h3>

                     <ol class="bullet-container">
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/stars.png" alt="">1.Use contrast:</b> </li>
                        <p class="bullet-fulltext">Ensure that the text and background have sufficient contrast to aid readability. This benefits not only color-blind individuals but enhances readability for all visitors</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/text-size.png" alt="">2. Alternative text for images:</b> </li>
                        <p class="bullet-fulltext">Provide alternative texts for all images, describing the content of the image. This is crucial as color-blind individuals may not grasp the message based on color alone.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/lightbulb.png" alt="">3. Clear and simple design:</b> </li>
                        <p class="bullet-fulltext">Maintain a clear and straightforward design, avoiding excessive color or complex layouts. This simplifies navigation and comprehension for all users.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/shapes.png" alt="">4. Diversity in color communication:</b> </li>
                        <p class="bullet-fulltext">Don't rely solely on color to convey messages. Use other visual elements such as icons and patterns to impart crucial information.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/swatchbook.png" alt="">5. Check color schemes:</b> </li>
                        <p class="bullet-fulltext">Test different color schemes to ensure your website is understandable and readable for various types of color vision deficiency. Utilize tools that simulate different vision impairments.</p>
                    </ol>
                     <hr>
                     <br>
                     <br>
                     <h3 class="subtitle" id="sub2">What to avoid:</h3>

                     <ol class="bullet-container">
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/pallett.png" alt="">1. Solely depending on color:</b> </li>
                        <p class="bullet-fulltext">Avoid conveying essential messages using color alone. Always use other visual elements to ensure clear information transmission.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/monitor-sun.png" alt="">2. Keeping the contrast low:</b> </li>
                        <p class="bullet-fulltext">Steer clear of low-contrast color schemes that may make text hard to read. Ensure that text is distinctly discernible from the background.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/complicated.png" alt="">3. Using overly complex patterns:</b> </li>
                        <p class="bullet-fulltext">Avoid intricate color or pattern combinations that may cause confusion for color-blind visitors.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/memo.png" alt="">4. Having a lack of alternative information:</b> </li>
                        <p class="bullet-fulltext">Do not forget to include alternative information for messages conveyed through color to ensure universal understanding.</p>
                        <li class="bullet-text"><b id="bullet"><img class="tips-icons" src="/tips-icons/watching-screen.png" alt="">5. Neglecting testing:</b> </li>
                        <p class="bullet-fulltext">Do not leave color accessibility testing as a last step. Regularly test using different tools to ensure optimal usability for color-blind individuals.</p>
                    </ol>
                 </div>
            </section>
            <section class="to-do" ></section>
            <section class="to-avoid" ></section>  
        </section>

        <Foot/>
    </div>
</template>