var data = {
        id: 1,
        name:"Protein Structure",
        sections:[
            {
                name:"Polypeptide Chains",
                objectives:[
                    "Identify the functional groups involved in peptide bond formation",
                    "Describe the limitations on polypeptide sequence variation"
                ],
                animation:"protein_structure_part1",
                practiceSession:[
                    {
                        PDB:"threonine",
                        instructions: "Click on an atom in the amino group.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"amino",
                        highlightAnswer:true
                    },
                    {
                        PDB:"threonine",
                        instructions: "Click on an atom in the carboxyl group.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"carboxyl",
                        highlightAnswer:true
                    },
                    {
                        PDB:"threonine",
                        instructions: "Click on an atom in the side chain.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"sideChain",
                        highlightAnswer:true
                    },
                    {
                        PDB:"serValAsnCys",
                        instructions: "Highlight all of the peptide bonds by clicking the carbonyl carbon and the N-H nitrogen.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"peptideBonds",
                        highlightAnswer:true
                    },
                    {
                        PDB:"serValAsnCys",
                        instructions: "Click on the N-terminus.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"nterminus",
                        highlightAnswer:true
                    },
                    {
                        PDB:"serValAsnCys",
                        instructions: "Click on the C-terminus.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"cterminus",
                        highlightAnswer:true
                    }
                ]
            },
            {
                name:"Secondary Structure",
                objectives:[
                    "Explain why the rotational freedom of a polypeptide is restricted",
                    "Recognize the hydrogen bonding patterns of secondary structures such as alpha helices and beta sheets"
                ],
                animation:"protein_structure_part2",
                practiceSession:[
                    {
                        PDB:"helix",
                        instructions: "Draw 4 hydrogen bonds by clicking a donor or acceptor and then clicking its partner.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"helixHbonds",
                        highlightAnswer:true
                    },
                    {
                        PDB:"helix",
                        instructions: "Click on a backbone atom that COULD be a hydrogen bond donor or acceptor for the alpha helix but is not currently forming a hydrogen bond.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"helixEnd",
                        highlightAnswer:true
                    },
                    {
                        PDB:"helix",
                        instructions: "How many residues are in this structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        highlightAnswer:false,
                        inputField:true,
                        answer:"16",
                        answerLabel:"residues"
                    },
                    {
                        PDB:"antiparallelSheet",
                        instructions: "Drag the strands together to make a beta sheet.",
                        navigation:"Drag to rotate, use mousewheel to zoom. Click a chain to select and move it, click again to deselect.",
                        goal:"dragAntiparallel",
                        trackMouse:true,
                        highlightAnswer:false
                    },
                    {
                        PDB:"parallelSheet",
                        instructions: "Drag the strands together to make a beta sheet.",
                        navigation:"Drag to rotate, use mousewheel to zoom. Click a chain to select and move it, click again to deselect.",
                        goal:"dragParallel",
                        trackMouse:true,
                        highlightAnswer:false
                    },
                    {
                        PDB:"bigAntiparallelSheet",
                        instructions: "How many strands make up this beta sheet?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        highlightAnswer:false,
                        inputField:true,
                        answer:"6",
                        answerLabel:"strands"
                    },
                    {
                        PDB:"bigAntiparallelSheet",
                        instructions: "Click on an atom in the N-terminal residue of each strand.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"sheetNterminals",
                        highlightAnswer:true
                    },
                    {
                        PDB:"bigAntiparallelSheet",
                        instructions: "What is the orientation of this beta sheet?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        highlightAnswer:false,
                        multipleChoice:true,
                        answers:[
                            "anti-parallel",
                            "parallel"
                        ],
                        correct:0
                    },
                    {
                        PDB:"bigAntiparallelSheet",
                        instructions: "Click on a backbone atom that COULD be a hydrogen bond donor or acceptor for the beta sheet  but is not currently forming a hydrogen bond.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"sheetEnd",
                        highlightAnswer:true
                    }
                ]
            },
             {
                name:"Three-dimensional Structure",
                objectives:[
                    "Locate regular and irregular backbone structures",
                    "Compare ball-and-stick, spacefilling, and ribbon models of protein structure",
                    "Distinguish tertiary and quaternary structure"
                ],
                animation:"secondary structure",
                practiceSession:[
                    {
                        PDB:"p2AWF",
                        instructions: "Click on a beta strand.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"beta",
                        highlightAnswer:false
                    },
                    {
                        PDB:"p2AWF",
                        instructions: "Click on an irregular structure.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"irregular",
                        highlightAnswer:false
                    },
                    {
                        PDB:"p2AWF",
                        instructions: "Click on an alpha helix.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"alpha",
                        highlightAnswer:false
                    },
                    {
                        PDB:"p2AWF",
                        instructions: "Click on the alpha helices and beta strands in order from the N-terminus to the C-terminus.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"rainbow",
                        highlightAnswer:false
                    },
                    {
                        PDB:"p1ERA",
                        instructions: "This structure is mostly:",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "alpha",
                            "beta",
                            "alpha and beta",
                            "irregular"
                        ],
                        correct:1
                    },
                    {
                        PDB:"p1IVA",
                        instructions: "This structure is mostly:",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "alpha",
                            "beta",
                            "alpha and beta",
                            "irregular"
                        ],
                        correct:3
                    },
                    {
                        PDB:"p1O22",
                        instructions: "This structure is mostly:",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "alpha",
                            "beta",
                            "alpha and beta",
                            "irregular"
                        ],
                        correct:2
                    },
                    {
                        PDB:"p1EQ1",
                        instructions: "This structure is mostly:",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "alpha",
                            "beta",
                            "alpha and beta",
                            "irregular"
                        ],
                        correct:0
                    },
                    {
                        PDB:"p1O5J",
                        instructions: "Does this protein have quaternary structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    },
                    {
                        PDB:"p3PGK",
                        instructions: "Does this protein have quaternary structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:1
                    },
                    {
                        PDB:"p1XQO",
                        instructions: "Does this protein have quaternary structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:1
                    },
                    {
                        PDB:"p1IJQ",
                        instructions: "Does this protein have quaternary structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:1
                    },
                    {
                        PDB:"p1FPY",
                        instructions: "Does this protein have quaternary structure?",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    }
                ]
            },
              {
                name:"Protein Families",
                objectives:[
                    "Recognize that different amino acid sequences can form similar structures",
                    "Identify the key residues in coiled coils and in collagen"

                ],
                animation:"secondary structure",
                practiceSession:[
                    {
                        PDB:"none",
                        instructions: "How many amino acids are the same in the sequence of these proteins?",
                        navigation:"",
                        goal:"none",
                        image:"module1-01",
                        highlightAnswer:false,
                        inputField:true,
                        answer:"4",
                        answerLabel:"amino acids"
                    },
                    {
                        PDB:"GCN4",
                        instructions: "Click on two contacting residues at the interface between the coiled coils.",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"contacting",
                        highlightAnswer:true
                    },
                    {
                        PDB:"collagen",
                        instructions: "Click on a glycine residue in collagen",
                        navigation:"Drag to rotate, use mousewheel to zoom.",
                        goal:"glycine",
                        highlightAnswer:true
                    }
                ]
            },
              {
                name:"Protein Stability",
                objectives:[
                    "Describe protein structure in terms of the hydrophobic effect",
                    "Identify different types of intramolecular forces that help stabilize proteins",
                    "Describe how changing salt concentration or pH can alter protein structure",
                    "Explain why a protein’s structure must be somewhat flexible"
                ],
                animation:"protein_structure_part1",
                practiceSession:[
                    {
                        PDB:"p2PAH",
                        instructions: "What type of stabilizing interaction is this?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "electrostatic interaction",
                            "hydrogen bond",
                            "disulfide bond",
                            "London dispersion forces"
                        ],
                        correct:0
                    },
                    {
                        PDB:"p2PAH",
                        instructions: "Would a pH change disrupt this interaction?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    },
                    {
                        PDB:"p2PAH",
                        instructions: "What type of stabilizing interaction is this?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "electrostatic interaction",
                            "hydrogen bond",
                            "disulfide bond",
                            "London dispersion forces"
                        ],
                        correct:3
                    },
                    {
                        PDB:"p2PAH",
                        instructions: "What type of stabilizing interaction is this?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "electrostatic interaction",
                            "hydrogen bond",
                            "disulfide bond",
                            "London dispersion forces"
                        ],
                        correct:1
                    },
                    {
                        PDB:"lysozyme",
                        instructions: "What type of stabilizing interaction is this?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "electrostatic interaction",
                            "hydrogen bond",
                            "disulfide bond",
                            "London dispersion forces"
                        ],
                        correct:2
                    },
                    {
                        PDB:"lysozyme",
                        instructions: "Would a change in salt concentration disrupt this interaction?",
                        navigation:"Drag to rotate.",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:1
                    },
                    {
                        PDB:"none",
                        instructions: "Which amino acid residue is more likely to be located on the protein surface?",
                        navigation:"",
                        image:"module1-02",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "alanine",
                            "asparagine"
                        ],
                        correct:1
                    },
                    {
                        PDB:"none",
                        instructions: "Which amino acid residue is more likely to be located on the protein surface?",
                        navigation:"",
                        image:"module1-03",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "phenylalanine",
                            "glutamate"
                        ],
                        correct:1
                    },
                    {
                        PDB:"none",
                        instructions: "Which amino acid residue is more likely to be located on the protein surface?",
                        navigation:"",
                        image:"module1-04",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "lysine",
                            "valine"
                        ],
                        correct:0
                    },
                    {
                        PDB:"none",
                        instructions: "Could addition of a phosphate group cause a protein's conformation to shift?",
                        navigation:"",
                        image:"none",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    },
                    {
                        PDB:"none",
                        instructions: "Could binding a small molecule cause a protein's conformation to shift?",
                        navigation:"",
                        image:"none",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    },
                    {
                        PDB:"none",
                        instructions: "Could catalyzing a chemical reaction cause a protein's conformation to shift?",
                        navigation:"",
                        image:"none",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:0
                    },
                    {
                        PDB:"none",
                        instructions: "Could moving from one side of the cell to the other cause a protein's conformation to shift?",
                        navigation:"",
                        image:"none",
                        goal:"none",
                        multipleChoice:true,
                        answers:[
                            "yes",
                            "no"
                        ],
                        correct:1
                    }
                ]
            },
        ]
}

