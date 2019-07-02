// Listing 6.14  Using the updateRecord() function

submitTalk: function() {
  var validated = true;

  //Omitting the validation from the code listing

  if (validated) {
    var talk = this.get('content');
    EMBERFEST.Talk.updateRecord(talk);
    this.transitionToRoute('talks');
  }
}
