/* Independent Practice
Making a favorites list: jQuery
You'll add the ability to complete tasks in your favorite things list:
- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end
*/

$(document).ready(function () {
  function addToList ($list, thing) {
    var $thingLi = $('<li class="fav-thing">')
    $thingLi.text(thing)
    var $compBtn = $("<button class='done-button'>")
    $compBtn.addClass("done-button")
    $compBtn.text("Done")
    $thingLi = $thingLi.append($compBtn)
    $list.append($thingLi)
  }

  var $thingList = $('#fav-list')
  var $button = $('#new-thing-button')
  var $newThingInput = $('#new-thing')
  var $compBtn = $("<button class='done-button'>")
  

  $compBtn.text("Done")
  $(".fav-thing").append($compBtn)

  $button.on('click', function (event) {
    event.preventDefault()
    var newThing = $newThingInput.val()
    if (newThing === '') {
      alert('You must type in a value!')
    } else {
      addToList($thingList, newThing)
      $newThingInput.val('')
    }
   
  });

  

  // var $doneButtons = $(".done-button")

  $(".done-button").on("click", function (event) {
    $doneButtons = $(".done-button");
    event.preventDefault();
    this.parentElement.classList.toggle("completed")
    console.log("button click " + this.classList)
  })

})