Jmol._isAsync = false;

var jmolApplet0;

var Info = {
	debug: false,
	color: "0xFFFFFF",
	addSelectionOptions: false,
	use: "HTML5",
	j2sPath:"../JSmol/j2s",
	isSigned: true,
	script: "",
	serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
	readyFunction: StartStage,
	disableJ2SLoadMonitor: true,
    disableInitialConsole: true,
    allowJavaScript: true
}

var trackingMouse = false;
var lastMouse = {x:0, y:0};
var chainSelected = false;
var goal = "none";
var lastGroup = {group:"none", n:-1};
var retried = false;
var currentMol = "";
var pdbLoaded = false;
var bondAtomsSelected = 0;
var currentHbond = -1;
var hbondsMade = 0;
var nTermsSelected = 0;
var justLoadedPDB = false;
var lastStage = -1;
var cleanedUp = false;
var answeredCorrectly = false;
var currentSegment = -1;
var currentColor = 0;

var correct = "Correct!";
var incorrect = "Try again.";
var complete = "Great! You completed this section.";

var defaultColors = {
    C:'#9b9b9b',
    N:'#0076db',
    O:'#e24500',
    H:'#ddd'
};
var glowColors = {
    C:'#e3e3e3',
    N:'#5dbfe3',
    O:'#ff7537',
    H:'#ffffff'
};
var ignoreColor = '#7157cf';
var rainbowColors = [
    '#7157cf',
    '#1866a0',
    '#82a9bd',
    '#00a779',
    '#ffbb00',
    '#dd2101',
    '#df92ba'
];
var chainColors = [
    '#1866a0',
    '#dae3e5',
    '#7157cf',
    '#cfb5eb',
    '#82a9bd',
    '#bdd4a3',
    '#00a779',
    '#df92ba',
    '#673e84',
    '#46696c',
    '#dd2101',
    '#ffbb00'
];

// start the practice session, load Jmol
function StartPracticeSession()
{
    FormatColors();
    if (data.sections[currentSection].practiceSession[stage].PDB != "none") {
        LoadPDB();
    } else {
        currentMol = "none";
        StartStage();
    }
}

//
function LoadPDB()
{
    console.log("load " + data.sections[currentSection].practiceSession[stage].PDB);
    Info.width = $("#practice_session").width();
    Info.height = $("#practice_session").height();
    Info.script = 'load components/data/PDB/' + data.sections[currentSection].practiceSession[stage].PDB + '.pdb';
    currentMol = data.sections[currentSection].practiceSession[stage].PDB;

    pdbLoaded = true;
	$("#practice_session").append(Jmol.getAppletHtml("jmolApplet0", Info));
    $("#practice_session #jmolApplet0_appletinfotablediv").css("z-index", 0);

  Jmol.script(jmolApplet0,'background IMAGE "components/images/background.jpg";');
	Jmol.script(jmolApplet0,'set specular 10; set specularPower 50; set specularExponent 2; label off; monitor off; set frank off; set ambient 90; set diffuse 90; measure OFF; set picking ON; selectionHalos OFF; hide all');
	Jmol.script(jmolApplet0, molecules[currentMol].initTransform);

	if (isPlatform.iOS()) {
        Jmol.script(jmolApplet0,'set platformSpeed 1; set minPixelSelRadius 40;');
    } else if (isPlatform.mobile()) {
        Jmol.script(jmolApplet0,'set minPixelSelRadius 15;');
    }

    Jmol.script(jmolApplet0,'set PickCallback "ClickAtom";');
    SetDefaultColors(false);
    justLoadedPDB = true;
}

