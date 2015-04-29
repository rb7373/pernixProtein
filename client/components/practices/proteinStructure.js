//var data = {
//  id: 1,
//  name:"Protein Structure",
//  sections:[
//    {
//      name:"Polypeptide Chains",
//      objectives:[
//        "Identify the functional groups involved in peptide bond formation",
//        "Describe the limitations on polypeptide sequence variation"
//      ],
//      animation:"protein_structure_part1",
//      practiceSession:[
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the amino group.",
//          goal:"amino"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the carboxyl group.",
//          goal:"carboxyl"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the side chain.",
//          goal:"sideChain"
//        }
//      ]
//    },
//    {
//      name:"Secondary Structure",
//      objectives:[
//        "Explain why the rotational freedom of a polypeptide is restricted",
//        "Recognize the hydrogen bonding patterns of secondary structures such as alpha helices and beta sheets"
//      ],
//      animation:"protein_structure_part1",
//      practiceSession:[
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the amino group.",
//          goal:"amino"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the carboxyl group.",
//          goal:"carboxyl"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the side chain.",
//          goal:"sideChain"
//        }
//      ]
//    },
//    {
//      name:"Three-dimensional Structure",
//      objectives:[
//        "Locate regular and irregular backbone structures",
//        "Compare ball-and-stick, spacefilling, and ribbon models of protein structure",
//        "Distinguish tertiary and quaternary structure"
//      ],
//      animation:"secondary structure",
//      practiceSession:[
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the amino group.",
//          goal:"amino"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the carboxyl group.",
//          goal:"carboxyl"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the side chain.",
//          goal:"sideChain"
//        }
//      ]
//    },
//    {
//      name:"Protein Families",
//      objectives:[
//        "Recognize that different amino acid sequences can form similar structures",
//        "Identify the key residues in coiled coils and in collagen"
//
//      ],
//      animation:"secondary structure",
//      practiceSession:[
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the amino group.",
//          goal:"amino"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the carboxyl group.",
//          goal:"carboxyl"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the side chain.",
//          goal:"sideChain"
//        }
//      ]
//    },
//    {
//      name:"Protein Stability",
//      objectives:[
//        "Describe protein structure in terms of the hydrophobic effect",
//        "Identify different types of intramolecular forces that help stabilize proteins",
//        "Describe how changing salt concentration or pH can alter protein structure",
//        "Explain why a protein’s structure must be somewhat flexible"
//      ],
//      animation:"protein_structure_part1",
//      practiceSession:[
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the amino group.",
//          goal:"amino"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the carboxyl group.",
//          goal:"carboxyl"
//        },
//        {
//          PDB:"threonine",
//          instructions: "Click an atom in the side chain.",
//          goal:"sideChain"
//        }
//      ]
//    },
//  ]
//}
//
//Jmol._isAsync = false;
//
//var jmolApplet0;
//
//var Info = {
//  debug: false,
//  color: "0xFFFFFF",
//  addSelectionOptions: false,
//  use: "HTML5",
//  j2sPath: "src/JSmol/j2s",
//  isSigned: true,
//  script: "",
//  serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
//  readyFunction: InitializeActivity,
//  disableJ2SLoadMonitor: true,
//  disableInitialConsole: true,
//  allowJavaScript: true
//}
//
//var goal = "none";
//var groupChosen = false;
//var oldGroup = "none";
//var retried = false;
//var allGlow = false;
//
//var correct = "Correct!";
//var incorrect = "Try again.";
//var complete = "Great! You found all the groups in threonine.";
//
//var defaultC = '#9b9b9b';
//var defaultO = '#e24500';
//var defaultN = '#0076db';
//var defaultH = '#ddd';
//var glowC = '#e3e3e3';
//var glowO = '#ff7537';
//var glowN = '#5dbfe3';
//var glowH = '#ffffff';
//
//// start the practice session, load Jmol
//function StartPracticeSession()
//{
//  Info.width = $("#practice_session").width();
//  Info.height = $("#practice_session").height();
//  Info.script ="load data/PDB/" + data.sections[currentSection].practiceSession[stage].PDB + ".pdb";
//
//  $("#practice_session").append(Jmol.getAppletHtml("jmolApplet0", Info));
//  $("#practice_session #jmolApplet0_appletinfotablediv").css("z-index", 0);
//
//  Jmol.script(jmolApplet0,'background IMAGE "images/background.jpg";');
//  Jmol.script(jmolApplet0,'set specular 10; set specularPower 50; set specularExponent 2;  label off; monitor off; set frank off; set ambient 90; set diffuse 90; select none; selectionHalos ON; measure OFF; set picking ON;');
//  Jmol.script(jmolApplet0,'zoom 60; rotate z 30; rotate -y 0; rotate x 10;');
//
//  if (isPlatform.iOS()) {
//    Jmol.script(jmolApplet0,'set platformSpeed 1; set minPixelSelRadius 40;');
//  } else if (isPlatform.mobile()) {
//    Jmol.script(jmolApplet0,'set minPixelSelRadius 15;');
//  }
//
//  Jmol.script(jmolApplet0,'set PickCallback "ClickAtom";');
//  FormatColors();
//  SetDefaultColors(true);
//  SetupDrag();
//}
//
//// start the activity the first time once Jmol is loaded
//function InitializeActivity()
//{
//  StartStage();
//}
//
//function StartStage() {
//
//  goal = data.sections[currentSection].practiceSession[stage].goal;
//  SetHalos("none");
//  SetColors("none");
//  groupChosen = false;
//
//  if (stage == 0 && retried) {
//    Jmol.script(jmolApplet0,'rotate SPIN y 0');
//  }
//
//}
//
//// format colors the way Jmol likes them
//function FormatColors ()
//{
//  defaultC = FormatColor(defaultC);
//  defaultO = FormatColor(defaultO);
//  defaultN = FormatColor(defaultN);
//  defaultH = FormatColor(defaultH);
//  glowC = FormatColor(glowC);
//  glowO = FormatColor(glowO);
//  glowN = FormatColor(glowN);
//  glowH = FormatColor(glowH);
//}
//
//// '#FFFFFF' to '[xFFFFFF]'
//function FormatColor (color)
//{
//  return '[x' + color.split('#')[1] + ']';
//}
//
//// set all the atom colors to default or glowing
//function SetDefaultColors (defaultColors)
//{
//  if (defaultColors)
//  {
//    Jmol.script(jmolApplet0,'color carbon ' + defaultC);
//    Jmol.script(jmolApplet0,'color oxygen ' + defaultO);
//    Jmol.script(jmolApplet0,'color nitrogen ' + defaultN);
//    Jmol.script(jmolApplet0,'color hydrogen ' + defaultH);
//  }
//  else
//  {
//    Jmol.script(jmolApplet0,'color carbon ' + glowC);
//    Jmol.script(jmolApplet0,'color oxygen ' + glowO);
//    Jmol.script(jmolApplet0,'color nitrogen ' + glowN);
//    Jmol.script(jmolApplet0,'color hydrogen ' + glowH);
//  }
//  allGlow = !defaultColors;
//}
//
//// if an atom is clicked, see if it is correct
//function ClickAtom (jsmolWindow, atomStats, atomNumber)
//{
//  CloseDrag();
//
//  if (goal != "none")
//  {
//    var group = GetGroup(atomNumber);
//    if (group == goal)
//    {
//      SetColors(group);
//      SetHalos(group);
//      groupChosen = true;
//      ShowResults(true);
//    }
//    else
//    {
//      SetColors(group);
//      setTimeout(function () { SetColors("none"); }, 1000);
//      SetHalos("none");
//      groupChosen = false;
//      ShowResults(false);
//    }
//  }
//}
//
//// give feedback depending on correctness
//function ShowResults (right)
//{
//  if (right && stage == data.sections[currentSection].practiceSession.length - 1) {
//    Jmol.script(jmolApplet0,'rotate SPIN y 150');
//    setTimeout(function () { Jmol.script(jmolApplet0,'rotate SPIN y 0'); }, 5000);
//    goal = "none";
//  }
//  FinishedStage(right);
//}
//
//// get the functional group for an atom
//function GetGroup (atomN)
//{
//  if (atomN == 8 || atomN == 13 || atomN == 14 || atomN == 16)
//  {
//    return "amino";
//  }
//  else if (atomN >= 5 && atomN <= 7)
//  {
//    return "carboxyl";
//  }
//  else if (atomN <= 2 || (atomN >= 9 && atomN <= 12) || atomN == 15)
//  {
//    return "sideChain";
//  }
//  else if (atomN == 4)
//  {
//    return "hydrogen";
//  }
//  else
//  {
//    return "none";
//  }
//}
//
//// change the colors of atoms in a functional group to default or glowing
//function SetColors(newGroup)
//{
//  if (newGroup != oldGroup && !allGlow)
//  {
//    if (oldGroup == "amino")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[6][7] ' + defaultH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[9] ' + defaultH);
//      Jmol.script(jmolApplet0,'color (nitrogen)[1] ' + defaultN);
//    }
//    else if (oldGroup == "carboxyl")
//    {
//      Jmol.script(jmolApplet0,'color (carbon)[4] ' + defaultC);
//      Jmol.script(jmolApplet0,'color (oxygen)[1][2] ' + defaultO);
//    }
//    else if (oldGroup == "sideChain")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[1] ' + defaultH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[3][5] ' + defaultH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[8] ' + defaultH);
//      Jmol.script(jmolApplet0,'color (carbon)[1][2] ' + defaultC);
//      Jmol.script(jmolApplet0,'color (oxygen)[3] ' + defaultO);
//    }
//    else if (oldGroup == "hydrogen")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[2] ' + defaultH);
//    }
//
//    if (newGroup == "amino")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[6][7] ' + glowH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[9] ' + glowH);
//      Jmol.script(jmolApplet0,'color (nitrogen)[1] ' + glowN);
//    }
//    else if (newGroup == "carboxyl")
//    {
//      Jmol.script(jmolApplet0,'color (carbon)[4] ' + glowC);
//      Jmol.script(jmolApplet0,'color (oxygen)[1][2] ' + glowO);
//    }
//    else if (newGroup == "sideChain")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[1] ' + glowH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[3][5] ' + glowH);
//      Jmol.script(jmolApplet0,'color (hydrogen)[8] ' + glowH);
//      Jmol.script(jmolApplet0,'color (carbon)[1][2] ' + glowC);
//      Jmol.script(jmolApplet0,'color (oxygen)[3] ' + glowO);
//    }
//    else if (newGroup == "hydrogen")
//    {
//      Jmol.script(jmolApplet0,'color (hydrogen)[2] ' + glowH);
//    }
//
//    oldGroup = newGroup;
//  }
//}
//
//// show or hide halos around atoms
//function SetHalos (newGroup)
//{
//  Jmol.script(jmolApplet0,'select none; label off; monitor off; set frank off; ');
//  if (newGroup == "amino")
//  {
//    Jmol.script(jmolApplet0,'select (hydrogen)[6][7]');
//    Jmol.script(jmolApplet0,'select add (hydrogen)[9]');
//    Jmol.script(jmolApplet0,'select add (nitrogen)[1]');
//  }
//  else if (newGroup == "carboxyl")
//  {
//    Jmol.script(jmolApplet0,'select (carbon)[4]');
//    Jmol.script(jmolApplet0,'select add (oxygen)[1][2]');
//  }
//  else if (newGroup == "sideChain")
//  {
//    Jmol.script(jmolApplet0,'select (hydrogen)[1]');
//    Jmol.script(jmolApplet0,'select add (hydrogen)[3][5]');
//    Jmol.script(jmolApplet0,'select add (hydrogen)[8]');
//    Jmol.script(jmolApplet0,'select add (carbon)[1][2]');
//    Jmol.script(jmolApplet0,'select add (oxygen)[3]');
//  }
//  else if (newGroup == "hydrogen")
//  {
//    Jmol.script(jmolApplet0,'select add (hydrogen)[2]');
//  }
//}
//
