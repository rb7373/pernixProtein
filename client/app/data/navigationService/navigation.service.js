(function () {
  'use strict';

  angular
    .module('proteinApp')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$q', '$location', '$http'];

  /* @ngInject */
  function navigationService($q, $location, $http) {

    ///////////// Data

    var data = [{
      id: 1,
      name: "Protein Structure",
      sections: [{
        name: "Polypeptide Chains",
        objectives: [
          "Identify the functional groups involved in peptide bond formation",
          "Describe the limitations on polypeptide sequence variation"
        ],
        animation: "http://dynamoidapps.com/Wiley/Voet/video/protein_structure_part1.mp4",
        practiceSession: [{
          PDB: "threonine",
          instructions: "Click an atom in the amino group.",
          goal: "amino"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the carboxyl group.",
          goal: "carboxyl"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the side chain.",
          goal: "sideChain"
        }]
      }, {
        name: "Secondary Structure",
        objectives: [
          "Explain why the rotational freedom of a polypeptide is restricted",
          "Recognize the hydrogen bonding patterns of secondary structures such as alpha helices and beta sheets"
        ],
        animation: "http://dynamoidapps.com/Wiley/Voet/video/protein_structure_part2.mp4",
        practiceSession: [{
          PDB: "threonine",
          instructions: "Click an atom in the amino group.",
          goal: "amino"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the carboxyl group.",
          goal: "carboxyl"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the side chain.",
          goal: "sideChain"
        }]
      }, {
        name: "Three-dimensional Structure",
        objectives: [
          "Locate regular and irregular backbone structures",
          "Compare ball-and-stick, spacefilling, and ribbon models of protein structure",
          "Distinguish tertiary and quaternary structure"
        ],
        animation: "http://dynamoidapps.com/Wiley/Voet/video/protein_structure_part3.mp4",
        practiceSession: [{
          PDB: "threonine",
          instructions: "Click an atom in the amino group.",
          goal: "amino"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the carboxyl group.",
          goal: "carboxyl"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the side chain.",
          goal: "sideChain"
        }]
      }, {
        name: "Protein Families",
        objectives: [
          "Recognize that different amino acid sequences can form similar structures",
          "Identify the key residues in coiled coils and in collagen"

        ],
        animation: "http://dynamoidapps.com/Wiley/Voet/video/protein_structure_part4.mp4",
        practiceSession: [{
          PDB: "threonine",
          instructions: "Click an atom in the amino group.",
          goal: "amino"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the carboxyl group.",
          goal: "carboxyl"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the side chain.",
          goal: "sideChain"
        }]
      }, {
        name: "Protein Stability",
        objectives: [
          "Describe protein structure in terms of the hydrophobic effect",
          "Identify different types of intramolecular forces that help stabilize proteins",
          "Describe how changing salt concentration or pH can alter protein structure",
          "Explain why a protein’s structure must be somewhat flexible"
        ],
        animation: "http://dynamoidapps.com/Wiley/Voet/video/protein_structure_part5.mp4",
        practiceSession: [{
          PDB: "threonine",
          instructions: "Click an atom in the amino group.",
          goal: "amino"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the carboxyl group.",
          goal: "carboxyl"
        }, {
          PDB: "threonine",
          instructions: "Click an atom in the side chain.",
          goal: "sideChain"
        }]
      },]
    }];

    ///////////// Data

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
    var sectionStructureStates = ['objectives', 'animation', 'practice'];

    var currentState = data[initStateIndex];

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
      return $q.when(data);
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

