(function () {
  'use strict';

  angular
    .module('proteinApp')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['$q'];

  /* @ngInject */
  function navigationService($q) {

    var data = [{
      id: 1,
      name: "Protein Structure",
      sections: [{
        name: "Polypeptide Chains",
        objectives: [
          "Identify the functional groups involved in peptide bond formation",
          "Describe the limitations on polypeptide sequence variation"
        ],
        animation: "protein_structure_part1",
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
        animation: "protein_structure_part1",
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
        animation: "secondary structure",
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
        animation: "secondary structure",
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
        animation: "protein_structure_part1",
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

    var service = {
      loadAll: loadAll,
      getSections: getSections,
      getCurrentStateTitle: getCurrentStateTitle,
      getSectionStructure: getSectionStructure,
      gettitleMaxLength: gettitleMaxLength,
      setCurrentSectionState: setCurrentSectionState,
      getCurrentTitle: getCurrentTitle,
      getPreviousTitle: getPreviousTitle,
      getNextTitle: getNextTitle,
      goNext: goNext,
      goPrevious: goPrevious
    };

    var initStateIndex = 0;
    var notSection = -1;
    var notSubSection = -1;
    var notTitle = '';
    var firstSection = 0;
    var firstSubSection = 0;

    var initSectionTitle = 'Introduction';
    var sectionStructure = ['Objectives', 'Animation', 'Practice Session'];


    var currentState = data[initStateIndex];

    var titleMaxLength = -1;
    var lastSection = currentState.sections.length - 1;
    var lastSubSection = sectionStructure.length - 1;

    var currentSetionTitle = initSectionTitle;

    var currentSectionState = {
      section: notSection,
      subSection: notSubSection
    }

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

    function getPreviousTitle() {
      var previousTitle;
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;

      if (isPreSection(sectionIndex, subSectionIndex)) {
        previousTitle = notTitle;
      } else if (isFirstSubSectionOfFirstSection(sectionIndex, subSectionIndex)) {
        previousTitle = initSectionTitle;
      } else if (!isFirstSection(sectionIndex) && isFirstSubSection(subSectionIndex)) {
        previousTitle = getSections()[sectionIndex - 1].name
      } else {
        previousTitle = getSectionStructure()[subSectionIndex - 1];
      }
      return previousTitle;
    }

    function getNextTitle() {
      var nextTitle;
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;

      if (isLastSubSectionOfLastSection(sectionIndex, subSectionIndex)) {
        nextTitle = notTitle;
      } else if (isPreSection(sectionIndex, subSectionIndex)) {
        nextTitle = getSections()[firstSection].name;
      } else if (isLastSubSection(subSectionIndex) && !isLastSection(sectionIndex)) {
        nextTitle = getSections()[sectionIndex + 1].name;
      } else {
        nextTitle = getSectionStructure()[subSectionIndex + 1];
      }
      return nextTitle;
    }


    function setCurrentSectionState(sectionIndex, subSectionIndex) {
      currentSectionState.section = sectionIndex;
      currentSectionState.subSection = subSectionIndex;
      console.log('Current section state');
      console.log(sectionIndex, subSectionIndex);
    }

    function gettitleMaxLengthSectionTitle(elemt) {
      var len = elemt.name.length;
      titleMaxLength = titleMaxLength < len ? len : titleMaxLength;
    }

    function gettitleMaxLength() {
      var sections = getSections();
      titleMaxLength = -1;
      sections.forEach(gettitleMaxLengthSectionTitle);
      return titleMaxLength;
    }

    function goNext() {
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;
      if (isPreSection(sectionIndex, subSectionIndex)) {
        setCurrentSectionState(firstSection, firstSubSection);
        return true;
      } else if (isLastSubSection(subSectionIndex) && !isLastSection(sectionIndex)) {
        setCurrentSectionState(sectionIndex + 1, firstSubSection);
        return true;
      } else if (!isLastSubSectionOfLastSection()) {
        setCurrentSectionState(sectionIndex, subSectionIndex + 1);
        return true;
      }
    }

    function goPrevious() {
      var sectionIndex = currentSectionState.section;
      var subSectionIndex = currentSectionState.subSection;
      if (isFirstSubSectionOfFirstSection(sectionIndex, subSectionIndex)) {
        setCurrentSectionState(notSection, notSubSection);
        return true;
      } else if (isFirstSubSection(subSectionIndex)) {
        setCurrentSectionState(sectionIndex - 1, firstSubSection);
        return true;
      } else {
        setCurrentSectionState(sectionIndex, subSectionIndex - 1);
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


    //AUX FUNCTIONS

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
      return section === notSection | subSection === notSubSection;
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


  }
})();

