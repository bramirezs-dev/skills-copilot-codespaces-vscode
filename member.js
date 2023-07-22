function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member__skills');
  const memberSkillsClose = document.querySelector('.member__skills-close');
  const memberSkillsOpen = document.querySelector('.member__skills-open');

  if (member) {
    member.addEventListener('click', function (e) {
      if (e.target.classList.contains('member__skills-open')) {
        memberSkills.classList.add('member__skills--active');
      }
    });

    memberSkillsClose.addEventListener('click', function () {
      memberSkills.classList.remove('member__skills--active');
    });
  }
}