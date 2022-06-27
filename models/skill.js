const skills = [
    {id: 1, skill: 'HTML', developed: true},
    {id: 2, skill: 'CSS', developed: true},
    {id: 3, skill: 'Java', developed: true},
    {id: 4, skill: 'C++', developed: false},
    {id: 5, skill: 'Gimp Photo Editor', developed: false}
  ];
  
  module.exports = {
    getOne,
    getAll,
    create,
    deleteOne
  };
  
  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    skill.id = skills.length + 1
    skill.complete = false
    skills.push(skill)
  }

  function deleteOne(id) {
    var i = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(i, 1)
  }
