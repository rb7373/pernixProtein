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

    var initSectionTitle = 'Introdution';
    var sectionStructure = ['Objectives', 'Animation', 'Practice Session'];
    var currentStateIndex = 0;
    var currentSectionIndex = 0;
    var currentSectionIndexTag = 0;
    var currentSectionTitle = initSectionTitle;
    var currentState = data[currentStateIndex];
    var currentSection = currentState.sections[currentSectionIndex];


    var service = {
      loadAll: loadAll,
      getCurrentStateName: getCurrentStateName,
      getCurrentSectionName: getCurrentSectionName,
      getSections: getSections,
      getCurrentSection: getCurrentSection,
      getCurrentSectionTitle: getCurrentSectionTitle,
      getNextSectionTitle: getNextSectionTitle,
      getNextSection: getNextSection,
      getPreviosSection: getPreviosSection,
      updateCurrentSection: updateCurrentSection
    };

    return service;


    ////////////////

    function getCurrentSectionIndex(){
      return currentSectionIndex;
    }

    function loadAll(){
      return $q.when(data);
    }

    function getCurrentStateName(){
      return currentState.name;
    }

    function getCurrentSectionName(){
      return currentSection.name;
    }

    function getSections(){
      return currentState.sections;
    }

    function getCurrentSection(){
      return currentState.sections[currentSectionIndex];
    }

    function getCurrentSectionTitle(){
      var previosSection = getPreviosSection();
      var currentTitle = previosSection != null ? getCurrentSection().name : initSectionTitle;
      return currentTitle;
    }

    function getNextSectionTitle(){
      var previosSection = getPreviosSection();
      var currentTitle = previosSection != null ? getCurrentSection().name : initSectionTitle;
      return currentTitle;
    }

    function getNextSection(){
      var nextSection = currentSectionIndex == (currentState.sections.length -1) == currentSectionIndex ?
        null : currentState.sections[currentSectionIndex + 1];
      return nextSection;
    }

    function getPreviosSection(){
      var previosSection = currentSectionIndex == 0 ?
        null : currentState.sections[currentSectionIndex - 1];
      return previosSection;
    }

    function updateCurrentSection(){

    }

  }
})();

