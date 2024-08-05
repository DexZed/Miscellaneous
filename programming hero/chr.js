// ==UserScript==
// @name         Remove Floating Email
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Continuously remove the floating email address from video
// @match        *https://web.programming-hero.com/web-10/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeEmailElement() {
        const emailElement = document.getElementById('plyr-logo');
        if (emailElement) {
            emailElement.style.display = 'none';
        }
    }

    // Initial check
    removeEmailElement();

    // Observe changes in the DOM
    const observer = new MutationObserver(removeEmailElement);
    observer.observe(document.body, { childList: true, subtree: true });

})();
