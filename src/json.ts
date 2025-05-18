export const json = {
  "title": "World History",
  "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  "completedHtmlOnCondition": [
    {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
    },
    {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }
  ],
  "pages": [
    {
      "name": "Start Page",
      "elements": [
        {
          "type": "html",
          "name": "startinginfo",
          "html": "You are about to start a quiz on World history. <br>You will have 30 seconds for every question and 120 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
        },
        {
          "type": "text",
          "name": "username",
          "titleLocation": "hidden",
          "isRequired": true,
          "maxLength": 25
        }
      ]
    },
    {
      "name": "Question 1",
      "title": "1.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "1",
          "title": "Which ancient civilization built the pyramids of Giza?\n",
          "correctAnswer": "C",
          "choices": [
            {
              "value": "A",
              "text": "Romans"
            },
            {
              "value": "B",
              "text": "Greeks"
            },
            {
              "value": "C",
              "text": "Egyptians"
            },
            {
              "value": "D",
              "text": "Persians"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 2",
      "title": "2.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "2",
          "title": "Who was the leader of the Soviet Union during World War II?\n",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "Vladimir Lenin"
            },
            {
              "value": "B",
              "text": "Joseph Stalin"
            },
            {
              "value": "C",
              "text": "Leon Trotsky"
            },
            {
              "value": "D",
              "text": "Nikita Khrushchev"
            }
          ],
          "choicesOrder": "random"
        }
      ]
    },
    {
      "name": "Question 3",
      "title": "3.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "3",
          "title": "What major event started on July 28, 1914?\n",
          "correctAnswer": "C",
          "choices": [
            {
              "value": "A",
              "text": "World War II"
            },
            {
              "value": "B",
              "text": "The Cold War"
            },
            {
              "value": "C",
              "text": "World War I"
            },
            {
              "value": "D",
              "text": "The American Civil War"
            }
          ],
          "choicesOrder": "random"
        }
      ]
    },
    {
      "name": "Question 4",
      "title": "4.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "4",
          "title": "Which empire was known for its road network and engineering?",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "Byzantine Empire"
            },
            {
              "value": "B",
              "text": "Roman Empire"
            },
            {
              "value": "C",
              "text": "Ottoman Empire"
            },
            {
              "value": "D",
              "text": "Mongol Empire"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 5",
      "title": "5.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "5",
          "title": "What wall was built to protect China from invasions?\n",
          "correctAnswer": "C",
          "choices": [
            {
              "value": "A",
              "text": "Berlin Wall"
            },
            {
              "value": "B",
              "text": "Wall of Babylon"
            },
            {
              "value": "C",
              "text": "Great Wall of China"
            },
            {
              "value": "D",
              "text": "Hadrian’s Wall"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 6",
      "title": "6.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "6",
          "title": "Who was the first emperor of the Roman Empire?",
          "correctAnswer": "C",
          "choices": [
            {
              "value": "A",
              "text": "Julius Caesar"
            },
            {
              "value": "B",
              "text": "Nero"
            },
            {
              "value": "C",
              "text": "Augustus"
            },
            {
              "value": "D",
              "text": "Caligula"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 7",
      "title": "7.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "7",
          "title": "Which document was signed in 1215 limiting the power of the English king?\n",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "The Constitution"
            },
            {
              "value": "B",
              "text": "Magna Carta"
            },
            {
              "value": "C",
              "text": "Bill of Rights"
            },
            {
              "value": "D",
              "text": "Treaty of Versailles"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 8",
      "title": "8.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "8",
          "title": "Which civilization invented cuneiform writing?\n",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "Egyptians"
            },
            {
              "value": "B",
              "text": "Sumerians"
            },
            {
              "value": "C",
              "text": "Greeks"
            },
            {
              "value": "D",
              "text": "Aztecs"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 9",
      "title": "9.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "9",
          "title": "What country was split into East and West during the Cold War?\n",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "Korea"
            },
            {
              "value": "B",
              "text": "Germany"
            },
            {
              "value": "C",
              "text": "Vietnam"
            },
            {
              "value": "D",
              "text": "Poland"
            }
          ]
        }
      ]
    },
    {
      "name": "Question 10",
      "title": "10.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "10",
          "title": "Who was the famous military leader of France during the early 1800s?\n",
          "correctAnswer": "B",
          "choices": [
            {
              "value": "A",
              "text": "Charlemagne"
            },
            {
              "value": "B",
              "text": "Napoleon Bonaparte"
            },
            {
              "value": "C",
              "text": "Louis XIV"
            },
            {
              "value": "D",
              "text": "Robespierre"
            }
          ]
        }
      ]
    }
  ],
  "showProgressBar": true,
  "progressBarLocation": "bottom",
  "startSurveyText": "Start Quiz",
  "firstPageIsStartPage": true,
  "showTimer": true,
  "timeLimit": 120,
  "timeLimitPerPage": 30
}