document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const container = document.getElementById("container");
  const title = document.getElementById("title");
  let postData = {
    image: { filename: "" },
    url: "",
    title: "",
    creator_id: 1,
    jwt: ""
  };
  let token;

  function getCookies(domain, name, callback) {
    chrome.cookies.get({ url: domain, name: name }, function(cookie) {
      token = cookie.value;
      postData["jwt"] = cookie.value;
      // const text = document.createElement("p");
      // text.innerText = `cookie ${cookie.value}`;
      // container.appendChild(text);
    });
  }

  button.addEventListener("click", () => {
    getCookies("https://localhost:3001", "jwt");

    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        var tabURL = tabs[0].url;
        postData["url"] = tabURL;
        postData["title"] = title.value;
        const p = document.createElement("p");
        p.innerText = `Successfully sent to your homebase from outerspace`;
        p.setAttribute("id", "paragraph");
        container.appendChild(p);
      }
    );

    chrome.tabs.captureVisibleTab(null, null, function(dataUrl) {
      const image = document.createElement("img");
      image.src = dataUrl;
      postData["image"]["filename"] = dataUrl;
      // container.appendChild(image);
      const formData = document.createElement("p");
      // formData.innerText = `title:  ${postData.title}, object: ${postData},${postData.url}, ${postData
      //   .image.filename}`;
      // formData.innerText = `chrome:`;
      // container.appendChild(formData);
      fetch("https://localhost:3000/api/v1/designs/save", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });
    });
  });
});
