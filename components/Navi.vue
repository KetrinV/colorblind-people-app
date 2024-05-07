<template>
    <Head/>
    <nav>
      <div class="navbar">
        <span class="logo-container">
          <a href="/">
            <img src="/logo.png" alt="Logo" id="logo" decoding="async" loading="lazy" width="15%" height="auto" class="thumbimage">
            <h1>ColorMaze</h1>
          </a>
        </span>
        <span class="menu">
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="burger">☰</label>
            <div>
              <ul>
                <li class="dropdown">
                  <nuxt-link to="../">Home</nuxt-link>
                </li>
                <li class="dropdown">
                  <nuxt-link to="../tips">Tips</nuxt-link>
                </li>
                <li class="dropdown">
                  <nuxt-link to="../tools">Tools<i class="fa-solid fa-caret-down"></i></nuxt-link>
                  <div class="dropdown-content2">
                    <nuxt-link to="../tools/#color-pallet-checker">Color Palette Checker</nuxt-link>
                    <nuxt-link to="../tools/#color-blindness-simulator">Color Blindness Simulator</nuxt-link> 
                  </div>
                </li>
                <li class="dropdown">
                  <nuxt-link to="../about-us">About</nuxt-link>
                </li>
              </ul>
            </div>
          </ul>
        </span>
      </div>
    </nav>
  </template>
  