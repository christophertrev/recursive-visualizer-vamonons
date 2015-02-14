var RPSOutcomes = function (rounds){
  var rounds = rounds || 3;
  var outcomes = [];
  var plays = ['R', 'P', 'S']
  var combos = function (rounds, roundsPlayed){
    if( rounds === 0 ){
      outcomes.push(roundsPlayed);
      return;
    }
    for(var i = 0; i < plays.length; i++ ){
      currentPlay = plays[i];
      combos(rounds-1,roundsPlayed.concat(currentPlay));
    }
  }
  combos(rounds, []);
  return outcomes;
}