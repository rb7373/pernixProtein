(function () {
  'use strict';

  angular
    .module('proteinApp')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$q', '$location', '$http'];

  /* @ngInject */
  function navigationService($q, $location, $http) {

    ///////////// dataProtein

    var dataProtein = [].concat(data);

    ///////////// dataProtein

    var initStateIndex = 0;
    var notSection = -1;
    var notSubSection = -1;
    var notTitle = '';
    var notState = 'main';
    var notAnimation = '';
    var firstSection = 0;
    var firstSubSection = 0;

    var initSectionTitle = 'Introduction';
    var sectionStructure = ['Objectives', 'Animation', 'Practice Session'];
    var objectivesState = 0;
    var animationState = 1;
    var practiceState = 2;
    var sectionStructureStates = ['objectives', 'animation', 'practice'];

    var currentState = dataProtein[initStateIndex];

    var titleMaxLength = -1;
    var lastSection = currentState.sections.length - 1;
    var lastSubSection = sectionStructure.length - 1;

    var currentSetionTitle = initSectionTitle;

    var currentSectionState = {
      section: notSection,
      subSection: notSubSection
    }

    var service = {
      loadAll: loadAll,
      getSections: getSections,
      getCurrentStateTitle: getCurrentStateTitle,
      getSectionStructure: getSectionStructure,
      getSectionStructureStates: getSectionStructureStates,
      getTitleMaxLength: getTitleMaxLength,
      setCurrentSectionState: setCurrentSectionState,
      getCurrentTitle: getCurrentTitle,
      getCurrentSectionNumber: getCurrentSectionNumber,
      getCurrentSection: getCurrentSection,
      getCurrentObjectives: getCurrentObjectives,
      getCurrentAnimation: getCurrentAnimation,
      getPrevious: getPrevious,
      getNext: getNext,
      goNext: goNext,
      goPrevious: goPrevious,
      getCurrentSectionState: getCurrentSectionState
    };

    return service;

    ////////////////

    function loadAll() {
      return $q.when(dataProtein);
    }

    function getCurrentTitle() {
      var sectionIndex = currentSectionState.section;
      var currentTitle;
      currentTitle = sectionIndex === notSection ? initSectionTitle : getSections()[sectionIndex].name;
      return currentTitle;
    }

    function getCurrentAnimation() {
      var sectionIndex = currentSectionState.section;
      var currentAnimation;
      currentAnimation = sectionIndex === notSection ? notAnimation : getSections()[sectionIndex].animation;
      return currentAnimation;
    }

    function getPrevious() {
      var previous = {};
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;

      previous.title = notTitle;

      if (isPreSection(sectionIndex, subSectionIndex)) {
        previous.title = notTitle;
      } else if (isFirstSubSectionOfFirstSection(sectionIndex, subSectionIndex)) {
        previous.title = initSectionTitle;
      } else if (!isFirstSection(sectionIndex) && isFirstSubSection(subSectionIndex)) {
        previous.title = getSections()[sectionIndex - 1].name
      } else {
        previous.title = getSectionStructure()[subSectionIndex - 1];
      }

      return previous;
    }

    function getNext() {
      var nextTitle = {};
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;

      nextTitle.state = notState;

      if (isLastSubSectionOfLastSection(sectionIndex, subSectionIndex)) {
        nextTitle.title = notTitle;
      } else if (isPreSection(sectionIndex, subSectionIndex)) {
        nextTitle.title = getSections()[firstSection].name;
      } else if (isLastSubSection(subSectionIndex) && !isLastSection(sectionIndex)) {
        nextTitle.title = getSections()[sectionIndex + 1].name;
      } else {
        nextTitle.title = getSectionStructure()[subSectionIndex + 1];
      }

      return nextTitle;
    }


    function setCurrentSectionState(sectionIndex, subSectionIndex) {
      currentSectionState.section = sectionIndex;
      currentSectionState.subSection = subSectionIndex;
      // TODO: Take care of update jquery variables
      if (subSectionIndex === practiceState){
        currentSection = sectionIndex; // TODO uglify dont'n work
        console.log('UPDATE stage');
        stage = 0;
        console.log('CALL START ANIMATION NAVIGATION');
        startPractice();


      }
    }

    function getTitleMaxLengthSectionTitle(elemt) {
      var len = elemt.name.length;
      titleMaxLength = titleMaxLength < len ? len : titleMaxLength;
    }

    function getTitleMaxLength() {
      var sections = getSections();
      titleMaxLength = -1;
      sections.forEach(getTitleMaxLengthSectionTitle);
      return titleMaxLength;
    }

    function goNext() {
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;
      if (isPreSection(sectionIndex, subSectionIndex)) {
        setCurrentSectionState(firstSection, firstSubSection);
        updateLocation(firstSubSection);
        return true;
      } else if (isLastSubSection(subSectionIndex) && !isLastSection(sectionIndex)) {
        setCurrentSectionState(sectionIndex + 1, firstSubSection);
        updateLocation(firstSubSection);
        return true;
      } else if (!isLastSubSectionOfLastSection()) {
        setCurrentSectionState(sectionIndex, subSectionIndex + 1);
        updateLocation(subSectionIndex + 1);
        return true;
      }
    }

    function goPrevious() {
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;
      if (isFirstSubSectionOfFirstSection(sectionIndex, subSectionIndex)) {
        setCurrentSectionState(notSection, notSubSection);
        goLocationMain();
        return true;
      } else if (isFirstSubSection(subSectionIndex)) {
        setCurrentSectionState(sectionIndex - 1, firstSubSection);
        updateLocation(firstSubSection);
        return true;
      } else {
        setCurrentSectionState(sectionIndex, subSectionIndex - 1);
        updateLocation(subSectionIndex - 1);
        return true;
      }
    }

    function getSections() {
      return currentState.sections;
    }

    function getCurrentStateTitle() {
      return currentState.name;
    }

    function getSectionStructure() {
      return sectionStructure;
    }

    function getSectionStructureStates() {
      return sectionStructureStates;
    }

    function getCurrentSectionState() {
      return angular.copy(currentSectionState);
    }

    function getCurrentSectionNumber() {
      return currentSectionState.section + 1; // Init in 0
    }

    function getCurrentSection() {
      return currentSectionState.section; // Init in 0
    }

    function getCurrentObjectives() {
      var sectionIndex = currentSectionState.section;
      var objectives;
      objectives = sectionIndex != notSection ? getSections()[sectionIndex].objectives : '';
      return objectives;
    }

    //AUX FUNCTIONS

    function getNextSectionState(subSection) {
      var next;
      next = subSection === 2 ? firstSubSection : subSection + 1;
      return sectionStructureStates[next];
    }

    function getPreviousSectionState(subSection) {
      var previous;
      previous = subSection === 0 ? lastSubSection : subSection - 1;
      return sectionStructureStates[previous];
    }

    function isLastSubSectionOfLastSection(section, subSection) {
      return section === lastSection && subSection === lastSubSection;
    }

    function isFirstSubSection(subSection) {
      return subSection === firstSubSection;
    }


    function isFirstSubSectionOfFirstSection(section, subSection) {
      return section === firstSection && subSection === firstSubSection;
    }

    function isPreSection(section, subSection) {
      return section === notSection || subSection === notSubSection;
    }

    function isFirstSection(section) {
      return section === firstSection;
    }

    function isLastSubSection(subSection) {
      return subSection === lastSubSection;
    }

    function isLastSection(section) {
      return section === lastSection;
    }

    function updateLocation(subSection) {
      var path = '/' + sectionStructureStates[subSection];
      console.log('Path: ' + path);
      $location.path(path);
    }

    function goLocationMain() {
      var path = '/' + notState;
      $location.path(path);
    }

  }
})();