function StartStage()
{
    if (!data.sections[currentSection].practiceSession[stage].PDB != "none") {
        $("#loading").show();
    }

    if (!cleanedUp) {
        CleanUpLastStage();
        cleanedUp = true;
    }

    if (!pdbLoaded) {
        if (currentMol != data.sections[currentSection].practiceSession[stage].PDB) {
            $("#jmolApplet0_appletinfotablediv").remove();
            if (data.sections[currentSection].practiceSession[stage].PDB != "none") {
                LoadPDB();
                return;
            } else {
                currentMol = "none";
            }
        }
    }

    goal = data.sections[currentSection].practiceSession[stage].goal;
    lastStage = stage;

    SetUpStage();
}

//
function CleanUpLastStage ()
{
    $(".contentImage").remove();
    if (currentSection == 0) {
        if (lastStage == 3) {
            SetHighlight(false, {group:"c", n:-1});
            SetHighlight(false, {group:"n", n:-1});
        } else {
            SetHighlight(false, lastGroup);
        }
    }
    else if (currentSection == 1) {
        if (lastStage == 0) {
            SetHighlight(false, {group:"acceptor", n:-1});
            SetHighlight(false, {group:"donor", n:-1});
        }
        if (lastStage == 1) {
            SetHighlight(false, {group:"helixEnd", n:-1});
            Jmol.script(jmolApplet0,'selectionHalos OFF; select all; hbonds off;');
        }
        if (lastStage == 6) {
            for (group in molecules[currentMol].groups) {
                SetHighlight(false, {group:group, n:-1});
            }
        }
    }
    else if (currentSection == 2) {
        if (lastStage == 0 || lastStage == 1 || lastStage == 2) {
            SetHighlight(false, lastGroup);
        }
        if (lastStage == 3 && stage == 2) {
            Jmol.script(jmolApplet0,'select all; color ' + defaultColors["C"]);
        }
    }
    else if (currentSection == 4) {
        if (lastStage == 1) {
            Jmol.script(jmolApplet0,'select atomno = 397; label off;');
            Jmol.script(jmolApplet0,'select atomno = 852; label off;');
        }
    }
}

//
function SetUpStage ()
{
    if (data.sections[currentSection].practiceSession[stage].image) {
        LoadImage();
    }

    if (currentMol != "none") {
        Jmol.script(jmolApplet0,'selectionHalos OFF;');
    }

    if (currentSection == 0) {
        if (stage == 3 && retried) {
            for (group in molecules[currentMol].groups) {
                molecules[currentMol].groups[group][0].selected = false;
            }
            bondAtomsSelected = 0;
        }
    }
    else if (currentSection == 1) {
        if (stage == 0 && retried) {
            for (i = 0; i < molecules[currentMol].groups["acceptor"].length; i++) {
                molecules[currentMol].groups["acceptor"][i].selected = false;
            }
            for (i = 0; i < molecules[currentMol].groups["donor"].length; i++) {
                molecules[currentMol].groups["donor"][i].selected = false;
            }
            currentHbond = -1;
            hbondsMade = 0;
        }
        else if (stage == 2) {
        }
        else if (stage == 3) {
            Jmol.script(jmolApplet0,'select :C');
            Jmol.script(jmolApplet0,'translate selected y -100');
        }
        else if (stage == 4) {
            Jmol.script(jmolApplet0,'select :B');
            Jmol.script(jmolApplet0,'translate selected y -130');
        }
        else if (stage == 5) {
            Jmol.script(jmolApplet0,'select all; calculate hbonds;');
        }
        else if (stage == 6) {
            nTermsSelected = 0;
        }
        else if (stage == 7) {
        }
    }
    else if (currentSection == 2) {
        if (stage == 0) {
            Jmol.script(jmolApplet0,'ribbon only;');
        }
        else if (stage == 3) {
            Jmol.script(jmolApplet0,'ribbon only;');
            currentSegment = -1;
            currentColor = 0;
        }
        else if (stage >= 4) {
            Jmol.script(jmolApplet0,'ribbon only;');
            if (stage == 8) {
                Jmol.script(jmolApplet0,'select :A');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[0]);
                Jmol.script(jmolApplet0,'select :B');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[1]);
                Jmol.script(jmolApplet0,'select :C');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[2]);
            }
            else if (stage >= 9 && stage <= 11) {
                Jmol.script(jmolApplet0,'select :A');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[0]);
            }
            else if (stage == 12) {
                Jmol.script(jmolApplet0,'select :A');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[0]);
                Jmol.script(jmolApplet0,'select :B');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[1]);
                Jmol.script(jmolApplet0,'select :C');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[2]);
                Jmol.script(jmolApplet0,'select :D');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[3]);
                Jmol.script(jmolApplet0,'select :E');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[4]);
                Jmol.script(jmolApplet0,'select :F');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[5]);
                Jmol.script(jmolApplet0,'select :G');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[6]);
                Jmol.script(jmolApplet0,'select :H');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[7]);
                Jmol.script(jmolApplet0,'select :I');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[8]);
                Jmol.script(jmolApplet0,'select :J');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[9]);
                Jmol.script(jmolApplet0,'select :K');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[10]);
                Jmol.script(jmolApplet0,'select :L');
                Jmol.script(jmolApplet0, 'color atoms ' + chainColors[11]);
            }
        }
    }
    else if (currentSection == 3) {
        if (stage == 1) {
            Jmol.script(jmolApplet0,'center atomno = 1087, atomno = 1568');
            Jmol.script(jmolApplet0,'select backbone');
            Jmol.script(jmolApplet0, 'color atoms translucent 0.8 ' + ignoreColor);
            Jmol.script(jmolApplet0,'select none');
        }
        else if (stage == 2) {
            Jmol.script(jmolApplet0,'select :B');
            Jmol.script(jmolApplet0,'select add :C');
            Jmol.script(jmolApplet0, 'color atoms translucent 0.8 ' + ignoreColor);
            Jmol.script(jmolApplet0,'select none');
        }
    }
    else if (currentSection == 4) {
        if (stage == 0) {
            Jmol.script(jmolApplet0,'center atomno = 397, atomno = 852');
            Jmol.script(jmolApplet0,'select atomno = 397; label "+"; font label 54; set labeloffset -25 0; color label black;');
            Jmol.script(jmolApplet0,'select atomno = 852; label "-"; font label 54; set labeloffset 30 0; color label black;');
        }
        else if (stage == 1) {
            if (lastStage != 0) {
                Jmol.script(jmolApplet0,'center atomno = 397, atomno = 852');
                Jmol.script(jmolApplet0,'select atomno = 397; label "+"; font label 54; set labeloffset -25 0; color label black;');
                Jmol.script(jmolApplet0,'select atomno = 852; label "-"; font label 54; set labeloffset 30 0; color label black;');
            }
        }
        else if (stage == 2) {
            Jmol.script(jmolApplet0,'center atomno = 936; zoom 700; rotate z 0; rotate -y 50; rotate x 4;');
        }
        else if (stage == 3) {
            Jmol.script(jmolApplet0,'center atomno = 2295, atomno = 2412; select atomno = 2295, atomno = 2412; calculate hbonds;');
            Jmol.script(jmolApplet0,'zoom 700; rotate z 0; rotate y 100; rotate x 0;');
        }
        else if (stage == 4 || stage == 5) {
            Jmol.script(jmolApplet0,'center atomno = 601, atomno = 724;');
        }
    }

    if (currentMol != "none") {
        Jmol.script(jmolApplet0, 'hide none');
    }
    lastGroup = {group:"none", n:0};
    answeredCorrectly = false;

    if (data.sections[currentSection].practiceSession[stage].trackMouse) {
        trackingMouse = true;
        $("#jmolApplet0_canvas2d").mousedown(function(event) {
            if (trackingMouse) {
                lastMouse = GetMouse(event);
            }
        });
        $("#jmolApplet0_canvas2d").mousemove(function(event) {
            if (trackingMouse && chainSelected) {
                MoveChain(event);
            }
        });
    } else {
        trackingMouse = false;
    }
}

