async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  const response = await fetch(`/api/blogs`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add a blog");
  }
}

document
  .querySelector(".new_blog_form")
  .addEventListener("submit", newFormHandler);
