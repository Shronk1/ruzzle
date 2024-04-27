import { formatTime } from "./gameLogic";

export function getLastLevel(){
  return localStorage.getItem("lastLevel")??1;
}

export function setLastLevel(number){
  localStorage.setItem("lastLevel", number);
}

export function getScore(level){
  return {
    time:localStorage.getItem(`score-time-${level}`)??"-:--",
    moves:localStorage.getItem(`score-moves-${level}`)??"-"
  } 
}

export function setScore(level, time, moves){
  localStorage.setItem(`score-time-${level}`, formatTime(time));
  localStorage.setItem(`score-moves-${level}`, moves);
}