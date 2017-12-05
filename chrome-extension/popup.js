document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const container = document.getElementById("container");
  let postData = { images: { filename: "" }, url: "" };
  button.addEventListener("click", () => {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        var tabURL = tabs[0].url;
        postData["url"] = tabURL;
        const p = document.createElement("p");
        p.innerText = tabURL;
        container.appendChild(p);
      }
    );
    chrome.tabs.captureVisibleTab(null, null, function(dataUrl) {
      const image = document.createElement("img");
      image.src = dataUrl;
      postData["images"]["filename"] = dataUrl;
      container.appendChild(image);
      const formData = document.createElement("p");
      formData.innerText = `${postData},${postData.url}, ${postData.images
        .filename}, ${localStorage.getItem("jwt")}`;
      container.appendChild(formData);
      // fetch("http://localhost:3000/api/v1/users/4/designs", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("jwt")}`
      //   },
      //   body: JSON.stringify(postData)
      // });
    });
  });
});
