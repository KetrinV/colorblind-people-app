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
                     <h2 class="header-text">Have you <mark>ever</mark> wondered how to make your website more accessible and User-Friendly for people with <mark>color blindness</mark> ?</h2>
                     <br>
                     <br>
                     <h2 class="header-text">Here are some tips on what to do and what to avoid!</h2>
                     <h3 class="subtitle">What to do:</h3>

                     <ol class="bullet-container">
                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/stars.png" alt="">
                            <li class="bullet-text"><b id="bullet">1.Use contrast:</b><p>Ensure that the text and background have sufficient contrast to aid readability. This benefits not only color-blind individuals but enhances readability for all visitors</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/text-size.png" alt="">
                            <li class="bullet-text"><b id="bullet">2. Alternative text for images:</b> <p>Provide alternative texts for all images, describing the content of the image. This is crucial as color-blind individuals may not grasp the message based on color alone.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/lightbulb.png" alt="">
                            <li class="bullet-text"><b id="bullet">3. Clear and simple design:</b> <p>Maintain a clear and straightforward design, avoiding excessive color or complex layouts. This simplifies navigation and comprehension for all users.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/shapes.png" alt="">
                            <li class="bullet-text"><b id="bullet">4. Diversity in color communication:</b> <p>Don't rely solely on color to convey messages. Use other visual elements such as icons and patterns to impart crucial information.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/swatchbook.png" alt="">
                            <li class="bullet-text"><b id="bullet">5. Check color schemes:</b> <p>Test different color schemes to ensure your website is understandable and readable for various types of color vision deficiency. Utilize tools that simulate different vision impairments.</p></li>
                        </div>
                    </ol>
                     <hr>
                     <h3 class="subtitle" id="sub2">What to avoid:</h3>


                     <ol class="bullet-container">
                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/pallett.png" alt="">
                            <li class="bullet-text"><b id="bullet">1. Solely depending on color:</b> <p>Avoid conveying essential messages using color alone. Always use other visual elements to ensure clear information transmission.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/monitor-sun.png" alt="">
                            <li class="bullet-text"><b id="bullet">2. Keeping the contrast low:</b> <p>Steer clear of low-contrast color schemes that may make text hard to read. Ensure that text is distinctly discernible from the background.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/complicated.png" alt="">
                            <li class="bullet-text"><b id="bullet">3. Using overly complex patterns:</b> <p>Avoid intricate color or pattern combinations that may cause confusion for color-blind visitors.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/memo.png" alt="">
                            <li class="bullet-text"><b id="bullet">4. Having a lack of alternative information:</b> <p>Do not forget to include alternative information for messages conveyed through color to ensure universal understanding.</p></li>
                        </div>

                        <div id="section">
                            <img class="tips-icons" src="/tips-icons/watching-screen.png" alt="">
                            <li class="bullet-text"><b id="bullet">5. Neglecting testing:</b> <p>Do not leave color accessibility testing as a last step. Regularly test using different tools to ensure optimal usability for color-blind individuals.</p></li>
                        </div>
                     
                    </ol>
                 </div>
            </section>
            <section class="to-do" ></section>
            <section class="to-avoid" ></section>  
        </section>

        <Foot/>
    </div>
</template>