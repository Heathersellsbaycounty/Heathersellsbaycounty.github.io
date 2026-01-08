function scrollToListings() {
  document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you! A Panama City real estate expert will contact you shortly.");
}
