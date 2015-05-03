'use strict';

var _ = require('lodash');

// Get list of dataSections
exports.index = function(req, res) {
  res.json(data);
};

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
