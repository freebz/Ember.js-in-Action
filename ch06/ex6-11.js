// Listing 6.11  Using the createRecord() function

submitAbstract: function() {
  var validated = true;

  //Validation omitted from this listing

  if (validated) {
    var talkId = Math.uuid(16, 16);
    var talk = Emberfest.Talk.create({
      id: talkId,
      talkTitle: this.get('content.proposalTitle'),
      talkText: this.get('content.proposalText'),
      talkType: this.get('content.proposalType'),
      talkTopics: this.get('content.proposalTopics')
    });

    Emberfest.Talk.createRecord(talk);
    this.transitionToRoute('talks');
  }
}
