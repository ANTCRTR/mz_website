import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log(this.element)
  }

  toggle(e) {
    var coll = document.getElementsByClassName("card-product");
    var i;

    console.log(coll)

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
      });
    }
  }

}