//
function LoadImage ()
{
    $("#loading").hide();
    if (data.sections[currentSection].practiceSession[stage].image != "none") {
        $("#practice_session").append('<img class="contentImage" src="data/images/' + data.sections[currentSection].practiceSession[stage].image + '.png">');
    }
}

// give feedback depending on correctness
function ShowResults (right, lastAtomNumber, lastAtomType)
{
    if (!right && currentMol != "none") {
        if (answeredCorrectly && data.sections[currentSection].practiceSession[stage].highlightAnswer) {
            Jmol.script(jmolApplet0,'selectionHalos OFF;');
        }
        if (lastAtomNumber > -1) {
            FlashAtom(lastAtomNumber, lastAtomType);
        }
    }
    FinishedStage(right, true);
}

function SetStageEnd ()
{
    var finished = (stage == data.sections[currentSection].practiceSession.length - 1);
    if (finished) {
        console.log(currentMol);
        if (currentMol != "none") {
            Jmol.script(jmolApplet0,'rotate SPIN y 150');
            setTimeout(function () { Jmol.script(jmolApplet0,'rotate SPIN y 0'); }, 5000);
        }
        goal = "none";
    }
    pdbLoaded = false;
    cleanedUp = false;
    justLoadedPDB = false;
    answeredCorrectly = true;
    if (data.sections[currentSection].practiceSession[stage].highlightAnswer) {
        Jmol.script(jmolApplet0,'selectionHalos ON;');
    }
}

function GetMouse(evt)
{
    return {
        x:evt.pageX - $("#jmolApplet0_canvas2d").offset().left,
        y:evt.pageY - $("#jmolApplet0_canvas2d").offset().top
    };
}

function MoveChain(evt)
{
    var currentMouse = GetMouse(evt);

    Jmol.script(jmolApplet0,'translate selected x ' + (currentMouse.x - lastMouse.x));
    Jmol.script(jmolApplet0,'translate selected y ' + (currentMouse.y - lastMouse.y));
    Jmol.script(jmolApplet0,'calculate hbonds');

    lastMouse = currentMouse;
}

// format colors the way Jmol likes them
function FormatColors ()
{
    for (type in defaultColors) {
        defaultColors[type] = FormatColor(defaultColors[type]);
        glowColors[type] = FormatColor(glowColors[type]);
    }
    ignoreColor = FormatColor(ignoreColor);
    for (i = 0; i < rainbowColors.length; i++) {
        rainbowColors[i] = FormatColor(rainbowColors[i]);
    }
    for (i = 0; i < chainColors.length; i++) {
        chainColors[i] = FormatColor(chainColors[i]);
    }
}

// '#FFFFFF' to '[xFFFFFF]'
function FormatColor (color)
{
    return '[x' + color.split('#')[1] + ']';
}

// set all the atom colors to default or glowing
function SetDefaultColors (glow)
{
    var colors = defaultColors;
    if (glow) {
        colors = glowColors;
    }
    Jmol.script(jmolApplet0,'color carbon ' + colors["C"]);
    Jmol.script(jmolApplet0,'color oxygen ' + colors["O"]);
    Jmol.script(jmolApplet0,'color nitrogen ' + colors["N"]);
    Jmol.script(jmolApplet0,'color hydrogen ' + colors["H"]);
}

