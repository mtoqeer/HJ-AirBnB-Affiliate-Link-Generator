document.getElementById("msg").style.display = "none";

// Copy link
document.getElementById("btncode").addEventListener("click", function(e) {
  let msgdiv = document.getElementById("msg");
  const linkforbtncopy = document.getElementById("resultlink");

  if (linkforbtncopy.innerHTML === "") {
    msgdiv.style.display = "block";
    msgdiv.innerHTML = `<span style="color:red;">Please First Copy AirBnB Link!!!<span>`;
    setTimeout(() => {
      msgdiv.style.display = "none";
      msgdiv.innerHTML = "";
    }, 6000);
  } else {
    copyToClipboard(
      `<div class="split" style="margin: 0 auto !important;"><a class="spl small blue right" href="${linkforbtncopy.innerHTML}" target="_blank" rel="nofollow"> Book on Air BnB </a></div>`
    );
    linkforbtncopy.innerHTML = "";
  }

  e.preventDefault();
});

document.getElementById("airbnb-button").addEventListener("click", function(e) {
  const link = document.getElementById("airbnb");
  let msgdiv = document.getElementById("msg");
  const linkforbtn = document.getElementById("resultlink");

  if (link.value === "") {
    msgdiv.style.display = "block";
    msgdiv.innerHTML = `<span style="color:red;">Please Enter Link<span>`;
    setTimeout(() => {
      msgdiv.style.display = "none";
      msgdiv.innerHTML = "";
    }, 6000);
  } else {
    copyToClipboard(
      `https://airbnb.pvxt.net/c/2088358/567379/4273?u=?u=${link.value}`
    );
    msgdiv.style.display = "block";
    msgdiv.innerHTML = "Link Has Been Generated and Copied Succfullly!";
    linkforbtn.innerHTML = `https://airbnb.pvxt.net/c/2088358/567379/4273?u=${link.value}`;
    link.value = "";
    setTimeout(() => {
      msgdiv.style.display = "none";
      msgdiv.innerHTML = "";
    }, 6000);
  }

  e.preventDefault();
});

const copyToClipboard = str => {
  const el = document.createElement("textarea"); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};
