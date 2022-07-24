import dutch from '../images/hero/dutch.png'
import quaid from '../images/hero/quaid.png'
import matrix from '../images/hero/matrix.png'
import tasker from '../images/hero/tasker.png'

const heroDeck = [
  { name: 'Dutch', file: 'dutch', hp: 19, str: 13, spd: 9, desc: 'Veteran Special Operator. Expert in jungle warfare. Not afraid of getting muddy.', img: dutch, key: 0},
  { name: 'Douglas Quaid', file: 'quaid', hp: 15, str: 12, spd: 12, desc: 'Mild-mannered construction worker. Likes demure women. Not a fan of parties.', img: quaid, key: 1},
  { name: 'Harry Tasker', file: 'tasker', hp: 18, str: 12, spd: 10, desc: 'Veteran Special Agent with an iron-clad secret identity. Sometimes has marital troubles. Not a fan of car salesmen.', img: tasker, key: 2},
  { name: 'John Matrix', file: 'matrix', hp: 20, str: 15, spd: 8, desc: 'Commando by trade. Lumberjack by necessity. Father of the Year.', img: matrix, key: 3},
];

export default heroDeck;