// if an atom is clicked, see if it is correct
function ClickAtom (jsmolWindow, atomStats, number)
{
    var temp = atomStats.split("#");
    var temp0 = temp[1].split(" ");
    var atomNumber = parseInt(temp0[0]);

    var atomType = atomStats.substring(0,1);
    if (!molecules[currentMol].basedOnMol) {
        temp = atomStats.split(".");
        atomType = temp[1].substring(0,1);
    }

    console.log(atomNumber + " " + atomType);

    CloseDrag();

    if (goal != "none")
    {
        if (goal == "dragParallel")
        {
            if (!chainSelected) {
                temp = atomStats.split(":");
                temp0 = temp[1].split(".");

                Jmol.script(jmolApplet0,'select :' + temp0[0]);
            } else {
                Jmol.script(jmolApplet0,'select all');
                Jmol.script(jmolApplet0,'calculate hbonds');
                setTimeout(function () { GetHBonds(6); }, 300);
            }
            chainSelected = !chainSelected;
            return;
        }

        if (goal == "dragAntiparallel")
        {
            if (!chainSelected) {
                temp = atomStats.split(":");
                temp0 = temp[1].split(".");

                Jmol.script(jmolApplet0,'select :' + temp0[0]);
            } else {
                Jmol.script(jmolApplet0,'select all');
                Jmol.script(jmolApplet0,'calculate hbonds');
                setTimeout(function () { GetHBonds(6); }, 300);
            }
            chainSelected = !chainSelected;
            return;
        }

        var atomData = GetGroup(atomNumber);

        if (goal == "rainbow") {
            var i = 0;
            for (group in molecules[currentMol].groups) {
                if (group == atomData.group) {
                    if (i == currentSegment + 2) {
                        currentSegment += 2;
                        for (j = 0; j < molecules[currentMol].groups[atomData.group].length; j++) {
                            Jmol.script(jmolApplet0,'select atomno = ' + molecules[currentMol].groups[atomData.group][j].number);
                            Jmol.script(jmolApplet0, 'color atoms ' + rainbowColors[currentColor]);
                        }
                        currentColor++;
                        if (currentSegment >= 13) {
                            ShowResults(true);
                        }
                    }
                    else {
                        ShowResults(false, atomNumber, atomType);
                    }
                    break;
                }
                i++;
            }
            return;
        }

        if (goal == "irregular") {
            temp = atomData.group.split("_");
            if (temp[0] == "irreg") {
                SetHighlight(true, {group:atomData.group, n:-1});
                goal = "none";
                ShowResults(true);
            }
            else {
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }

        if (goal == "alpha") {
            temp = atomData.group.split("_");
            if (temp[0] == "alpha") {
                SetHighlight(true, {group:atomData.group, n:-1});
                goal = "none";
                ShowResults(true);
            }
            else {
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }

        if (goal == "beta") {
            temp = atomData.group.split("_");
            if (temp[0] == "beta") {
                SetHighlight(true, {group:atomData.group, n:-1});
                goal = "none";
                ShowResults(true);
            }
            else {
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }

        if (goal == "sheetNterminals") {
            if (atomData.group) {
                temp = atomData.group.split("_");
                if (temp[0] == "nTerminal") {
                    HideMessage();
                    SetHighlight(true, {group:atomData.group, n:-1});
                    nTermsSelected++;
                    if (nTermsSelected >= 6) {
                        for (group in molecules[currentMol].groups) {
                            if (group != "sheetEnd") {
                                SetSelection({group:group, n:-1}, false);
                            }
                        }
                        ShowResults(true);
                    }
                }
                else {
                    ShowResults(false, atomNumber, atomType);
                }
            } else {
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }

        if (goal == "helixHbonds")
        {
            if (atomData.group == "acceptor" || atomData.group == "donor")
            {
                HideMessage();

                if (currentHbond > -1)
                {
                    var other = "acceptor";
                    if (atomData.group == "acceptor") {
                        other = "donor";
                    }

                    if (atomData.n == currentHbond)
                    {
                        SetHighlight(true, atomData);
                        molecules[currentMol].groups[atomData.group][atomData.n].selected = true;
                        Jmol.script(jmolApplet0, 'select atomno = ' + molecules[currentMol].groups[other][atomData.n].number
                                   + ', atomno = ' + atomNumber);
                        Jmol.script(jmolApplet0,'calculate hbonds');
                        hbondsMade++;

                        if (hbondsMade >= 4) {
                            Jmol.script(jmolApplet0, 'select all; calculate hbonds;');
                            var command = "select ";
                            for (i = 0; i < molecules[currentMol].groups["acceptor"].length; i++) {
                                if (molecules[currentMol].groups["acceptor"][i].selected) {
                                    command += 'atomno = ' + molecules[currentMol].groups["acceptor"][i].number
                                    + ', atomno = ' + molecules[currentMol].groups["donor"][i].number + ', ';
                                }
                            }
                            Jmol.script(jmolApplet0, command.substring(0, command.length - 2));
                            ShowResults(true);
                        }
                    }
                    else {
                        SetHighlight(false, lastGroup);
                        molecules[currentMol].groups[lastGroup.group][lastGroup.n].selected = false;
                        ShowResults(false, atomNumber, atomType);
                    }
                    currentHbond = -1;
                }
                else if (!molecules[currentMol].groups[atomData.group][atomData.n].selected)
                {
                    SetHighlight(true, atomData);
                    molecules[currentMol].groups[atomData.group][atomData.n].selected = true;
                    currentHbond = atomData.n;
                }
            }
            else
            {
                if (currentHbond > -1) {
                    SetHighlight(false, lastGroup);
                    molecules[currentMol].groups[lastGroup.group][lastGroup.n].selected = false;
                    currentHbond = -1;
                }
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }

        if (goal == "peptideBonds")
        {
            if (atomData.group == "c" || atomData.group == "n")
            {
                HideMessage();

                SetHighlight(true, atomData);
                molecules[currentMol].groups[atomData.group][atomData.n].selected = true;
                bondAtomsSelected++;

                var other = "c";
                if (atomData.group == "c") {
                    other = "n";
                }

                if (molecules[currentMol].groups[other][atomData.n].selected) {
                    SetSelection(atomData, false);
                    SetSelection({group:other, n:atomData.n}, false);
                }

                if (bondAtomsSelected == 6) {
                    SetSelection({group:atomData.group, n:-1}, true);
                    SetSelection({group:other, n:-1}, false);
                    ShowResults(true);
                }
            }
            else
            {
                ShowResults(false, atomNumber, atomType);
            }
            return;
        }
        console.log(atomData.group + " = " + goal);
        if (atomData.group == goal)
        {
            SetHighlight(false, lastGroup);
            SetHighlight(true, {group:atomData.group, n:-1});
            SetSelection({group:atomData.group, n:-1}, true);
            ShowResults(true);
        }
        else
        {
            SetHighlight(false, lastGroup);
            ShowResults(false, atomNumber, atomType);
        }
    }
}

// get the functional group and index for an atom
function GetGroup (atomN)
{
    for (group in molecules[currentMol].groups) {
        for (i = 0; i < molecules[currentMol].groups[group].length; i++) {
            if (molecules[currentMol].groups[group][i].number == atomN) {
                return {group:group, n:i};
            }
        }
    }
    return "none";
}

// change the colors of atoms in a functional group
function SetHighlight (highlight, newGroup)
{
    var colors = defaultColors;
    if (highlight) {
        colors = glowColors;
    }

    if (newGroup.group != "none") {
        if (newGroup.n == -1) {
            for (i = 0; i < molecules[currentMol].groups[newGroup.group].length; i++) {
                Jmol.script(jmolApplet0,'select atomno = ' + molecules[currentMol].groups[newGroup.group][i].number);
                Jmol.script(jmolApplet0, 'color atoms ' + colors[molecules[currentMol].groups[newGroup.group][i].type]);
            }
        }
        else {
            Jmol.script(jmolApplet0,'select atomno = ' + molecules[currentMol].groups[newGroup.group][newGroup.n].number);
            Jmol.script(jmolApplet0, 'color atoms ' + colors[molecules[currentMol].groups[newGroup.group][newGroup.n].type]);
        }
    }
    lastGroup = newGroup;
}

function FlashAtom (atomNumber, atomType)
{
    Jmol.script(jmolApplet0,'select atomno = ' + atomNumber);
    Jmol.script(jmolApplet0, 'color atoms ' + glowColors[atomType]);
    setTimeout(function () {
        Jmol.script(jmolApplet0,'select atomno = ' + atomNumber);
        Jmol.script(jmolApplet0, 'color atoms ' + defaultColors[atomType]);
        SetSelection(lastGroup, true);
    }, 300);
}

// select or deselect atoms
function SetSelection (newGroup, deselectOld)
{
    if (deselectOld) {
	   Jmol.script(jmolApplet0,'select none;');
    }

    if (newGroup.group != "none") {
        var command = "select ";
        if (!deselectOld) {
            command += "add ";
        }
        if (newGroup.n == -1) {
            for (i = 0; i < molecules[currentMol].groups[newGroup.group].length; i++) {
                if (i == 1 && deselectOld) {
                    command += "add ";
                }
                Jmol.script(jmolApplet0, command + 'atomno = ' + molecules[currentMol].groups[newGroup.group][i].number);
            }
        }
        else {
            Jmol.script(jmolApplet0, command + 'atomno = ' + molecules[currentMol].groups[newGroup.group][newGroup.n].number);
        }
    }
}

function GetHBonds (goalHBonds)
{
    var num = 0;
    var bondInfo = Jmol.getPropertyAsArray(jmolApplet0, "bondinfo");
    for (i = 0; i < bondInfo.length; i++) {
        if (bondInfo[i].type == "hbond") {
            num++;
        }
    }
    if (num >= goalHBonds) {
        ShowResults(true);
    } else {
        ShowResults(false);
    }
}

var molecules = {
    threonine:{
        initTransform:'zoom 60; rotate z 30; rotate -y 0; rotate x 10;',
        basedOnMol: true,
        groups:{
            amino:[
                {
                    number:9,
                    type:"N"
                },
                {
                    number:14,
                    type:"H"
                },
                {
                    number:15,
                    type:"H"
                },
                {
                    number:17,
                    type:"H"
                }
            ],
            carboxyl:[
                {
                    number:6,
                    type:"C"
                },
                {
                    number:7,
                    type:"O"
                },
                {
                    number:8,
                    type:"O"
                }
            ],
            sideChain:[
                {
                    number:1,
                    type:"C"
                },
                {
                    number:2,
                    type:"C"
                },
                {
                    number:10,
                    type:"O"
                },
                {
                    number:11,
                    type:"H"
                },
                {
                    number:12,
                    type:"H"
                },
                {
                    number:13,
                    type:"H"
                },
                {
                    number:16,
                    type:"H"
                }
            ],
            hydrogen:[
                {
                    number:5,
                    type:"H"
                }
            ],
            alpha:[
                {
                    number:4,
                    type:"C"
                }
            ]
        }
    },
    serValAsnCys:{
        initTransform:'zoom 60; rotate z 20; rotate y 10; rotate x 55;',
        basedOnMol: true,
        groups:{
            c:[
                {
                    number:4,
                    type:"C",
                    selected:false
                },
                {
                    number:19,
                    type:"C",
                    selected:false
                },
                {
                    number:33,
                    type:"C",
                    selected:false
                }
            ],
            n:[
                {
                    number:28,
                    type:"N",
                    selected:false
                },
                {
                    number:42,
                    type:"N",
                    selected:false
                },
                {
                    number:54,
                    type:"N",
                    selected:false
                }
            ],
            nterminus:[
                {
                    number:6,
                    type:"N"
                },
                {
                    number:10,
                    type:"H"
                },
                {
                    number:11,
                    type:"H"
                },
                {
                    number:13,
                    type:"H"
                }
            ],
            cterminus:[
                {
                    number:47,
                    type:"C"
                },
                {
                    number:48,
                    type:"O"
                },
                {
                    number:53,
                    type:"O"
                }
            ]
        }
    },
    helix:{
        initTransform:'zoom 80; rotate z 0; rotate y 45; rotate x 0;',
        basedOnMol: false,
        groups:{
            donor:[
                {
                    number:34,
                    type:"N",
                    selected:false
                },
                {
                    number:42,
                    type:"N",
                    selected:false
                },
                {
                    number:51,
                    type:"N",
                    selected:false
                },
                {
                    number:58,
                    type:"N",
                    selected:false
                },
                {
                    number:66,
                    type:"N",
                    selected:false
                },
                {
                    number:74,
                    type:"N",
                    selected:false
                },
                {
                    number:82,
                    type:"N",
                    selected:false
                },
                {
                    number:90,
                    type:"N",
                    selected:false
                },
                {
                    number:98,
                    type:"N",
                    selected:false
                },
                {
                    number:107,
                    type:"N",
                    selected:false
                },
                {
                    number:114,
                    type:"N",
                    selected:false
                },
                {
                    number:122,
                    type:"N",
                    selected:false
                }
            ],
            acceptor:[
                {
                    number:4,
                    type:"O",
                    selected:false
                },
                {
                    number:12,
                    type:"O",
                    selected:false
                },
                {
                    number:21,
                    type:"O",
                    selected:false
                },
                {
                    number:29,
                    type:"O",
                    selected:false
                },
                {
                    number:37,
                    type:"O",
                    selected:false
                },
                {
                    number:45,
                    type:"O",
                    selected:false
                },
                {
                    number:54,
                    type:"O",
                    selected:false
                },
                {
                    number:61,
                    type:"O",
                    selected:false
                },
                {
                    number:69,
                    type:"O",
                    selected:false
                },
                {
                    number:77,
                    type:"O",
                    selected:false
                },
                {
                    number:85,
                    type:"O",
                    selected:false
                },
                {
                    number:93,
                    type:"O",
                    selected:false
                }
            ],
            helixEnd:[
                {
                    number:101,
                    type:"O"
                },
                {
                    number:110,
                    type:"O"
                },
                {
                    number:117,
                    type:"O"
                },
                {
                    number:26,
                    type:"N"
                },
                {
                    number:18,
                    type:"N"
                },
                {
                    number:9,
                    type:"N"
                }
            ]
        }
    },
    antiparallelSheet:{
        initTransform:'zoom 70; rotate -z 6; rotate y 0; rotate x 0; translate y 10;',
        basedOnMol: false,
        groups:{}
    },
    parallelSheet:{
        initTransform:'zoom 70; rotate z 40; rotate y 20; rotate x 20; translate y 20;',
        basedOnMol: false,
        groups:{}
    },
    bigAntiparallelSheet:{
        initTransform:'zoom 60; rotate -z 8; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{
            nTerminal_1:[
                {
                    number:1,
                    type:"N"
                },
                {
                    number:2,
                    type:"C"
                },
                {
                    number:3,
                    type:"C"
                },
                {
                    number:4,
                    type:"O"
                },
                {
                    number:5,
                    type:"C"
                },
                {
                    number:6,
                    type:"C"
                },
                {
                    number:7,
                    type:"C"
                },
                {
                    number:8,
                    type:"C"
                },
                {
                    number:9,
                    type:"N"
                },
                {
                    number:10,
                    type:"C"
                },
                {
                    number:11,
                    type:"C"
                },
                {
                    number:12,
                    type:"C"
                },
                {
                    number:13,
                    type:"C"
                },
                {
                    number:14,
                    type:"C"
                }
            ],
            nTerminal_2:[
                {
                    number:73,
                    type:"N"
                },
                {
                    number:74,
                    type:"C"
                },
                {
                    number:75,
                    type:"C"
                },
                {
                    number:76,
                    type:"O"
                },
                {
                    number:77,
                    type:"C"
                },
                {
                    number:78,
                    type:"O"
                },
                {
                    number:79,
                    type:"C"
                }
            ],
            nTerminal_3:[
                {
                    number:143,
                    type:"N"
                },
                {
                    number:144,
                    type:"C"
                },
                {
                    number:145,
                    type:"C"
                },
                {
                    number:146,
                    type:"O"
                },
                {
                    number:147,
                    type:"C"
                },
                {
                    number:148,
                    type:"C"
                },
                {
                    number:149,
                    type:"C"
                }
            ],
            nTerminal_4:[
                {
                    number:376,
                    type:"N"
                },
                {
                    number:377,
                    type:"C"
                },
                {
                    number:378,
                    type:"C"
                },
                {
                    number:379,
                    type:"O"
                },
                {
                    number:380,
                    type:"C"
                },
                {
                    number:381,
                    type:"O"
                },
                {
                    number:382,
                    type:"C"
                }
            ],
            nTerminal_5:[
                {
                    number:220,
                    type:"N"
                },
                {
                    number:221,
                    type:"C"
                },
                {
                    number:222,
                    type:"C"
                },
                {
                    number:223,
                    type:"O"
                },
                {
                    number:224,
                    type:"C"
                },
                {
                    number:225,
                    type:"O"
                }
            ],
            nTerminal_6:[
                {
                    number:298,
                    type:"N"
                },
                {
                    number:299,
                    type:"C"
                },
                {
                    number:300,
                    type:"C"
                },
                {
                    number:301,
                    type:"O"
                },
                {
                    number:302,
                    type:"C"
                },
                {
                    number:303,
                    type:"O"
                },
                {
                    number:304,
                    type:"C"
                }
            ],
            sheetEnd:[
                {
                    number:366,
                    type:"N"
                },
                {
                    number:347,
                    type:"N"
                },
                {
                    number:326,
                    type:"N"
                },
                {
                    number:313,
                    type:"N"
                },
                {
                    number:390,
                    type:"N"
                },
                {
                    number:154,
                    type:"N"
                },
                {
                    number:150,
                    type:"N"
                },
                {
                    number:166,
                    type:"N"
                },
                {
                    number:204,
                    type:"N"
                },
                {
                    number:122,
                    type:"N"
                },
                {
                    number:62,
                    type:"N"
                },
                {
                    number:45,
                    type:"N"
                },
                {
                    number:32,
                    type:"N"
                },
                {
                    number:15,
                    type:"N"
                },
                {
                    number:350,
                    type:"O"
                },
                {
                    number:329,
                    type:"O"
                },
                {
                    number:316,
                    type:"O"
                },
                {
                    number:153,
                    type:"O"
                },
                {
                    number:157,
                    type:"O"
                },
                {
                    number:146,
                    type:"O"
                },
                {
                    number:207,
                    type:"O"
                },
                {
                    number:379,
                    type:"O"
                },
                {
                    number:76,
                    type:"O"
                },
                {
                    number:104,
                    type:"O"
                },
                {
                    number:125,
                    type:"O"
                },
                {
                    number:48,
                    type:"O"
                },
                {
                    number:35,
                    type:"O"
                },
                {
                    number:18,
                    type:"O"
                }
            ]
        }
    },
    GCN4:{
        initTransform:'zoom 90; rotate -z 12; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{
            contacting:[
                {
                    number:1051,
                    type:"C"
                },
                {
                    number:1052,
                    type:"C"
                },
                {
                    number:1053,
                    type:"C"
                },
                {
                    number:1054,
                    type:"C"
                },
                {
                    number:1532,
                    type:"C"
                },
                {
                    number:1533,
                    type:"C"
                },
                {
                    number:1534,
                    type:"C"
                },
                {
                    number:1535,
                    type:"C"
                },
                {
                    number:1085,
                    type:"C"
                },
                {
                    number:1086,
                    type:"C"
                },
                {
                    number:1087,
                    type:"C"
                },
                {
                    number:1566,
                    type:"C"
                },
                {
                    number:1567,
                    type:"C"
                },
                {
                    number:1568,
                    type:"C"
                },
                {
                    number:1110,
                    type:"C"
                },
                {
                    number:1111,
                    type:"C"
                },
                {
                    number:1112,
                    type:"C"
                },
                {
                    number:1113,
                    type:"C"
                },
                {
                    number:1591,
                    type:"C"
                },
                {
                    number:1592,
                    type:"C"
                },
                {
                    number:1593,
                    type:"C"
                },
                {
                    number:1594,
                    type:"C"
                },
                {
                    number:1141,
                    type:"C"
                },
                {
                    number:1142,
                    type:"C"
                },
                {
                    number:1143,
                    type:"O"
                },
                {
                    number:1144,
                    type:"N"
                },
                {
                    number:1622,
                    type:"C"
                },
                {
                    number:1623,
                    type:"C"
                },
                {
                    number:1624,
                    type:"O"
                },
                {
                    number:1625,
                    type:"N"
                },
                {
                    number:1171,
                    type:"C"
                },
                {
                    number:1172,
                    type:"C"
                },
                {
                    number:1173,
                    type:"C"
                },
                {
                    number:1174,
                    type:"C"
                },
                {
                    number:1652,
                    type:"C"
                },
                {
                    number:1653,
                    type:"C"
                },
                {
                    number:1654,
                    type:"C"
                },
                {
                    number:1655,
                    type:"C"
                },
                {
                    number:1205,
                    type:"C"
                },
                {
                    number:1206,
                    type:"C"
                },
                {
                    number:1207,
                    type:"C"
                },
                {
                    number:1686,
                    type:"C"
                },
                {
                    number:1687,
                    type:"C"
                },
                {
                    number:1688,
                    type:"C"
                },
                {
                    number:1709,
                    type:"C"
                },
                {
                    number:1710,
                    type:"C"
                },
                {
                    number:1711,
                    type:"C"
                },
                {
                    number:1712,
                    type:"C"
                },
                {
                    number:1228,
                    type:"C"
                },
                {
                    number:1229,
                    type:"C"
                },
                {
                    number:1230,
                    type:"C"
                },
                {
                    number:1231,
                    type:"C"
                },
                {
                    number:1262,
                    type:"C"
                },
                {
                    number:1263,
                    type:"C"
                },
                {
                    number:1264,
                    type:"C"
                },
                {
                    number:1735,
                    type:"C"
                },
                {
                    number:1736,
                    type:"C"
                },
                {
                    number:1737,
                    type:"C"
                },
                {
                    number:1738,
                    type:"C"
                },
                {
                    number:1743,
                    type:"C"
                },
                {
                    number:1744,
                    type:"C"
                },
                {
                    number:1745,
                    type:"C"
                },
                {
                    number:1254,
                    type:"C"
                },
                {
                    number:1255,
                    type:"C"
                },
                {
                    number:1256,
                    type:"C"
                },
                {
                    number:1257,
                    type:"C"
                }
            ]
        }
    },
    collagen:{
        initTransform:'zoom 70; rotate z 43; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{
            glycine:[
                {
                    number:1,
                    type:"N"
                },
                {
                    number:2,
                    type:"C"
                },
                {
                    number:3,
                    type:"C"
                },
                {
                    number:4,
                    type:"O"
                },
                {
                    number:20,
                    type:"N"
                },
                {
                    number:21,
                    type:"C"
                },
                {
                    number:22,
                    type:"C"
                },
                {
                    number:23,
                    type:"O"
                },
                {
                    number:39,
                    type:"N"
                },
                {
                    number:40,
                    type:"C"
                },
                {
                    number:41,
                    type:"C"
                },
                {
                    number:42,
                    type:"O"
                },
                {
                    number:58,
                    type:"N"
                },
                {
                    number:59,
                    type:"C"
                },
                {
                    number:60,
                    type:"C"
                },
                {
                    number:61,
                    type:"O"
                }
            ]
        }
    },
    p2AWF:{
        initTransform:'zoom 70; rotate z 0; rotate y 0; rotate x 30;',
        basedOnMol: false,
        groups:{
            irreg_1:[
                {
                    number:2,
                    type:"C"
                },
                {
                    number:6,
                    type:"C"
                },
                {
                    number:14,
                    type:"C"
                },
                {
                    number:21,
                    type:"C"
                }
            ],
            alpha_1:[
                {
                    number:28,
                    type:"C"
                },
                {
                    number:39,
                    type:"C"
                },
                {
                    number:43,
                    type:"C"
                },
                {
                    number:49,
                    type:"C"
                },
                {
                    number:57,
                    type:"C"
                },
                {
                    number:65,
                    type:"C"
                },
                {
                    number:73,
                    type:"C"
                },
                {
                    number:84,
                    type:"C"
                },
                {
                    number:95,
                    type:"C"
                },
                {
                    number:104,
                    type:"C"
                },
                {
                    number:112,
                    type:"C"
                },
                {
                    number:117,
                    type:"C"
                },
                {
                    number:126,
                    type:"C"
                },
                {
                    number:134,
                    type:"C"
                },
                {
                    number:142,
                    type:"C"
                },
                {
                    number:151,
                    type:"C"
                }
            ],
            irreg_2:[
                {
                    number:159,
                    type:"C"
                },
                {
                    number:166,
                    type:"C"
                },
                {
                    number:173,
                    type:"C"
                }
            ],
            beta_1:[
                {
                    number:182,
                    type:"C"
                },
                {
                    number:186,
                    type:"C"
                },
                {
                    number:197,
                    type:"C"
                },
                {
                    number:203,
                    type:"C"
                },
                {
                    number:208,
                    type:"C"
                },
                {
                    number:212,
                    type:"C"
                }
            ],
            irreg_3:[
                {
                    number:220,
                    type:"C"
                },
                {
                    number:228,
                    type:"C"
                },
                {
                    number:236,
                    type:"C"
                },
                {
                    number:244,
                    type:"C"
                },
                {
                    number:252,
                    type:"C"
                },
                {
                    number:260,
                    type:"C"
                }
            ],
            beta_2:[
                {
                    number:268,
                    type:"C"
                },
                {
                    number:280,
                    type:"C"
                },
                {
                    number:291,
                    type:"C"
                },
                {
                    number:305,
                    type:"C"
                },
                {
                    number:314,
                    type:"C"
                },
                {
                    number:321,
                    type:"C"
                },
                {
                    number:329,
                    type:"C"
                },
                {
                    number:337,
                    type:"C"
                }
            ],
            irreg_4:[
                {
                    number:345,
                    type:"C"
                },
                {
                    number:349,
                    type:"C"
                },
                {
                    number:356,
                    type:"C"
                },
                {
                    number:363,
                    type:"C"
                },
                {
                    number:371,
                    type:"C"
                },
                {
                    number:378,
                    type:"C"
                },
                {
                    number:386,
                    type:"C"
                },
                {
                    number:398,
                    type:"C"
                },
                {
                    number:407,
                    type:"C"
                }
            ],
            beta_3:[
                {
                    number:411,
                    type:"C"
                },
                {
                    number:415,
                    type:"C"
                },
                {
                    number:422,
                    type:"C"
                },
                {
                    number:433,
                    type:"C"
                },
                {
                    number:442,
                    type:"C"
                },
                {
                    number:447,
                    type:"C"
                },
                {
                    number:457,
                    type:"C"
                },
                {
                    number:465,
                    type:"C"
                }
            ],
            irreg_5:[
                {
                    number:472,
                    type:"C"
                },
                {
                    number:483,
                    type:"C"
                },
                {
                    number:490,
                    type:"C"
                },
                {
                    number:499,
                    type:"C"
                },
                {
                    number:507,
                    type:"C"
                },
                {
                    number:519,
                    type:"C"
                },
                {
                    number:526,
                    type:"C"
                },
                {
                    number:534,
                    type:"C"
                },
                {
                    number:545,
                    type:"C"
                }
            ],
            beta_4:[
                {
                    number:552,
                    type:"C"
                },
                {
                    number:559,
                    type:"C"
                },
                {
                    number:568,
                    type:"C"
                },
                {
                    number:576,
                    type:"C"
                },
                {
                    number:585,
                    type:"C"
                }
            ],
            irreg_6:[
                {
                    number:596,
                    type:"C"
                },
                {
                    number:604,
                    type:"C"
                },
                {
                    number:611,
                    type:"C"
                },
                {
                    number:620,
                    type:"C"
                },
                {
                    number:628,
                    type:"C"
                },
                {
                    number:642,
                    type:"C"
                },
                {
                    number:652,
                    type:"C"
                },
                {
                    number:659,
                    type:"C"
                },
                {
                    number:667,
                    type:"C"
                },
                {
                    number:674,
                    type:"C"
                },
                {
                    number:682,
                    type:"C"
                },
                {
                    number:691,
                    type:"C"
                },
                {
                    number:699,
                    type:"C"
                },
                {
                    number:703,
                    type:"C"
                },
                {
                    number:711,
                    type:"C"
                }
            ],
            alpha_2:[
                {
                    number:718,
                    type:"C"
                },
                {
                    number:724,
                    type:"C"
                },
                {
                    number:732,
                    type:"C"
                },
                {
                    number:738,
                    type:"C"
                },
                {
                    number:746,
                    type:"C"
                },
                {
                    number:754,
                    type:"C"
                }
            ],
            irreg_7:[
                {
                    number:764,
                    type:"C"
                },
                {
                    number:773,
                    type:"C"
                },
                {
                    number:780,
                    type:"C"
                },
                {
                    number:787,
                    type:"C"
                },
                {
                    number:796,
                    type:"C"
                },
                {
                    number:805,
                    type:"C"
                },
                {
                    number:816,
                    type:"C"
                },
                {
                    number:830,
                    type:"C"
                },
                {
                    number:838,
                    type:"C"
                },
                {
                    number:845,
                    type:"C"
                }
            ],
            alpha_3:[
                {
                    number:853,
                    type:"C"
                },
                {
                    number:863,
                    type:"C"
                },
                {
                    number:870,
                    type:"C"
                },
                {
                    number:877,
                    type:"C"
                },
                {
                    number:886,
                    type:"C"
                },
                {
                    number:893,
                    type:"C"
                },
                {
                    number:901,
                    type:"C"
                },
                {
                    number:909,
                    type:"C"
                },
                {
                    number:917,
                    type:"C"
                },
                {
                    number:923,
                    type:"C"
                },
                {
                    number:930,
                    type:"C"
                },
                {
                    number:938,
                    type:"C"
                },
                {
                    number:944,
                    type:"C"
                },
                {
                    number:952,
                    type:"C"
                },
                {
                    number:960,
                    type:"C"
                }
            ],
            irreg_8:[
                {
                    number:965,
                    type:"C"
                },
                {
                    number:973,
                    type:"C"
                }
            ]
        }
    },
    p1ERA:{
        initTransform:'zoom 50; rotate z 0; rotate y 30; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1IVA:{
        initTransform:'zoom 60; rotate z 0; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1O22:{
        initTransform:'zoom 50; rotate z 0; rotate y 0; rotate x 70;',
        basedOnMol: false,
        groups:{}
    },
    p1EQ1:{
        initTransform:'zoom 50; rotate z 40; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1O5J:{
        initTransform:'zoom 50; rotate z 0; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p3PGK:{
        initTransform:'zoom 50; rotate z 0; rotate y 30; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1XQO:{
        initTransform:'zoom 50; rotate z 0; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1IJQ:{
        initTransform:'zoom 50; rotate z 0; rotate y 40; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p1FPY:{
        initTransform:'zoom 40; rotate z 0; rotate y 0; rotate x 0;',
        basedOnMol: false,
        groups:{}
    },
    p2PAH:{
        initTransform:'zoom 600; rotate z 0; rotate -y 75; rotate x 10;',
        basedOnMol: false,
        groups:{}
    },
    lysozyme:{
        initTransform:'zoom 600; rotate z 0; rotate y 30; rotate -x 10;',
        basedOnMol: false,
        groups:{}
    }
}
