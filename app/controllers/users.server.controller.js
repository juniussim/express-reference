module.exports = {
  index: function(req, res) {
    var response

    var members_list = [
      {

      },
      {
        
      }
    ]

    res.json([
      {
        name: 'junius',
        age: 26,
        email: 'junius@gmail.com'
      },
      {
        name: 'junius2',
        age: 27,
        email: 'junius2@gmail.com'
      },
    ]);
  }
}
