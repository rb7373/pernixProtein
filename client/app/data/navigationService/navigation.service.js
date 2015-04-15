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
      getMaxLen: getMaxLen
    };

    var initSectionTitle = 'Introdution';
    var sectionStructure = ['Objectives', 'Animation', 'Practice Session'];
    var initStateIndex = 0;
    var initIndexSection = 0;
    var initIndexSubSection = 0;

    var maxLen = undefined;

    var currentState = data[initStateIndex];

    var currentSetionTitle = initSectionTitle;

    return service;

    ////////////////


    function getMaxLen(){
      var sections = getSections();
      maxLen = -1;
      sections.forEach(
        function(elemt){
          var len = elemt.name.length;
          maxLen = maxLen < len ? len : maxLen;
        }
      );
      console.log(maxLen);
      return maxLen;
    }


    function loadAll() {
      return $q.when(data);
    }

    function getNextSubSectionIndex(){
      var nextSubSectionIndex = currentSubSectionIndex == 2 ? 0 : currentSubSectionIndex++;
      return nextSubSectionIndex;
    }

    function getPreviosSubSectionIndex(){
      var previosSubSectionIndex = currentSubSectionIndex == 0 ? 0 : currentSubSectionIndex--;
    }

    function getSections() {
      return currentState.sections;
    }

    function getCurrentStateTitle(){
      return currentState.name;
    }

    function getSectionStructure(){
      return sectionStructure;
    }

  }
})();

