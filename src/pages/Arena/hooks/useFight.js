import { controls } from "../../../constants/controls";
import { useKeyPress } from "../../../hooks/useKeyPress";
import { useArena } from "./useArena";

const getDamage = (attacker, defender) => {
  defender.health -= attacker.damage
};

const getHitPower = (fighter) => {
  // return hit power
};

const getBlockPower = (fighter) => {
  // return block power
}; 


export const useFight = () => {
  const { selectedPair } = useArena();
  const { keysPressed } = useKeyPress();
  const {
    playerOneAttack,
    playerOneBlock, 
    playerTwoAttack,
    playerTwoBlock,
    playerOneCriticalHitCombination,
    playerTwoCriticalHitCombination,
  } = controls;
  const fighterOneDetails = selectedPair.playerOne
  const fighterTwoDetails = selectedPair.playerTwo
  
  console.log(keysPressed);


  return {
    fighterOneDetails,
    fighterTwoDetails,
    // winner,
  };
};
